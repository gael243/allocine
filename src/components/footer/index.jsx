import React from 'react';
import './footer.style.css'
import * as ReactBoostrap from 'react-bootstrap';
import { FaFacebookF,FaEnvelopeOpen,FaPhoneAlt } from "react-icons/fa";



export default function Footer(){
    return(
        <div className="containerss">
            <ReactBoostrap.Container>
                <ReactBoostrap.Row>
                    <ReactBoostrap.Col className="titlefooter" lg={3} xs={12}>
                    <img src="https://images.pingidentity.com/image/upload/f_auto,q_auto/ping_dam/content/dam/ping-6-2-assets/images/customer-stories/netflix/Netflix-logo-white.png" width="120px"/>
                    </ReactBoostrap.Col>
                    <ReactBoostrap.Col lg={2}>
                            <ul className="linkfooter" > 
                                <li>Drame</li>
                                <li>Action</li>
                                <li>Comedie</li>
                                <li>Amour</li>
                            </ul>
                    </ReactBoostrap.Col>
                    <ReactBoostrap.Col lg={3}  xs={12}>
                            <ul className="socialfooter"> 
                                <li><FaEnvelopeOpen/>GoodMv@gmail.com</li>
                                <li><FaFacebookF/>facebook</li>
                                <li><FaPhoneAlt/>+243810951614</li>
                                <li><FaPhoneAlt/>+243976050009</li>
                            </ul>
                    </ReactBoostrap.Col>
                    <ReactBoostrap.Col lg={3}  xs={12}>
                            <ul className="socialfooter"> 
                                <li><FaEnvelopeOpen/>GoodMv@gmail.com</li>
                                <li><FaFacebookF/>facebook</li>
                                <li><FaPhoneAlt/>+243810951614</li>
                                <li><FaPhoneAlt/>+243976050009</li>
                            </ul>
                    </ReactBoostrap.Col>
                </ReactBoostrap.Row>
            </ReactBoostrap.Container>
        </div>
    )
}