import React from 'react';
import {Link} from 'react-router-dom';
import './home.style.css';
import CardStatFilm from '../../components/cardstatfilm';
import ListFilm from '../../components/listfilm'
import * as ReactBoostrap from 'react-bootstrap';

export default function index(){

    return(
        <div className="containers">
                    <div className="carddetail">
                        <CardStatFilm/>
                    </div>
                    <div>
                        <ListFilm/>
                    </div>
        </div>
    )
}