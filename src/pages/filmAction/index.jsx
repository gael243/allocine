import React from 'react';
import './filmAction.style.css';
import Search from '../../components/search';
import CardStatFilm from '../../components/cardstatfilm';
import ListFilmAction from '../../components/listefilmaction'
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
                        <ListFilmAction/>
                    </ReactBoostrap.Col>
                </ReactBoostrap.Row>
            </ReactBoostrap.Container>
        </div>
    )
}