
import React from 'react';
import logo from '../../image/logo.png';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <div className='footer-container'>
                <ul>
                    <img width='200px' src={logo} alt="" />
                    
                    <button className='btn-regular'>BOOK NOW <i class="fas fa-angle-right b"></i></button>
                </ul>
                <ul>
                    <h2>Services</h2>
                    <li><i class="fas fa-angle-double-right"></i> About Us</li>
                    <li><i class="fas fa-angle-double-right"></i> How it work</li>
                    <li><i class="fas fa-angle-double-right"></i> Our Services</li>
                    <li><i class="fas fa-angle-double-right"></i> Events</li>
                    <li><i class="fas fa-angle-double-right"></i> Our Packages</li>
                    <li><i class="fas fa-angle-double-right"></i> FQA</li>
                    <li><i class="fas fa-angle-double-right"></i> Schedule</li>
                </ul>
                <ul>
                    <h2>CONTACT US</h2>
                    <li><i class="fas fa-map-marker-alt"></i> Mirpur-12,Doctor Goli,Road-N2.Dhaka,Bangladesh</li>
                    <li><i class="fas fa-phone-alt"></i> +00965321402</li>
                    <li><i class="fas fa-envelope"></i> fitnessbd2021@gmail.com</li>
                    <li><i class="fas fa-clock"></i> Weack Days:05:00-22:00
                        Satardat:04:00-09:00
                        Wednessday:03:00-10:00
                    </li>
                </ul>
            </div>
            <div className='footer-copyright'>
                <p>Travio © 2021 All Right Reserved</p>
                <ul className='footer-icon'>
                    <li className='me-2 icon'><i className="fab fa-facebook-square"></i></li>
                    <li className='me-2 icon'><i className="fab fa-twitter-square"></i></li>
                    <li className='me-2 icon'><i className="fab fa-linkedin"></i></li>
                    <li className='me-2 icon'><i className="fab fa-instagram-square"></i></li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;