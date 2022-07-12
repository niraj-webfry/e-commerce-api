import {useForm} from "react-hook-form";
// import DatePicker from "react-datepicker";
// import 'react-datepicker/dist/react-datepicker.css'
import { useState } from "react";
import { Link } from "react-router-dom";

export default function TransactionReg(){
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    // const [selectedDate, setSelectedDate] = useState(null)


    return(
        <>
        <div className="container px-auto  text-right border-2  py-10 m-10 rounded-lg">
            {/* <div className="text-left ">
                <img className="bg-cover w-96" src="" alt="" />
            </div> */}
            <Link to="/admin" className="py-4 px-14 rounded-lg border text-right mx-10 hover:text-white hover:bg-sky-500">Admin</Link>
            <div className="lg:flex justify-center text-center gap-20 items-center">
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
                                    {...register("firstName", {required:true, maxLength:25})}/>
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
                            {...register("lastName", {required:true, maxLength:25})}/>
                            {errors.lastName?.type === 'required' && <p className="text-red-600">Please enter Last Name</p>}
                            {errors.lastName?.type === 'maxLength' && <p className="text-red-600 text-center">Cannot exceed 25 characters</p>}
                        </div>

                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700  rounded py-3 px-4 mb-3 border border-gray-200 focus:outline-none focus:bg-white" 
                                id="email" 
                                type="email" 
                                name="email" 
                                placeholder="example@mail.com"
                                {...register("email",{required:true})}/>
                                {errors.email?.type === 'required' && <p className="text-red-600">Please enter a valid email. e.g: vicky@example.com</p>}
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="phone">
                                Phone No
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4  focus:outline-none focus:bg-white focus:border-gray-500" 
                                id="phone" 
                                name="phone" 
                                type="tel"
                                {...register("phone",{required:true,})}/>
                                {errors.phone?.type === "required" && <p className="text-red-600">Please enter Phone number</p>}
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="password">
                                Date and time of Transaction
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4  focus:outline-none focus:bg-white focus:border-gray-500"
                                type="datetime-local"
                                name="dateTime" 
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
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="paymentFile">Upload a Snapshot</label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4  focus:outline-none focus:bg-white focus:border-gray-500 hover:cursor-pointer"
                            type="file" 
                            name="paymentFile" 
                            id="paymentFile" 
                            {...register("paymentFile", {required:true})}
                        />
                        {errors.paymentFile?.type === "required" && <p className="text-red-600"> Please upload a Transaction snapshot</p>}
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