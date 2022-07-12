import AllTransaction from "./Components/AllTransaction";
import TransactionReg from "./Components/TransactionReg";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";


function App() {
  return (
   <>
   <Router>
      <Routes>
        <Route exact path="/" element={<TransactionReg/>}/>
        <Route exact path="/admin" element={<AllTransaction/>}/>
      </Routes>
   </Router>
   
   </>
  );
}

export default App;
