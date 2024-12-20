import React from 'react';

import Logo from  "../Logo/Logo.png"

import "../Styles/Components/Footer.css";

function Footer() {
  return (
    <div className='footer' style={{backgroundColor: "#151212", padding: "3% 7%", color: "white", display: "grid"}}>
        <div id='foot1'>
          <span id='f1'>
            <a href='/' aria-label="logo">
              <img id='navimg' alt='' src={Logo}/>
            </a>
          </span>
          <span id='f2'>
              <a href='/'>Privacy Policy</a>
              <a href='/'>Terms & Conditions</a>
              <a href='/sponsor'>Sponsor</a>
          </span>
          <span id='f3' style={{display: "flex"}}>
              <a aria-label="facebook" target='_blank' href='https://web.facebook.com/people/Ahiajoku/61563513687903'>
                <i class="fa-brands fa-facebook"></i>
              </a>
              <a aria-label="twitter" target='_blank' href='https://x.com/AhiajokuCenter'>
                <i class="fa-brands fa-twitter"></i>
              </a>
              <a aria-label="instagram" target='_blank' href="https://www.instagram.com/ahiajoku">
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a aria-label="linkedin" target='_blank' href='https://www.linkedin.com/company/ahiajoku-center/about'>
                <i class="fa-brands fa-linkedin"></i>
              </a>
              <a aria-label="youtube" target='_blank' href='https://www.youtube.com/@AhiajokuNg'>
                <i class="fa-brands fa-youtube"></i>
              </a>
          </span>
        </div>
        <div id='foot2' style={{textAlign: "center"}}>© {new Date().getFullYear()} Ahiajoku, {/* , developed by <a style={{color: "#a58e31"}} target='_blank' href='https://www.linkedin.com/in/miracle-anyiam-879a2b177'>Miracle</a>.<br id='brkk'/>  */}All rights reserved.</div>
    </div>
  )
}

export default Footer