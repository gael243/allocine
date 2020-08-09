import React from 'react';
import './cardstatfilm.style.css';
import * as ReactBoostrap from 'react-bootstrap';
import { FaRegCaretSquareDown } from 'react-icons/fa';


export default function CardStatFilm(){
    return(
        <div className="cardStat">
            <ReactBoostrap.Container >
                <ReactBoostrap.Row>
                    <ReactBoostrap.Col>
                        <ReactBoostrap.Card  className="cardDetailStat">
                            <ReactBoostrap.Card.Body>
                                    <ReactBoostrap.Card.Text>
                                            <p> Drame <ReactBoostrap.Badge variant="secondary">30 Disponible</ReactBoostrap.Badge></p>
                                    </ReactBoostrap.Card.Text>
                            </ReactBoostrap.Card.Body>
                        </ReactBoostrap.Card>
                    </ReactBoostrap.Col>
                </ReactBoostrap.Row>
                <ReactBoostrap.Row>
                    <ReactBoostrap.Col>
                    <ReactBoostrap.Card   className="cardDetailStat">
                            <ReactBoostrap.Card.Body>
                                    <ReactBoostrap.Card.Text>
                                            <p>Action <ReactBoostrap.Badge variant="secondary">20 Disponible</ReactBoostrap.Badge></p>
                                    </ReactBoostrap.Card.Text>
                            </ReactBoostrap.Card.Body>
                        </ReactBoostrap.Card>
                    </ReactBoostrap.Col>
                </ReactBoostrap.Row>
                <ReactBoostrap.Row>
                    <ReactBoostrap.Col>
                    <ReactBoostrap.Card  className="cardDetailStat">
                            <ReactBoostrap.Card.Body>
                                    <ReactBoostrap.Card.Text>
                                            <p>Comedie <ReactBoostrap.Badge variant="secondary">40 Disponible</ReactBoostrap.Badge></p>
                                    </ReactBoostrap.Card.Text>
                            </ReactBoostrap.Card.Body>
                        </ReactBoostrap.Card>
                    </ReactBoostrap.Col>
                </ReactBoostrap.Row>
                <ReactBoostrap.Row>
                    <ReactBoostrap.Col>
                    <ReactBoostrap.Card   className="cardDetailStat">
                            <ReactBoostrap.Card.Body>
                                    <ReactBoostrap.Card.Text>
                                            <p>Amour <ReactBoostrap.Badge variant="secondary">80 Disponible</ReactBoostrap.Badge></p>
                                    </ReactBoostrap.Card.Text>
                            </ReactBoostrap.Card.Body>
                        </ReactBoostrap.Card>
                    </ReactBoostrap.Col>
                </ReactBoostrap.Row>
            </ReactBoostrap.Container>
        </div>
    )
}