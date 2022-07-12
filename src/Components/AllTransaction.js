import { Link } from "react-router-dom";


export default function AllTransaction(){
    return(
        <>
        <div className="m-10 border-2 py-10 rounded-lg text-right">
            <Link to="/" className="py-4 px-14 rounded-lg border text-right mx-10 hover:text-white hover:bg-sky-500">Back to Registration</Link>
            <div className="container m-5 text-center flex my-5 gap-10">
                <div className="border-2 rounded-lg w-96  text-left p-5 space-y-3">
                    <p className="font-bold">Name:</p>
                    <p className="font-bold">Payment Date:</p>
                    <p className="font-bold">Transaction Id:</p>
                    <p className="font-bold">Payment Status:</p>
                    <p className="text-center">Show more Details</p>
                </div>
            </div>
        </div>
        </>
    )
}