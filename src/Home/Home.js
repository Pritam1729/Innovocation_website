import React from 'react'
import { Link } from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';
import Footer from './Footer/Footer';
import './Home.css'

const Home = () => {
  return (
    <div className="containerhome">
      <div className="headerhome">
        <h1 className="headerhomeheader">Welcome To</h1>
        <h1 className="headerhomeheader2">Innovocation</h1>
        <h2 className="headerhomeheader3">Be more creative and Learn from anywhere anything</h2>
        <div className="headerbutton3">
          <Link to="/Search" className="headerbutton23">Explore now</Link>
        </div>
        <img src="https://img.freepik.com/free-vector/female-student-listening-webinar-online_74855-6461.jpg?w=1060&t=st=1669530115~exp=1669530715~hmac=c2b8ecb1c36b3b7d2bea03b79d4f39eb56474a04632f6a92ac473e2101046e01" className="headerImage"></img>
      </div>
      <div className="whatweoffer">
        <h1 className="weofferhead">We Offer</h1>
        <div className="characterhome1">
          <img src="https://teaching.temple.edu/sites/teaching/files/styles/featured_image/public/edvice/shutterstock_261677060_0.jpg?itok=WOpzsDHd&c=b5d6a2edc6ed77be3260c481d6015613" className="img100home"></img>
          <h1 className="character10home">Video Lectures</h1>
        </div>
        <div className="characterhome2">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqCNCH0SW5tAbYxBvinq2GR2TEQ4EE70Mrtij0Ue1v2w&s" className="img100home"></img>
          <h1 className="character10home">Research articles</h1>
        </div>
        <div className="characterhome3">
          <img src="https://www.shutterstock.com/image-photo/assignment-text-written-on-notebook-260nw-511858639.jpg" className="img100home"></img>
          <h1 className="character20home">In course Assignments</h1>
        </div>
        <div className="characterhome4">
          <img src="https://t3.ftcdn.net/jpg/00/40/16/94/360_F_40169428_TYvr5Q8V81p0QRGD7CzwPjt8OVLuMhSf.jpg" className="img100home"></img>
          <h1 className="character20home">Certificate of Completion</h1>
        </div>
        <div className="characterhome5">
          <img src="https://thumbs.dreamstime.com/b/woman-having-doubts-thinking-many-81625792.jpg" className="img100home"></img>
          <h1 className="character10home">Doubt Session</h1>
        </div>
        <div className="characterhome6">
          <img src="https://www.shutterstock.com/image-photo/training-session-memo-written-on-260nw-353126819.jpg" className="img100home"></img>
          <h1 className="character20home"> Online  Training  session's</h1>
        </div>
        <div className="characterhome7">
          <img src="https://cdn.w600.comps.canstockphoto.com/the-experts-professional-people-help-clip-art_csp9868862.jpg" className="img100home"></img>
          <h1 className="character10home">Professional Experts</h1>
        </div>
        <div className="characterhome8">
          <img src="https://elearningindustry.com/wp-content/uploads/2020/11/how-to-use-animation-for-online-courses.jpg" className="img100home"></img>
          <h1 className="character10home">Live Session</h1>
        </div>


      </div>
      <div className = "Aboutus" id = "Aboutus">
            <h1 className = "aboutusheader">About Us</h1>
            <div className = "aboutdiv">
                <div className = "descrip">
                      <p>Hi All we are Team Innovocators. We are a team of three Entusiast Software Engineers. We have Build this website with a aim of making Education boundless and not only the core subjects must be thought But at the same time Innovocative Skiils must also get recognition. So that ,there will be overall development of a Student </p>
                </div>
                <img src = "https://img.freepik.com/free-vector/innovation-education-logo-template-vector-with-atom-science-graphic_53876-125986.jpg?size=338&ext=jpg2" className = "innoimg"></img>
            </div>
      </div>

      <div className="Navbarhome">
        <img src="https://img.freepik.com/free-vector/innovation-education-logo-template-vector-with-atom-science-graphic_53876-125986.jpg?size=338&ext=jpg2" alt="not_found" className="img22home"></img>
        <Link to="/Search" className="link1home">Course</Link>
        <HashLink smooth to="#Aboutus" className="link2home">About Us</HashLink>
        <HashLink smooth to="#Footerhome" className="link3home">Contacts</HashLink>
        {/* <div className = "User">Pritam Gurav</div>
                    <div className = "logoutlink"><Link to = "#" className = "link4">LOG OUT</Link></div> */}
        {/* <div className = "User">Pritam Gurav</div> */}

         <div class="dropdownhome">

          <button class="dropbtnhome">Account
            <i class="fa fa-caret-downhome"></i>
          </button>
          <div class="dropdown-contenthome">
            <Link to="/accountdetails" className="loghome">User Info</Link>
            <Link to="/" className="loghome">LOG OUT</Link>
            {/* <Link to="#" className="loghome">Link 3</Link> */}
          </div>
        </div>

      </div> 
      {/* <div className = "headerhome">
                          <h1 class >Welcome To Innovocation</h1>
      </div> */}
      <div className = "footerHome1" id = "Footerhome">
      <Footer className = "Footerhome" />
      </div>
    </div>
  )
}

export default Home
