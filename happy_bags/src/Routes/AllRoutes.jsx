import { Route,Routes } from "react-router-dom";
import LandingPage from "../Pages/LandingPage";
import PrivateRoute from "./PrivateRoute";
import AdminPage from "../Pages/AdminPage";
 import Adminlogin from "../Pages/Adminlogin";
 import CartAdd from "../Pages/CartItems/CartAdd";
import Womens from "../Pages/Womens";
import Mens from "../Pages/Mens";
import Tabbycollection from "../Pages/Tabbycollection";
function AllRoutes() {
  return <div>
  <Routes>
  
  <Route path="/" element={ <LandingPage/>}></Route>
  <Route path="/AdminPage" element={<PrivateRoute><AdminPage/></PrivateRoute> }></Route>
     <Route path="/Adminlogin" element={<Adminlogin/>}></Route> 
     <Route path="/CartAdd" element={ <CartAdd/>}></Route>
     <Route path="/Mens" element={ <Mens/>}></Route>
     <Route path="/Womens" element={ <Womens/>}></Route>
     <Route path="/Tabbycollection" element={ <Tabbycollection/>}></Route>
  </Routes>
  </div>;
}

export default AllRoutes;
