import React from 'react';

import './Footer.css';

function Footer () {

  return (
    <section className="footer">
      <hr className="footer-seperator" />
      <section className="footer-social-media">
        {/* <a href="/" target="_blank" rel="noopener noreferrer" className = "linki">LinkedIn</a> */}
      </section>
      <section className="footer-info">
        <section className="footer-info-left">
          <section className="footer-info__name">
              PES University
          </section>
          <section className="footer-info__returns">
            Returns Policy
            <br />
            Delivery
          </section>        
        </section>
        <section className="footer-info-center">
          <section className="footer-info__email">
            innovocation.info@gmail.com
          </section>
          <section className="footer-info__terms">
            Terms and Conditions
            <br />
            Copyright
          </section>
        </section>
        <section className="footer-info-right">
          <section className="footer-info__number">
            <a href = "#" className = "linki">LinkedIn 1</a><br/>
          </section>
          <section className="footer-info__contact">
          
            <a href = "#" className = "linki">LinkedIn 2</a>
            <br />
            <a href = "#" className = "linki">LinkedIn 3</a>
          </section>
        </section>
      </section>
      <hr className="footer-seperator" />
    </section>
  )

}

export default Footer;