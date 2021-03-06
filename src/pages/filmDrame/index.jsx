import React from 'react';
import './filmDrame.style.css';
import Search from '../../components/search';
import CardStatFilm from '../../components/cardstatfilm';
import ListFilmDrame from '../../components/listefilmdrame'
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
                        <ListFilmDrame/>
                    </ReactBoostrap.Col>
                </ReactBoostrap.Row>
            </ReactBoostrap.Container>
        </div>
    )
}