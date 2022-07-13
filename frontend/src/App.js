import AllTransaction from "./Components/AllTransaction";
import TransactionReg from "./Components/TransactionReg";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import TransactionInfo from "./Components/TransactionInfo";
import { useEffect, useState } from "react";
import axios from "axios";
import PageNotFound from "./Components/PageNotFound";


function App() {
  const [allData, setAllData] = useState([]);
  const [tranInfo, setTranInfo] = useState('');
  const [refresh, setRefresh] = useState(5)


  useEffect(()=>{
    axios.get('http://localhost:4000/api/transaction/getAllTransaction')
    .then(res=> setAllData(res.data.results))
  },[refresh])
    
  return (
   <>
   <Router>
      <Routes>
        <Route exact path="/" element={<TransactionReg setAllData={setAllData} setRefresh={setRefresh} refresh={refresh}/>}/>
        <Route exact path="/admin" element={<AllTransaction allData={allData} setTranInfo={setTranInfo}/>}/>
        <Route exact path={`/user/${tranInfo}`} element={<TransactionInfo allData={allData} tranInfo={tranInfo} />}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
   </Router>
   
   </>
  );
}

export default App;
