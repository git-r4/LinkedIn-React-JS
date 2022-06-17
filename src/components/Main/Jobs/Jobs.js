import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faBell,
    faBookmark, faCircleCheck, faClapperboard,
    faClipboardCheck, faEyeSlash,
    faFileLines, faGear,
    faMoneyBill, faNoteSticky,
    faPenToSquare
} from "@fortawesome/free-solid-svg-icons";
import {Container, Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom";

import {jobsFetching, jobsFetched, jobsFetchingError,
        jobsMoreFetching, jobsMoreFetched, jobsMoreFetchingError} from '../../../actions';
import { useSelector, useDispatch } from "react-redux";
import {useHttp} from "../../../hooks/http.hook";
import {useEffect} from "react";

import { Helmet } from "react-helmet";
import Footer from "../FooterAdv/Footer";

import companyPng from '../../../images/company.png';
import './jobs.scss';

const Jobs = (props) => {
    const { recommendedJobs, moreJobs, loadingStatus } = useSelector(state => state);
    const dispatch = useDispatch();
    const { request } = useHttp();

    useEffect(() => {
        dispatch(jobsFetching());
        request("http://localhost:3001/recommendedJobs")
            .then(data => dispatch(jobsFetched(data)))
            .catch(() => dispatch(jobsFetchingError()))

        dispatch(jobsMoreFetching());
        request("http://localhost:3001/moreJobs")
            .then(data => dispatch(jobsMoreFetched(data)))
            .catch(() => dispatch(jobsMoreFetchingError()))

    }, [])

    const renderRecommendedJobs = (jobs) => {
        return jobs.map(item => {
            return(
                <Link to="." className="jobsBox_content_a">
                    <div className="jobsBox_content_a_box" key={item.id}>
                        <div className="jobsBox_content_a_box_column">
                            <div className="jobsBox_content_a_box_column_img">
                                <img src={companyPng} alt="company-image" />
                            </div>
                            <div className="jobsBox_content_a_box_column_info">
                                <h4>{item.name}</h4>
                                <Link to=".">
                                    <span>{item.descriptions}</span>
                                </Link>
                                <span>{item.location}</span>
                                <div className="jobsBox_content_a_box_column_info_iconBox">
                                    <FontAwesomeIcon className="jobsBox_content_a_box_column_info_iconBox_icon" icon={faCircleCheck}/>
                                    <span>Actively recruiting</span>
                                </div>
                                <span style={{fontSize: '12px'}}>{item.activity}</span>
                            </div>
                        </div>
                        <div className="jobsBox_content_a_icons">
                            <div className="jobsBox_content_a_icons_iconBox">
                                <FontAwesomeIcon className="jobsBox_content_a_icons_icon" icon={faEyeSlash} />
                            </div>
                            <div className="jobsBox_content_a_icons_iconBox">
                                <FontAwesomeIcon className="jobsBox_content_a_icons_icon" icon={faBookmark} />
                            </div>
                        </div>
                    </div>
                    <div className="jobsBox_content_a_line"></div>
                </Link>
            )
        })
    }
    const recomJobs = renderRecommendedJobs(recommendedJobs);
    //MORE jobe render
    const renderMoreJobs = (jobs) => {
        return jobs.map(item => {
            return(
                <Link to="." className="jobsBox_content_a">
                    <div className="jobsBox_content_a_box" key={item.id}>
                        <div className="jobsBox_content_a_box_column">
                            <div className="jobsBox_content_a_box_column_img">
                                <img src={companyPng} alt="company-image" />
                            </div>
                            <div className="jobsBox_content_a_box_column_info">
                                <h4>{item.name}</h4>
                                <Link to=".">
                                    <span>{item.descriptions}</span>
                                </Link>
                                <span>{item.location}</span>
                                <div className="jobsBox_content_a_box_column_info_iconBox">
                                    <FontAwesomeIcon className="jobsBox_content_a_box_column_info_iconBox_icon" icon={faCircleCheck}/>
                                    <span>Actively recruiting</span>
                                </div>
                                <span style={{fontSize: '12px'}}>{item.activity}</span>
                            </div>
                        </div>
                        <div className="jobsBox_content_a_icons">
                            <div className="jobsBox_content_a_icons_iconBox">
                                <FontAwesomeIcon className="jobsBox_content_a_icons_icon" icon={faEyeSlash} />
                            </div>
                            <div className="jobsBox_content_a_icons_iconBox">
                                <FontAwesomeIcon className="jobsBox_content_a_icons_icon" icon={faBookmark} />
                            </div>
                        </div>
                    </div>
                    <div className="jobsBox_content_a_line"></div>
                </Link>
            )
        })
    }
    const moreJ = renderMoreJobs(moreJobs);


    return(
        <div className="jobs" >
            <Helmet>
                <title>Jobs | LinkedIn</title>
            </Helmet>
            <Container>
                <Row>
                    <Col lg={3}>
                        <div className="positionJobs" style={props.styleOff}>
                            <div className="jobs_nav">
                                <div className="jobs_nav_category">
                                    <Link to='.'>
                                        <div className="every_component">
                                            <FontAwesomeIcon className="every_component_icon" icon={faBookmark} />
                                            <span>My jobs</span>
                                        </div>
                                    </Link>
                                    <Link to='.'>
                                        <div className="every_component">
                                            <FontAwesomeIcon className="every_component_icon" icon={faBell} />
                                            <span>Job alerts</span>
                                        </div>
                                    </Link>
                                    <Link to='.'>
                                        <div className="every_component">
                                            <FontAwesomeIcon className="every_component_icon" icon={faMoneyBill} />
                                            <span>Salary</span>
                                        </div>
                                    </Link>
                                    <Link to='.'>
                                        <div className="every_component">
                                            <FontAwesomeIcon className="every_component_icon" icon={faClipboardCheck} />
                                            <span>Skill Assessments</span>
                                        </div>
                                    </Link>
                                    <Link to='.'>
                                        <div className="every_component">
                                            <FontAwesomeIcon className="every_component_icon" icon={faFileLines} />
                                            <span>Interview prep</span>
                                        </div>
                                    </Link>
                                    <Link to='.'>
                                        <div className="every_component">
                                            <FontAwesomeIcon className="every_component_icon" icon={faNoteSticky} />
                                            <span>Resume Builder</span>
                                        </div>
                                    </Link>
                                    <Link to='.'>
                                        <div className="every_component">
                                            <FontAwesomeIcon className="every_component_icon" icon={faClapperboard} />
                                            <span>Job seeker guidance</span>
                                        </div>
                                    </Link>
                                    <Link to='.'>
                                        <div className="every_component">
                                            <FontAwesomeIcon className="every_component_icon" icon={faGear} />
                                            <span>Application settings</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="jobs_nav_postJob">
                                <button>
                                    <FontAwesomeIcon icon={faPenToSquare} />
                                    Post a free job
                                </button>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        {loadingStatus === 'error' ? <h4>Error</h4> : null}
                        {loadingStatus === 'loading' ?
                            <h4 style={{
                                display: 'flex',
                                justifyContent: 'center',
                                width: '100%'}}>Loading</h4> :
                            <div className="jobsBox">
                                <div className="jobsBox_content">
                                    <div className="jobsBox_content_header">
                                        <h4>Recommended for you</h4>
                                        <span>Based on your profile and search history</span>
                                    </div>
                                    {recomJobs}
                                    <div className="jobsBox_content_footer">
                                        <button>Show all</button>
                                    </div>
                                </div>
                                {/*MORE_JOBS*/}
                                <div className="jobsBox_content">
                                    <div className="jobsBox_content_header">
                                        <h4>More jobs for you</h4>
                                        <span>Based on your profile and search history</span>
                                    </div>
                                    {moreJ}
                                    <div className="jobsBox_content_footer">
                                        <button>Search for more jobs</button>
                                    </div>
                                </div>
                            </div>
                        }
                    </Col>
                    <Col lg={3}>
                        <Footer styleOff={props.styleOff}/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Jobs;