import { useEffect, useState } from "react";
import { Link,useNavigate } from "react-router-dom";




export default function AllTransaction(props){
   
    const navigate = useNavigate();

    console.log(props.allData)

    const tranClickHandlaer = (e)=>{
        e.preventDefault()
        console.log(e.target.id)
        props.setTranInfo(e.target.id)
        navigate(`/user/${e.target.id}`)

    }
   
    return(
        
        <>
        <div className="m-10 border-2 py-10 rounded-lg text-right">
            <Link to="/" className="py-4 px-14 rounded-lg border text-right m-5 hover:text-white hover:bg-sky-500">Back to Registration</Link>
            <div className="container justify-center text-center flex flex-wrap p-5 gap-10 mt-10">
                {props.allData.map((data)=> 
                <div key={data._id} className={`${data.transactionStatus==="Pending" ? "border-yellow-500" : data.transactionStatus === "Failed"?"border-red-800" : "border-green-800"}  border-2 rounded-lg w-96  text-left p-5 text- space-y-3 hover:shadow-2xl hover:scale-105`}>
                    <p className="font-bold flex justify-between">Name: <span className="font-normal">{`${data.firstName} ${data.lastName}`}</span></p>
                    <p className="font-bold flex justify-between">Payment Date: <span className="font-normal">{data.date}</span></p>
                    <p className="font-bold flex justify-between">Amount Paid: <span className="font-normal">{data.amount}</span></p>
                    <p className="font-bold flex justify-between">Transaction Id: <span className="font-normal">{data.transactionId}</span></p>
                    <p className="font-bold flex justify-between">Payment Status: <span className={`font-semibold ${data.transactionStatus==="Pending" ? "text-yellow-500" : data.transactionStatus === "Failed"?"text-red-800" : "text-green-800"} `}>{data.transactionStatus}</span></p>
                    <p className="text-center hover:cursor-pointer hover:scale-105 text-blue-700" onClick={tranClickHandlaer}  id={data._id}>Show more Details</p>
                </div>)}
                
            </div>
        </div>
        </>
    )
}