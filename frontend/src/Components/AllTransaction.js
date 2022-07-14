import axios from "axios";
import { useEffect, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import ReactPaginate from 'react-paginate';



export default function AllTransaction(props){
   
    const navigate = useNavigate();
    console.log(props.allData)

    const [items, setItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState();

    useEffect(()=>{

        const getTransaction = async () =>{
           const res = await fetch(`http://localhost:4000/api/transaction/getAllTransaction?page=${currentPage}&limit=5`);
           const data = await res.json();
           setItems(data.results.docs)
           setTotalPages(data.results.totalPages)
        }
        getTransaction()
    },[currentPage])


    const handlePageChange =  (data)=>{
        console.log(data.selected)
        setCurrentPage(data.selected + 1)
    }

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
                {items.map((data)=> 
                <div key={data._id} className={`${data.transactionStatus==="Pending" ? "border-yellow-500" : data.transactionStatus === "Failed"?"border-red-800" : "border-green-800"}  border-2 rounded-lg w-96  text-left p-5 text- space-y-3 hover:shadow-2xl hover:scale-105`}>
                    <p className="font-bold flex justify-between">Name: <span className="font-normal">{`${data.firstName} ${data.lastName}`}</span></p>
                    <p className="font-bold flex justify-between">Payment Date: <span className="font-normal">{data.date}</span></p>
                    <p className="font-bold flex justify-between">Amount Paid: <span className="font-normal">{data.amount}</span></p>
                    <p className="font-bold flex justify-between">Transaction Id: <span className="font-normal">{data.transactionId}</span></p>
                    <p className="font-bold flex justify-between">Payment Status: <span className={`font-semibold ${data.transactionStatus==="Pending" ? "text-yellow-500" : data.transactionStatus === "Failed"?"text-red-800" : "text-green-800"} `}>{data.transactionStatus}</span></p>
                    <p className="text-center  hover:cursor-pointer hover:scale-105 text-blue-700" onClick={tranClickHandlaer}  id={data._id}>Show more Details</p>
                </div>)}
            </div>
            <div className="text-center mt-5">
                <ReactPaginate
                 breakLabel="..."
                 nextLabel="Next >"
                 previousLabel="< Previous"
                 containerClassName="flex flex-wrap justify-center"
                 pageCount={totalPages}
                 marginPagesDisplayed={2}
                 pageRangeDisplayed={3}
                 pageClassName="border-y border-r px-3 py-1 border-blue-300 hover:text-white hover:bg-blue-300 hover:cursor-pointer hover:border"
                 pageLinkClassName="text-red"
                 nextClassName="border px-3 border-l-0 py-1 border-blue-300 text-white bg-blue-600 hover:cursor-pointer hover:border hover:bg-white hover:text-black"
                 previousClassName="border  px-3 py-1 border-blue-300 text-white bg-blue-600 hover:cursor-pointer hover:border hover:bg-white hover:text-black"
                 breakClassName="border-y border-r px-3 py-1 border-blue-300 hover:text-white hover:bg-blue-300 hover:cursor-pointer hover:border"
                 activeClassName="bg-blue-600 text-white"
                 onPageChange={handlePageChange}
                />
                

            </div>

        </div>
        </>
    )
}