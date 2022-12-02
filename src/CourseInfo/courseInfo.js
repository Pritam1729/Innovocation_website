import React from "react";
import { useLocation, Link } from "react-router-dom";
import "./courseInfo.css";
import {HashLink} from 'react-router-hash-link';
import useRef from 'react';
// import Pagination from "./Pagination";
// import Table from "./Table";;
import Footer from './Footer/Footer'

const CourseInfo = (props) => {
    const location = useLocation();
    console.log(props);
    

    const course = location.state?.course;
    const rate = location.state?.rate;
    const image = location.state?.image;
    const price = location.state?.price;
    const description = location.state?.description;
    const people = location.state?.people;
    const users = location.state?.users;
    const features = location.state?.features;
    const hour = location.state?.hour;
    const articles = location.state?.articles;
    const genre = location.state?.genre;

    
    var ur = "https://en.wikipedia.org/wiki/";
    ur = ur + course;
    console.log(ur);

    return (
        <div className="body2">
            <div className="container2">
                <div className="Navbar">
                    <img src="https://img.freepik.com/free-vector/innovation-education-logo-template-vector-with-atom-science-graphic_53876-125986.jpg?size=338&ext=jpg2" alt="not_found" className="img22"></img>
                    <Link to="/" className="link1">Home</Link>
                    <Link to="/search" className="link2">Course</Link>
                    <HashLink to="/Home#Aboutus" className="link3">About Us</HashLink>
                    {/* <div className = "User">Pritam Gurav</div>
                    <div className = "logoutlink"><Link to = "#" className = "link4">LOG OUT</Link></div> */}
                    {/* <div className = "User">Pritam Gurav</div> */}

                    <div class="dropdown">

                        <button class="dropbtn">Account
                            <i class="fa fa-caret-down"></i>
                        </button>
                        <div class="dropdown-content">
                            <Link to="/accountdetails" className="log">User Info</Link>
                            <Link to="/" className="log">LOG OUT</Link>
                            {/* <Link to="#" className="log">Link 3</Link> */}
                        </div>
                    </div>
                </div>
                <div className="body3">
                    <h1 className="courseinfo" >Course Info</h1>
                    <div className="image">
                        {/* <p><img src="https://miro.medium.com/max/1400/1*mDKusLBkGKBWW4aycK4PCA.png" alt="no found" className = "courseimg"></img> */}
                        <h1 className="header">{course}</h1>
                        <p className="price">Reviews : <img src="https://cdn.pixabay.com/photo/2021/10/11/00/58/star-6699069__340.png" alt="no" className="rupeeimg"></img> {rate} ({people} ratings)</p>
                        {/* <p className = "reviews">Price : ₹ 900</p> */}
                        {/* <p className = "separator">-------------------------------------------------------------------------------------------</p> */}
                        {/* <button className = "Button">Enroll the course for $900</button> */}
                        <Link to = "/search/payment" state = {{name : course, price : price}} className="button"  >Enroll now for ₹{price}</Link>
                        <div className="descriptions">{description}</div>
                        <div className="bestsellar">
                            <p>BestSellar</p>
                        </div>
                        <div className="feature">
                            <h2 className="headingggg">Characteristic</h2><br></br>
                            <ol className="list">
                                <li>{features[0]}</li>
                                <li>{features[1]}</li>
                                <li>{features[2]}</li>
                                <li>{features[3]}</li>
                                <li>{features[4]}</li>
                            </ol>
                        </div>

                        <img src={image} alt="no found" className="courseimg"></img>

                        {/* </p> */}
                    </div>
                    <div className="characteristic">
                        <h1 className="characterhead">This Course includes :</h1><br></br>
                        <div className="character1">
                            <img src="https://png.pngtree.com/element_our/20190528/ourmid/pngtree-blue-play-button-icon-image_1127700.jpg" className="img100"></img>
                            <h1 className="character10">{hour}hr of Lectures</h1>
                        </div>
                        <div className="character2">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqCNCH0SW5tAbYxBvinq2GR2TEQ4EE70Mrtij0Ue1v2w&s" className="img100"></img>
                            <h1 className="character10">{articles} articles</h1>
                        </div>
                        <div className="character3">
                            <img src="https://www.shutterstock.com/image-photo/assignment-text-written-on-notebook-260nw-511858639.jpg" className="img100"></img>
                            <h1 className="character20">In course Assignments</h1>
                        </div>
                        <div className="character4">
                            <img src="https://t3.ftcdn.net/jpg/00/40/16/94/360_F_40169428_TYvr5Q8V81p0QRGD7CzwPjt8OVLuMhSf.jpg" className="img100"></img>
                            <h1 className="character20">Certificate of Completion</h1>
                        </div>
                    </div>
                    <div className="congrats" id="congra">
                        <h1 className="congratshead">CONGRAGULATION</h1><br></br><br></br>
                        <ul className="congratsLIst">
                            <li>Course Name : {course}</li><br></br>
                            <li>Price  :  ₹{price}</li><br></br>
                            <li>Features : {genre[0]}, {genre[1]}</li><br></br>
                            <li>Payment Status :  PAID</li><br></br>
                        </ul>
                        <h1 className="congratshead2">You Have Been Sucessfully Registered for this Course</h1>
                        <button className="congratsbutton" onClick={OverconstrainedError}>OK</button>
                    </div>
                    <div className="tolearnmore">
                        <h1 className="tolearn">TO LEARN MORE</h1>
                        <div className="button222">
                            <a className="buttonlearn" href={ur}>Click here to learn more</a>
                        </div>

                    </div>
                    {/* <div className = "footerHome1">
                        <Footer className = "Footerhome"/>
                    </div> */}
                </div>
            </div>
        </div>
    )

}

// class CourseInfo extends React.Component {
//     constructor() {
//         super();
//         this.state = { color: "red" };
//     }

//     render() {

//         const locati = ()=> {
//             const location = useLocation();
//         const course = location.state?.course;
//         const rate = location.state?.rate;
//         const image = location.state?.image;
//         const price = location.state?.price;
//         const description = location.state?.description;
//         const people = location.state?.people;
//         const users = location.state?.users;
//         const features = location.state?.features;
//         const hour = location.state?.hour;
//         const articles = location.state?.articles;
//         const genre = location.state?.genre;
//         }
//         locati()
//         return (
//             <div className="body2">
//                 <div className="container2">
//                     <div className="Navbar">
//                         <img src="https://img.freepik.com/free-vector/innovation-education-logo-template-vector-with-atom-science-graphic_53876-125986.jpg?size=338&ext=jpg2" alt="not_found" className="img22"></img>
//                         <Link to="/" className="link1">Home</Link>                     <Link to="/search" className="link2">Course</Link>
//                         <Link to="#" className="link3">About Us</Link>
//                         {/* <div className = "User">Pritam Gurav</div>
//                     <div className = "logoutlink"><Link to = "#" className = "link4">LOG OUT</Link></div> */}                    {/* <div className = "User">Pritam Gurav</div> */}

//                         <div class="dropdown">

//                             <button class="dropbtn">Pritam Gurav
//                                 <i class="fa fa-caret-down"></i>
//                             </button>
//                             <div class="dropdown-content">
//                                 <Link to="/" className="log">Log Out</Link>
//                                 <Link to="#" className="log">Link 2</Link>
//                                 <Link to="#" className="log">Link 3</Link>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="body3">
//                         <h1 className="courseinfo" >Course Info</h1>
//                         <div className="image">
//                             {/* <p><img src="https://miro.medium.com/max/1400/1*mDKusLBkGKBWW4aycK4PCA.png" alt="no found" className = "courseimg"></img> */}
//                             <h1 className="header">{course}</h1>
//                             <p className="price">Reviews : <img src="https://cdn.pixabay.com/photo/2021/10/11/00/58/star-6699069__340.png" alt="no" className="rupeeimg"></img> {rate} ({people} ratings)</p>
//                             {/* <p className = "reviews">Price : ₹ 900</p> */}
//                             {/* <p className = "separator">-------------------------------------------------------------------------------------------</p> */}
//                             {/* <button className = "Button">Enroll the course for $900</button> */}
//                             <button className="button" /*onClick ={congrat()}*/ >Enroll now for ₹{price}</button>
//                             <div className="descriptions">{description}</div>
//                             <div className="bestsellar">
//                                 <p>BestSellar</p>
//                             </div>
//                             <div className="feature">
//                                 <h2 className="headingggg">Characteristic</h2><br></br>
//                                 <ol className="list">
//                                     <li>{features[0]}</li>
//                                     <li>{features[1]}</li>
//                                     <li>{features[2]}</li>
//                                     <li>{features[3]}</li>
//                                     <li>{features[4]}</li>
//                                 </ol>
//                             </div>

//                             <img src={image} alt="no found" className="courseimg"></img>

//                             {/* </p> */}
//                         </div>
//                         <div className="characteristic">
//                             <h1 className="characterhead">This Course includes :</h1><br></br>
//                             <div className="character1">
//                                 <img src="https://png.pngtree.com/element_our/20190528/ourmid/pngtree-blue-play-button-icon-image_1127700.jpg" className="img100"></img>
//                                 <h1 className="character10">{hour}hr of Lectures</h1>
//                             </div>
//                             <div className="character2">
//                                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqCNCH0SW5tAbYxBvinq2GR2TEQ4EE70Mrtij0Ue1v2w&s" className="img100"></img>
//                                 <h1 className="character10">{articles} articles</h1>
//                             </div>
//                             <div className="character3">
//                                 <img src="https://www.shutterstock.com/image-photo/assignment-text-written-on-notebook-260nw-511858639.jpg" className="img100"></img>
//                                 <h1 className="character20">In course Assignments</h1>
//                             </div>
//                             <div className="character4">
//                                 <img src="https://t3.ftcdn.net/jpg/00/40/16/94/360_F_40169428_TYvr5Q8V81p0QRGD7CzwPjt8OVLuMhSf.jpg" className="img100"></img>
//                                 <h1 className="character20">Certificate of Completion</h1>
//                             </div>
//                         </div>
//                         <div className="congrats" id="congra">
//                             <h1 className="congratshead">CONGRAGULATION</h1><br></br><br></br>
//                             <ul className="congratsLIst">
//                                 <li>Course Name : {course}</li><br></br>
//                                 <li>Price  :  ₹{price}</li><br></br>
//                                 <li>Features : {genre[0]}, {genre[1]}</li><br></br>
//                                 <li>Payment Status :  PAID</li><br></br>
//                             </ul>
//                             <h1 className="congratshead2">You Have Been Sucessfully Registered for this Course</h1>
//                             <button className="congratsbutton" onClick={OverconstrainedError}>OK</button>
//                         </div>
//                         <div className="tolearnmore">
//                             <h1 className="tolearn">TO LEARN MORE</h1>
//                             <div className="button222">
//                                 <a className="buttonlearn" href={ur}>Click here to learn more</a>
//                             </div>

//                         </div>
//                         {/* <div className = "footerHome1">
//                          <Footer className = "Footerhome"/>
//                      </div> */}
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }



export default CourseInfo
