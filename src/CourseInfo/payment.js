import React from 'react';
import './payment.css';
import {useLocation,Link} from 'react-router-dom';


const Payment = (props) => {
    const location = useLocation();
    const name =location.state?.name;
    const price = location.state?.price;
  return (
    <div className = "paymentcontainer">
        <div className = "paymentdetails">
            <div className = "paymentheader">
                <h1>CONGRAGULATION</h1>
            </div>
            <div className = "coursename1">
                <h1>Course : {name}</h1>
            </div>
            <div className = "courseprice1">
                <h1>Price : ₹{price}</h1>
            </div>
            <div className = "paymentstatus">
                <h1>Payment status : PAID</h1>
            </div>
            <div className = "success">
                <h1>You have Successfully Registered for the course</h1>
            </div>
            <div className = "clickhere">
                CLick here to view more <Link to = "/search">Cources</Link>
            </div>

        </div>
    </div>
  )
}

export default Payment
