import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
export default function Footer() {
  return (
    <>
    <div className="footer">
      <div className='logo'>
        <img src={logo} alt='logo' />
      </div>
      <div className='footer-links'>
        <p>Quick Naviagtion</p>
        <ul>
          <li><a href="/ ">Home</a></li>
          <li><a href="#home">TV Shows</a></li>
          <li><a href="#home">Movies</a></li>
          <li><a href="#trending_movie">Trending Movies</a></li>
          <li><a href="#trending_tv_shows">Trending TV Shows</a></li>
        </ul>
      </div>
      <div className='footer-contact-us'>
        <p>Contact Us</p>
        <p>Hello@gmail.com</p>
        <p>Phone: 123-456-7890</p>
      </div>
      <div className="footer-social">
      <ul>
        <li><a href="#home"><FaFacebook /> </a></li>
        <li><a href="#home"><FaTwitter /> </a></li>
        <li><a href="#home"><FaYoutube /> </a></li> 
        <li><a href="#home"><FaInstagram /> </a></li> 
      </ul>
    </div>
    </div>
    <div className='copyright'>
      <p>Copyright &copy; 2025</p>
      <p>Created By Priyansh Saxena</p>
    </div>
    </>
  )
}
