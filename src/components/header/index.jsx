import React from 'react';
import './header.style.css';
import * as ReactBoostrap from 'react-bootstrap';
import {Link} from 'react-router-dom';



export default function Header(){
    return(
        <header>
            <div className="containers">
            <ReactBoostrap.Container>
                <ReactBoostrap.Row>
                    <ReactBoostrap.Col lg="3" className="titleheader"><img src="https://images.pingidentity.com/image/upload/f_auto,q_auto/ping_dam/content/dam/ping-6-2-assets/images/customer-stories/netflix/Netflix-logo-white.png" width="120px"/></ReactBoostrap.Col>
                    <ReactBoostrap.Col>
                            <ul className="linkheader">
                                <li><Link to='/drame'>Drame</Link></li>
                                <li><Link to="/action">Action</Link></li>
                                <li><Link to="/comedie">Comedie</Link></li>
                                <li><Link to="/Amour">Amour</Link></li>
                            </ul>
                    </ReactBoostrap.Col>
                </ReactBoostrap.Row>
            </ReactBoostrap.Container>
            </div>
            <div className="container2">
               <ReactBoostrap.Container>
                    <ReactBoostrap.Row>
                        <ReactBoostrap.Col className="sousTitle">
                            <p>le site  <strong>NETFLIX</strong> vous offre l'opportunité<br/>
                            de rechercher n’importe quel
                            film enfin de vous regaler sur votre canaper</p>
                        </ReactBoostrap.Col>
                    </ReactBoostrap.Row>
                </ReactBoostrap.Container> 
            </div>
        </header>


    )
}