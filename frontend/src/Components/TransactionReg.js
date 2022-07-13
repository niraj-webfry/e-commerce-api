import {useForm} from "react-hook-form";
import { Link } from "react-router-dom";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from "react";



export default function TransactionReg(props){

    const { register, formState: { errors }, handleSubmit } = useForm();
    const [selectedDate, setSelectedDate] = useState();

   const onSubmit = data => {
    console.log(data);
    var formdata = new FormData()
    formdata.append('image', data.paymentFile[0])
    formdata.append('firstName', data.firstName)
    formdata.append('lastName', data.lastName)
    formdata.append('phone', data.phone)
    formdata.append('email', data.email)
    formdata.append('date', new Date(data.dateTime))
    formdata.append('transactionStatus', data.paymentStatus)
    formdata.append('paymentMode', data.paymentMode)
    formdata.append('transactionId', data.transactionId)
    formdata.append('amount', data.amount)
    formdata.append('note', data.note)
        var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow',
        }
    fetch(
      'http://localhost:4000/api/transaction/transaction-success',
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error))
     props.setRefresh(props.refresh+1); 
   }

    
    return(
        <>
        <div className="container px-5  text-center lg:border-2  py-10 lg:m-10 rounded-lg">
            
            <Link to="/admin" className="lg:py-4 py-2 px-6 lg:px-14 rounded-lg border text-center  hover:text-white hover:bg-sky-500">Admin</Link>
            <div className="flex justify-center text-center gap-20 items-center">
                
                <form className="w-full max-w-lg text-left px-5" onSubmit={handleSubmit(onSubmit)}>
                    <h2 className="text-center text-3xl font-semibold p-10">Transaction Registration</h2>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="first-name">
                                First Name
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700  rounded py-3 px-4 mb-3 border border-gray-200 focus:outline-none focus:bg-white" 
                                    id="first-name" 
                                    type="text" 
                                    name="firstName"
                                    {...register("firstName", {required:true, maxLength:25, })}/>
                                    {errors.firstName?.type === 'required' && <p className="text-red-600">Please enter First name</p>}
                                    {errors.firstName?.type === 'maxLength' && <p className="text-red-600">Can not exceed 25 characters</p>}
                        </div>
                        
                        <div className="w-full md:w-1/2 px-3 mb-6">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="last-name">
                                Last Name
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4  focus:outline-none focus:bg-white focus:border-gray-500" 
                            id="last-name" 
                            type="text" 
                            name="lastName"
                            {...register("lastName", {required:true, maxLength:25} )}/>
                            {errors.lastName?.type === 'required' && <p className="text-red-600">Please enter Last Name</p>}
                            {errors.lastName?.type === 'maxLength' && <p className="text-red-600 text-center">Cannot exceed 25 characters</p>}
                            
                        </div>
                        {/* <div>
                            <DatePicker
                            selected={selectedDate}
                            onChange={date=> setSelectedDate(date)}
                            className="border-2"
                            value={selectedDate}
                            {...register("date")}
                            />
                        </div> */}
                            
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700  rounded py-3 px-4 mb-3 border border-gray-200 focus:outline-none focus:bg-white" 
                                id="email" 
                                type="email" 
                                name="email" 
                                placeholder="example@mail.com"
                                {...register("email",{required:true} )}/>
                                {errors.email?.type === 'required' && <p className="text-red-600">Please enter a valid email. e.g: vicky@example.com</p>}
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="phone">
                                Phone No
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4  focus:outline-none focus:bg-white focus:border-gray-500" 
                                id="phone" 
                                name="phone" 
                                type="number"
                                {...register("phone",{required:true, maxLength:10, minLength:10})}/>
                                {errors.phone?.type === "required" && <p className="text-red-600">Please enter Phone number</p>}
                                {errors.phone?.type === "maxLength" && <p className="text-red-600">Max 10 Digits Allowed</p>}
                                {errors.phone?.type === "minLength" && <p className="text-red-600">Min 10 Digits Required</p>}

                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="password">
                                Dat of Transaction
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4  focus:outline-none focus:bg-white focus:border-gray-500"
                                type="date"
                                name="date" 
                                id="date" 
                                
                                {...register("dateTime", {required:true})}/>
                                {errors.date?.type === "required" && <p className="text-red-600">Please select the date</p>}
                            
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="pay-mode">
                                Payment Mode
                            </label>
                            <div className="relative">
                                <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded focus:outline-none focus:bg-white focus:border-gray-500" 
                                    id="pay-mode" 
                                    name="pay-mode"
                                    {...register("paymentMode")}>
                                    <option value="Cash">Cash</option>
                                    <option value="UPI">UPI</option>
                                    <option value="Debit/Cradit Card">Debit/Credit Card</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-6">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="tran-id">
                                Transaction Id
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                                id="tran-id" 
                                name="tran-id" 
                                type="text" 
                                placeholder="e.g 4545..."
                                {...register("transactionId", {required:true})}/>
                                {errors.transactionId?.type === 'required' && <p className="text-red-600">Please Enter TransactionId</p>}
                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="pay-status">
                                Payment Status
                            </label>
                            <div className="relative">
                                <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded focus:outline-none focus:bg-white focus:border-gray-500" 
                                    id="pay-status" 
                                    name="payStatus"
                                    {...register("paymentStatus")}>
                                    <option value="Success">Success</option>
                                    <option value="Pending">Pending</option>
                                    <option value="Failed">Failed</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mb-6">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="Amount">
                            Paid Amount
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4  focus:outline-none focus:bg-white focus:border-gray-500 "
                             type="number"
                             name="amount" 
                             id="amount"
                             {...register("amount", {required:true})}
                         />
                         {errors.amount?.type === 'required' && <p className="text-red-600">Please enter the paid amount</p>}
                    </div>
                    <div className="mb-6">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="image">Upload a Snapshot</label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4  focus:outline-none focus:bg-white focus:border-gray-500 hover:cursor-pointer"
                            type="file" 
                            name="paymentFile" 
                            id="paymentFile" 
                            
                            {...register("paymentFile", {required:true})}
                        />
                        {errors.paymentFile?.type === "required" && <p className="text-red-600"> Please upload a Transaction snapshot</p>}
                    </div>
                    <div className="mb-6">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="note">
                           Note (If any)
                        </label>
                        <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4  focus:outline-none focus:bg-white focus:border-gray-500 "
                             type="text"
                             name="note" 
                             id="note"
                             {...register("note")}
                         />
                    </div>


                    <div className="">
                       <button type="submit" className="px-5 py-3 w-full border rounded-lg hover:bg-gray-700 hover:text-white">Submit</button>  
                    </div>
                    
                </form>
            </div>    

        </div>
        </>
    )
}