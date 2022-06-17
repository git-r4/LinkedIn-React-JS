import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { notificationsFetching, notificationsFetched, notificationsFetchingError } from '../../../actions';
import { useHttp } from "../../../hooks/http.hook";
import { useSelector, useDispatch } from "react-redux";
import {useEffect} from "react";

import './notifications.scss';
import Footer from "../FooterAdv/Footer";
import documImg from '../../../images/docum.png';
import {faEllipsis} from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet";

const Notifications = (props) => {
    const { notifications, loadingStatus } = useSelector(state => state);
    const dispatch = useDispatch();
    const { request } = useHttp();

    useEffect(() => {
        dispatch(notificationsFetching());
        request("http://localhost:3001/notifications")
            .then(data => dispatch(notificationsFetched(data)))
            .catch(() => dispatch(notificationsFetchingError()))

    }, [])

    const renderNotifications = (notice) => {
        return notice.map(item => {
            return(
                <Link to="." className="notificationContent_a">
                    <div className="notificationContent_a_box">
                        <div className="notificationContent_a_box_notice">
                            <div className="notificationContent_a_box_notice_img">
                                <img src={documImg} alt="notice-image"/>
                            </div>
                            <div className="notificationContent_a_box_notice_info">
                                <span>{item.descriptions}</span>
                            </div>
                        </div>
                        <div className="notificationContent_a_box_iconBox">
                            <span>{item.activity}</span>
                            <div className="notificationContent_a_box_iconBox_icon">
                                <FontAwesomeIcon icon={faEllipsis} />
                            </div>
                        </div>
                    </div>
                    <div className="notificationContent_a_line"></div>
                </Link>
            )
        })
    }
    const noticeContent = renderNotifications(notifications);

    return(
        <div className="notification">
            <Helmet>
                <title>Notifications | LinkedIn</title>
            </Helmet>
            <Container>
                <Row>
                    <Col lg={3}>
                        <div className="notificationBox" style={props.styleOff}>
                            <div className="notificationBox_header">
                                <h4>Notifications</h4>
                                <span>You have new notifications</span>
                            </div>
                            <div className="notificationBox_line"></div>
                            <div className="notificationBox_footer">
                                <span>Improve your notifications</span>
                                <button>View Settings</button>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        {loadingStatus === 'error' ? <h4>Error</h4> : null}
                        {
                            loadingStatus === 'loading' ?
                                <h4 style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    width: '100%'}}>Loading</h4> :
                                <div className="notificationContent">
                                    {noticeContent}
                                </div>
                        }

                    </Col>
                    <Col lg={3}><Footer styleOff={props.styleOff}/></Col>
                </Row>
            </Container>
        </div>
    )
}
export default Notifications;