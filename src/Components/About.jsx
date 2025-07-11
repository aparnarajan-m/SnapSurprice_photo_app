import React from 'react'
import { FaInstagram, FaTwitter, FaWhatsapp, FaPinterest, FaLinkedin, FaFacebook, FaYoutube } from 'react-icons/fa';
import './About.css'

function About() {
    return (
        <div className='about-wrapper'>
            <div className='about-container'>

                <div className='about-content'>
                    <div className='about-description'>
                        <h2>About Us</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                            Suscipit totam itaque sunt ab, impedit dicta cum saepe, <br />
                            fugit quis voluptatibus cumque illum exercitationem consequatur animi ipsa reprehenderit?  <br />
                            Aliquam, voluptatem accusamus!. Lorem ipsum dolor sit amet consectetur adipisicing elit.  <br />
                            Nulla id beatae impedit vitae quae nihil tempore animi voluptatum asperiores facere illum  <br />
                            modi maxime praesentium nostrum ipsam,dignissimos possimus est cumque. <br />
                        </p>
                        <div>
                           <p>📩 snapsurprise@gmail.com <br /> 🎧 +91 99******43</p> 
                        </div>
                        <div className="social-links">
                            <a className='facebook' href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                            <a className='youtube' href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
                            <a className='instagram' href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                            <a className='twitter' href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                            <a className='watsapp' href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
                            <a className='pinrest' href="https://pinterest.com" target="_blank" rel="noopener noreferrer"><FaPinterest /></a>
                            <a className='linkedin' href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                        </div>
                    </div>

                    <div className='contact-info'>
                        <div className='inputDiv'><input className='footerInput' type="text" placeholder='Your  e-mail' /> <button className='footerBtn'>Subscribe Now!</button></div>
                        <div className='ulLinks'>
                        <ul>
                            <h3 className='ulHead'>Partnership</h3>
                            <li>Websites</li>
                            <li>Social Media</li>
                            <li>Branding</li>
                        </ul>
                        <ul>
                            <h3 className='ulHead'>About</h3>
                            <li>Our Projects</li>
                            <li>Careers</li>
                        </ul>
                        <ul>
                            <h3 className='ulHead'>Support</h3>
                            <li>Support Requits</li>
                            <li>Contact</li>
                        </ul>
                        
                        </div>
                    </div>
                </div>

            </div>
             <div className='about-footer'>
                <h5>Copyright © 2025 SnapSurprise USA, Inc . All rights reserved. Terms of use | Privacy policy</h5>
            </div>
        </div>
    )
}

export default About