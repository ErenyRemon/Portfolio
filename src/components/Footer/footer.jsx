import './footer.css'

import { FaFacebook, FaLinkedinIn  } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { FaMapMarked } from "react-icons/fa";

export function Footer(){
    return <>
    <div className='footer'>
        <div>
            <div className='footerLeft '>

                <h3 className='textFooter'> Get in touch </h3>
                <div className='footerLeftdown'>
                    <div className='d-flex align-content-center'>
                <CiMail style={{fontSize: '25px'}}/>
                <span className='ms-2'>example@gmail.com </span>
                </div>
            <div className='d-flex align-content-center'>
                
                <FaMapMarked style={{fontSize: '25px'}}/>
                <span className='ms-2'>online </span>
                </div>
            </div>
            </div>
        </div>
        <div className='footermain'>
            <button className='footerButton'>Contact me</button>
        </div>
        <div className='footerRight'>
            <div className='d-flex justify-content-end gap-2 mb-2' >
            <FaLinkedinIn style={{ color: 'white', fontSize: '25px' }} />
            <FaFacebook style={{ color: 'white', fontSize: '24px' }} />
            <FaXTwitter  style={{color:'white' , fontSize: '25px'}} />

            </div>
            <p>copyright © all rights reserved</p>
        </div>
    </div>

    </>
}

