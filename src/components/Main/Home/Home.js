import { Container, Row, Col } from 'react-bootstrap';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBookmark,
    faFilm,
    faImage,
    faCalendarCheck,
    faNewspaper,
    faCircleInfo,
    faArrowRight,
    faCaretDown, faEarthAfrica, faThumbsUp, faComment, faPaperPlane, faShare
} from "@fortawesome/free-solid-svg-icons";
import { usersFetching, usersFetched, usersFetchingError } from '../../../actions'
import { useHttp } from "../../../hooks/http.hook";
import { useDispatch, useSelector } from "react-redux";
import {useEffect} from "react";

import { Helmet } from "react-helmet";
import Footer from "../FooterAdv/Footer";

import './home.scss';

const Home = (props) => {
    const { users, loadingStatus } = useSelector(state => state);
    const dispatch = useDispatch();
    const { request } = useHttp();

    useEffect(() => {
        dispatch(usersFetching());
        request("http://localhost:3001/users")
            .then(data => dispatch(usersFetched(data)))
            .catch(() => dispatch(usersFetchingError()))


        //and this listener scroll
        /*window.addEventListener('scroll', scrollTop);

        return () => {
            window.removeEventListener('scroll', scrollTop)
        }*/

    }, [])

    //this function for scroll header fixed
    /*const scrollTop = (e) => {
        console.log(window.pageYOffset);
        const element = document.querySelector('.community');
        const scrollYTop = window.scrollY;

        scrollYTop >= 400 ?
            element.classList.add('sticky') :
            element.classList.remove('sticky');

    }*/


    const renderUsers = (user) => {
       return user.map(item => {
            return(
                <div className="post_box" key={item.id}>
                    <div className="post_box_userInfoBox">
                        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="user-image"/>
                        <div className="post_box_userInfoBox_text">
                            <h4>{item.name} {item.surname}</h4>
                            <span>{item.description}</span>
                            <span>{item.activity} • <FontAwesomeIcon icon={faEarthAfrica} /></span>
                        </div>
                    </div>
                    <div className="post_box_postElement">
                        <h4>500 x 400</h4>
                    </div>

                    <div className="post_box_line"></div>
                    <div className="post_box_lcss">
                        <Link to=".">
                            <div className="iconBox">
                                <FontAwesomeIcon icon={faThumbsUp} />
                                <span>Like</span>
                            </div>
                        </Link>
                        <Link to=".">
                            <div className="iconBox">
                                <FontAwesomeIcon icon={faComment} />
                                <span>Coment</span>
                            </div>
                        </Link>
                        <Link to=".">
                            <div className="iconBox">
                                <FontAwesomeIcon icon={faShare} />
                                <span>Share</span>
                            </div>
                        </Link>
                        <Link to=".">
                            <div className="iconBox">
                                <FontAwesomeIcon icon={faPaperPlane} />
                                <span>Send</span>
                            </div>
                        </Link>
                    </div>
                </div>
            )
       })
    }
    const allUsers = renderUsers(users);

    return(
        <Container className="home">
            <Helmet>
                <title>Feed | LinkedIn</title>
            </Helmet>
            <Row>
                <Col lg={3}>
                    <div className="home_userBox">
                        <div className="home_userBox_info">
                            <div className="home_userBox_info_backWithImg">
                                <div className="home_userBox_info_backWithImg_backImg"></div>
                                <div className="home_userBox_info_backWithImg_img">
                                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="user-image"/>
                                </div>
                            </div>
                            <div className="home_userBox_info_userInfo">
                                <Link to="."><h4>Name Surname</h4></Link>
                                <span>Description</span>
                            </div>
                        </div>
                        <div className="home_userBox_line"></div>

                        <Link to=".">
                            <div className="home_userBox_friends">
                                <div className="home_userBox_friends_connection">
                                    <span>Connection</span>
                                    <span>0</span>
                                </div>
                                <span>Grow your network</span>
                            </div>
                        </Link>
                        <div className="home_userBox_line"></div>

                        <Link to=".">
                            <div className="home_userBox_premium">
                                <span>Access exclusive tools & insights</span>
                                <div className="home_userBox_premium_tryprem">
                                    <div className="home_userBox_premium_tryprem_goldIcn"></div>
                                    <span>Try Premium for free</span>
                                </div>
                            </div>
                        </Link>
                        <div className="home_userBox_line"></div>

                        <Link to=".">
                            <div className="home_userBox_myItems">
                                <div className="home_userBox_myItems_iconBox">
                                    <FontAwesomeIcon className="home_userBox_myItems_iconBox_icon" icon={faBookmark} />
                                </div>
                                <span>My items</span>
                            </div>
                        </Link>
                    </div>

                    <div className="community" style={props.styleOff}>
                        <div className="community_panel">
                            <Link to=".">
                                <span>Groups</span>
                            </Link>
                            <Link to=".">
                                <div className="community_panel_withAdd">
                                    <span>Events</span>
                                    <div><span>+</span></div>
                                </div>
                            </Link>
                            <Link to=".">
                                <span>Followed Hashtags</span>
                            </Link>

                        </div>

                        <div className="home_userBox_line"></div>
                        <Link to=".">
                            <div className="community_discover">
                                <h4>Discover more</h4>
                            </div>
                        </Link>
                    </div>
                </Col>
                <Col lg={6}>
                    <div className="share">
                        <div className="share_inpAndImg">
                            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="user-image"/>
                            <input type="text" name="post" placeholder="Start a post" />
                        </div>
                        <div className="share_icons">
                            <Link to="." className="share_icons_link">
                                <div className="share_icons_link_iconBox">
                                    <FontAwesomeIcon style={{color: '#70b5f9'}} className="share_icons_link_iconBox_icon" icon={faImage} />
                                    <span>Photo</span>
                                </div>
                            </Link>
                            <Link to="." className="share_icons_link">
                                <div className="share_icons_link_iconBox">
                                    <FontAwesomeIcon style={{color: '#7fc15e'}} className="share_icons_link_iconBox_icon" icon={faFilm} />
                                    <span>Video</span>
                                </div>
                            </Link>
                            <Link to="." className="share_icons_link">
                                <div className="share_icons_link_iconBox">
                                    <FontAwesomeIcon style={{color: '#e7a33e'}} className="share_icons_link_iconBox_icon" icon={faCalendarCheck} />
                                    <span>Event</span>
                                </div>
                            </Link>
                            <Link to="." className="share_icons_link">
                                <div className="share_icons_link_iconBox">
                                    <FontAwesomeIcon style={{color: '#fc9295'}} className="share_icons_link_iconBox_icon" icon={faNewspaper} />
                                    <span>Write article</span>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="topOrRecently">
                        <div className="topOrRecently_box">
                            <div className="topOrRecently_box_line"></div>
                            <span>Sort by:</span>
                        </div>
                        <button>Top <FontAwesomeIcon icon={faCaretDown} /></button>
                    </div>

                    <div className="post">
                        {loadingStatus === 'loading' ? <h4 style={{display: 'flex',
                                                                   justifyContent: 'center',
                                                                   width: '100%'}}>Loading</h4> : allUsers}
                        {loadingStatus === 'error' ? <h4>Loading</h4> : null}
                    </div>
                </Col>
                <Col lg={3}>
                    <div className="feed">
                        <div className="feed_header">
                            <h4>Add to your feed</h4>
                            <Link to=".">
                                <FontAwesomeIcon icon={faCircleInfo} />
                            </Link>
                        </div>
                        <div className="feed_users">
                            <Link to=".">
                                <div className="users_imgBox">
                                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="user-image"/>
                                </div>
                                <div className="users_infoBox">
                                    <h4>Name Surname</h4>
                                    <span>Description</span>
                                    <button>+ Follow</button>
                                </div>
                            </Link>
                            <Link to=".">
                                <div className="users_imgBox">
                                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="user-image"/>
                                </div>
                                <div className="users_infoBox">
                                    <h4>Name Surname</h4>
                                    <span>Description</span>
                                    <button>+ Follow</button>
                                </div>
                            </Link>
                            <Link to=".">
                                <div className="users_imgBox">
                                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="user-image"/>
                                </div>
                                <div className="users_infoBox">
                                    <h4>Name Surname</h4>
                                    <span>Description</span>
                                    <button>+ Follow</button>
                                </div>
                            </Link>
                        </div>
                        <Link to="." className="feed_FooterLink">
                            <div className="feed_FooterLink_footer">
                                <span>View all recommendations</span>
                                <FontAwesomeIcon className="feed_FooterLink_footer_rghtIcon" icon={faArrowRight} />
                            </div>
                        </Link>
                    </div>
                    <Footer styleOff={props.styleOff} />
                </Col>
            </Row>
        </Container>
    )
}
export default Home;