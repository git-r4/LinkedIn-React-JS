import {Row, Col, Container} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAddressBook,
    faCalendarDays, faChevronDown, faChevronUp,
    faFileLines, faHashtag,
    faIdCard, faNewspaper,
    faPeopleGroup,
    faUserGroup
} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import {useState, useEffect} from 'react';
import { usersFetching, usersFetched, usersFetchingError } from '../../../actions';
import {useHttp} from "../../../hooks/http.hook";
import {useSelector, useDispatch} from "react-redux";
import { Helmet } from "react-helmet";

import './myNetwork.scss'
import image from "../../../images/adv.png";

const MyNetwork = (props) => {
    const [hideComponents, setHideComponents] = useState(true);
    const { users, loadingStatus } = useSelector(state => state);
    const dispatch = useDispatch();
    const {request} = useHttp();

    useEffect(() => {
        dispatch(usersFetching());
        request("http://localhost:3001/users")
            .then(data => dispatch(usersFetched(data)))
            .catch(() => dispatch(usersFetchingError()))
    }, [])

    const renderUser = (user) =>{
        return user.map(item => {
            return (
                <Col lg={4} className="styleForCol">
                    <div className="everyUser" key={item.id}>
                        <div className="everyUser_backImg"></div>
                        <div className="everyUser_img">
                            <img
                                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                                alt="user-image"/>
                        </div>
                        <div className="everyUser_info">
                            <h4>{item.name} {item.surname}</h4>
                            <span>{item.description}</span>
                        </div>
                        <div className="everyUser_followBtn">
                            <button>Follow</button>
                        </div>
                    </div>
                </Col>
            )
        })

    }
    const content = renderUser(users);
    return(
        <div className="myNetwork">
            <Helmet>
                <title>LinkedIn</title>
            </Helmet>
            <Container>
                <Row>
                    <Col lg={3}>
                        <div className="manageMyNetwork" style={props.styleOff}>
                            <div className="manageMyNetwork_header">
                                <h4>Manage my network</h4>
                            </div>
                            <div className={hideComponents ? "manageMyNetwork_components" : "manageMyNetwork_components hideCompo"}>
                                <Link to=".">
                                    <div className="every_component">
                                        <FontAwesomeIcon className="every_component_icon" icon={faUserGroup} />
                                        <span>Connection</span>
                                    </div>
                                </Link>
                                <Link to=".">
                                    <div className="every_component">
                                        <FontAwesomeIcon className="every_component_icon" icon={faAddressBook} />
                                        <span>Contacts</span>
                                    </div>
                                </Link>
                                <Link to=".">
                                    <div className="every_component">
                                        <FontAwesomeIcon className="every_component_icon" icon={faIdCard} />
                                        <span>People I Follow</span>
                                    </div>
                                </Link>
                                <Link to=".">
                                    <div className="every_component">
                                        <FontAwesomeIcon className="every_component_icon" icon={faPeopleGroup} />
                                        <span>Groups</span>
                                    </div>
                                </Link>
                                <Link to=".">
                                    <div className="every_component">
                                        <FontAwesomeIcon className="every_component_icon" icon={faCalendarDays} />
                                        <span>Events</span>
                                    </div>
                                </Link>
                                <Link to=".">
                                    <div className="every_component">
                                        <FontAwesomeIcon className="every_component_icon" icon={faFileLines} />
                                        <span>Page</span>
                                    </div>
                                </Link>
                                <Link to=".">
                                    <div className="every_component">
                                        <FontAwesomeIcon className="every_component_icon" icon={faNewspaper} />
                                        <span>Newsletters</span>
                                    </div>
                                </Link>
                                <Link to=".">
                                    <div className="every_component">
                                        <FontAwesomeIcon className="every_component_icon" icon={faHashtag} />
                                        <span>Hashtags</span>
                                    </div>
                                </Link>
                            </div>
                            <div className="manageMyNetwork_showBtn">
                                <button
                                    onClick={() => setHideComponents(hideComponents => !hideComponents)}>
                                    Show less
                                    {hideComponents ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}
                                </button>
                            </div>
                            <div className="manageMyNetwork_line"></div>
                            <div className="advertisement">
                                <img src={image} alt="advImage"/>
                            </div>
                            <div className="global">
                                <div className="global_content">
                                    <div>
                                        <Link to=".">About</Link>
                                        <Link to=".">Accessibility</Link>
                                        <Link to=".">Help Center</Link>
                                    </div>
                                    <div>
                                        <Link to=".">Privacy & Terms</Link>
                                        <Link to=".">Ad Choices</Link>
                                    </div>
                                    <div>
                                        <Link to=".">Advertising</Link>
                                        <Link to=".">Business Services</Link>
                                    </div>
                                    <div>
                                        <Link to=".">Get the LinkedIn app</Link>
                                        <Link to=".">More</Link>
                                    </div>
                                </div>
                                <div className="global_copyright">
                                    <div>
                                        <h4>Linked</h4>
                                        <span>in</span>
                                    </div>
                                    LinkedIn Corporation © 2022
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={9}>
                        <div className="invitations">
                            <span>No pending invitations</span>
                            <button>Manage</button>
                        </div>
                        {loadingStatus === 'error' ? <h4>Loading</h4> : null}
                        {loadingStatus === 'loading' ?
                            <h4 style={{
                                display: 'flex',
                                justifyContent: 'center',
                                width: '100%'}}>Loading</h4>
                            :
                            <div className="peopleRecommended">
                                <div className="peopleRecommended_seeAll">
                                    <span>People in Computers and Electronics Manufacturing industry are following</span>
                                    <button>See all</button>
                                </div>
                                <div className="peopleRecommended_people">
                                    <Row>
                                        {content}
                                    </Row>
                                </div>

                                <div className="peopleRecommended_seeAll">
                                    <span>People you may know from My own company</span>
                                    <button>See all</button>
                                </div>
                                <div className="peopleRecommended_people">
                                    <Row>
                                        {content}
                                    </Row>
                                </div>

                                <div className="peopleRecommended_seeAll">
                                    <span>Software Engineers you may know</span>
                                    <button>See all</button>
                                </div>
                                <div className="peopleRecommended_people">
                                    <Row>
                                        {content}
                                    </Row>
                                </div>
                            </div>
                        }
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default MyNetwork;