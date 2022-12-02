import React from 'react';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Search from './Happy';
import Courseinfo from './CourseInfo/courseInfo';
import Home from './Home/Home';
// import Firstpage from './Firstpage/Firstpage';
import Navbar from './components/Navbar/Navbar';
import Signin from './project/src/components/login_component';
import Signup from './project/src/components/signup_component';
import Userdetails from './project/src/components/userDetails.js';
import Home2 from './Home/Home2';
import UserDetails from './project/src/components/userDetails.js';
import Payment from './CourseInfo/payment';



function App() {
  return (
    <div>
    
      <BrowserRouter>
        <Routes>
            <Route path = "/" element = {<Home2/>}></Route>
            <Route path = "/Home" element = {<Home/>}></Route>
            <Route path="/search" element={<Search />}></Route>
            <Route path = "/courseInfo" element = {<Courseinfo />}></Route>
            {/* <Route path = "/signin" element = {<Signin/>}></Route> */}
            <Route path = "/sign-in" element = {<Signin />}></Route>
            <Route path = "/sign-up" element = {<Signup />}></Route>
            <Route path = "/accountdetails" element = {<UserDetails />}></Route>
            <Route path = "/search/payment" element = {<Payment />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
