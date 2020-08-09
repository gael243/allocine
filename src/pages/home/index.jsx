import React from 'react';
import {Link} from 'react-router-dom';
import './home.style.css';
import Search from '../../components/search';
import CardStatFilm from '../../components/cardstatfilm';
import ListFilm from '../../components/listfilm'
import * as ReactBoostrap from 'react-bootstrap';

export default function index(){

    return(
        <div>
            <ReactBoostrap.Container>
                <ReactBoostrap.Row>
                    <ReactBoostrap.Col>
                            <Search/>
                    </ReactBoostrap.Col>
                </ReactBoostrap.Row>
                <ReactBoostrap.Row>
                    <ReactBoostrap.Col lg="4">
                        <CardStatFilm/>
                    </ReactBoostrap.Col>
                    <ReactBoostrap.Col>
                        <ListFilm/>
                    </ReactBoostrap.Col>
                </ReactBoostrap.Row>
            </ReactBoostrap.Container>
        </div>
    )
}