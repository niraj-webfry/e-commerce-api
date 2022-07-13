import { useState } from "react"
import { Link } from "react-router-dom";



export default function TransactionInfo(props){
    const [detailData, setDetailData ] = useState();

    console.log(props.allData)
    console.log(props.tranInfo)
    

    const displayUser = props.allData.filter((user)=>{
        return user._id === props.tranInfo
    })

    console.log(displayUser)

    return( 
    <>
        <div className="container m-10 border-2 rounded-lg px-20 justify-center">
            <div className="my-8 text-right space-x-5">
                <Link to="/admin" className="border py-3 px-5 rounded-lg hover:bg-sky-500 hover:text-white">Admin</Link>
                <Link to="/" className="border py-3 px-5 rounded-lg hover:bg-sky-500 hover:text-white">Register a Transaction</Link>
            </div>

            {displayUser.map((data)=>(<div key={data._id}className="lg:flex border rounded-lg p-5 mb-10 w-full gap-20 lg:justify-between">
                
               <div className="p-5 space-y-4 border-2 rounded-lg w-[60%]">
                    <p className="font-bold text-lg text-slate-600 flex justify-between">Name: <span className="font-normal text-base ">{data.firstName} {data.lastName}</span></p>
                    <p className="font-bold text-lg text-slate-600 flex justify-between">Email: <span className="font-normal text-base  xt-">{data.email}</span></p>
                    <p className="font-bold text-lg text-slate-600 flex justify-between">Phone: <span className="font-normal text-base  ">{data.phone}</span></p>
                    <p className="font-bold text-lg text-slate-600 flex justify-between">Date: <span className="font-normal text-base  ">{data.date}</span></p>
                    <p className="font-bold text-lg text-slate-600 flex justify-between">Paid Amount: <span className="font-normal text-base  ">{data.amount}</span></p>
                    <p className="font-bold text-lg text-slate-600 flex justify-between">Payment Mode: <span className="font-normal text-base  ">{data.paymentMode}</span></p>
                    <p className="font-bold text-lg text-slate-600 flex justify-between">Transaction Id: <span className="font-normal text-base  ">{data.transactionId}</span></p>
                    <p className="font-bold text-lg text-slate-600 flex justify-between">Payment Status: <span className="font-normal text-base  ">{data.transactionStatus}</span></p>
                    <p className="font-bold text-lg text-slate-600 flex justify-between">Note: <span className="font-normal text-base  ">{data.note}</span></p>
                </div>
                <div className="justify-center w-[40%]">
                    <p className="text-center text-lg font-semibold text-slate-700">Transaction SnapShot</p>
                <img className="w-96" src={require(`../images/${data.imagePath}`)} alt="Transaction Image" />
                </div>
            </div>))}
            
        </div>
    </>
)
}