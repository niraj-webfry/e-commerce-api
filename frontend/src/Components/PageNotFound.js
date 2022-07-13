import { Link } from "react-router-dom";


export default function PageNotFound(){
    return(
        <>
        <div className="flex justify-center items-center">
                <div className="space-y-10 text-center">
                    <img className="h-80 my-10" src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?t=st=1657710092~exp=1657710692~hmac=d34e0843c434a5732c84667f939d8639ca7e699e5c513e8000a4974322ff080e&w=740" alt="" />
                    <p className="p-5 text-lg">Page not found!</p>
                    <Link to="/" className="border py-3 px-5 rounded-lg bg-sky-500 text-white hover:bg-slate-300 hover:text-slate-600">Back to Transaction Registration </Link>

                </div>
        </div>
        </>
    );
}