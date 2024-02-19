
import "./App.css";
import { NavigationBar } from "./Component/NavigationBar";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Component/Home";

import { AboutUs } from "./Component/AboutUs";
import { ContactUs } from "./Component/ContactUs";

import Footer from "./Component/Footer";
import Services from "./Component/Services";
import { Admin } from "./Component/Admin";
import Register from "./Component/Register";
import Login from "./Component/Login";
import { CourierDetailsList } from "./Component/CourierDetailsList";
import { CourierUpdateDetails } from "./Component/CourierUpdateDetails";
import { NavBars } from "./Component/NavBars";
import { PackageList } from "./Component/PackageList";
import FetchDetails from "./Component/FetchDetails";




function App() {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  return (
    <BrowserRouter>
      {/* <NavigationBar/> */}
      <Routes>
        <Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/AboutUs" element={<AboutUs />}></Route>
          <Route path="/Contact-Us" element={<ContactUs />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/services" element={isLoggedIn === 'true' ? <Services /> : <Navigate to="/" />} />
    
          <Route path="/Register" element={<Register />}></Route>
          {/* <Route path="/Admin" element={<Admin />}></Route> */}
          <Route path="/Admin" element={<CourierDetailsList/>}></Route>
          <Route path="/navbar" element={<NavBars/>}></Route>
          <Route path="/edit/:courierId" element={<CourierUpdateDetails/>}></Route>
          <Route path="/PackageList/" element={<PackageList/>}></Route>
          {/* <Route path="/FetchDetails/:id" element={<FetchDetails/>}></Route> */}
          <Route path="/FetchDetails" element={<FetchDetails/>}></Route>


        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
