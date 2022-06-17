import './messaging.scss';

import {Col, Row, Container} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../FooterAdv/Footer";
import { Link } from "react-router-dom";
import {
    faEllipsis,
    faMagnifyingGlass,
    faPenToSquare,
    faSliders,
    faImage,
    faPaperclip,
    faFilm, faFaceSmile, faAngleUp, faAngleDown
} from "@fortawesome/free-solid-svg-icons";
import { useState, useRef, useEffect } from 'react';
import { Helmet } from "react-helmet";

const Messaging = (props) => {
    const [textArea, setTextArea] = useState(false);
    const [activeLine, setActiveLine] = useState(false);
    const activeLineRef = useRef();

    useEffect(() => {

        let handler = (e) => {
            if(!activeLineRef.current.contains(e.target)){
                setActiveLine(false);
            }
        }

        document.addEventListener("mousedown", handler);

        return () => document.removeEventListener("mousedown", handler);

    }, [])


    return(
        <div className="message">
            <Helmet>
                <title>Messaging | LinkedIn</title>
            </Helmet>
            <Container>
                <Row>
                    <Col lg={9}>
                        <div className="messageBox">
                            <div className="messageBox_getMessage">
                                <div className="messageBox_getMessage_header">
                                    <h4>Messaging</h4>
                                    <div className="messageBox_getMessage_header_icons">
                                        <Link to="."><FontAwesomeIcon className="icon" icon={faEllipsis}/></Link>
                                        <Link to="."><FontAwesomeIcon className="icon" icon={faPenToSquare}/></Link>
                                    </div>
                                </div>
                                <div className="horizontalLine"></div>
                                <div className="messageBox_getMessage_searchMessage">
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                    <input type="text" placeholder="Search Message"/>
                                    <FontAwesomeIcon style={{cursor: 'pointer'}} icon={faSliders} />
                                </div>
                                <div className="messageBox_getMessage_users">
                                    <div>
                                        <h4>No Message</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="messageBox_line"></div>
                            <div className="messageBox_postMessage">

                                <div className="messageBox_postMessage_header">
                                    <div className="messageBox_postMessage_header_text">
                                        <h4>New message</h4>
                                    </div>

                                    <div className="horizontalLine"></div>

                                    <div className="messageBox_postMessage_header_input">
                                        <input type="text" placeholder="Type a name or multiple names"/>
                                    </div>
                                </div>


                                <div className="messageBox_postMessage_inputMessage">
                                    <div className="messageBox_postMessage_inputMessage_box">
                                        <div className={activeLine ? "lineTransition actLine" : "lineTransition"}></div>
                                        <div className="messageBox_postMessage_inputMessage_box_txtArea">
                                            <textarea className={textArea ? "txtAreaa activetxtAreaa" : "txtAreaa"}
                                                      ref={activeLineRef}
                                                      onClick={() => setActiveLine(true)}
                                                      typeof="text"
                                                      placeholder="Write a message..."></textarea>
                                            {
                                                textArea ?
                                                    <button onClick={() => setTextArea(false)}>
                                                        <FontAwesomeIcon icon={faAngleDown} />
                                                    </button>
                                                    :
                                                    <button onClick={() => setTextArea(true)}>
                                                        <FontAwesomeIcon icon={faAngleUp} />
                                                    </button>
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="horizontalLine"></div>
                                <div className="messageBox_postMessage_footer">
                                    <div className="messageBox_postMessage_footer_leftCol">
                                        <button>
                                            <FontAwesomeIcon icon={faImage} />
                                        </button>
                                        <button>
                                            <FontAwesomeIcon icon={faPaperclip} />
                                        </button>
                                        <button>
                                            <FontAwesomeIcon icon={faFilm} />
                                        </button>
                                        <button>
                                            <FontAwesomeIcon icon={faFaceSmile} />
                                        </button>
                                    </div>
                                    <div className="messageBox_postMessage_footer_rightCol">
                                        <button>
                                            Send
                                        </button>
                                        <button>
                                            <FontAwesomeIcon icon={faEllipsis} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <Footer styleOff={props.styleOff} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Messaging;