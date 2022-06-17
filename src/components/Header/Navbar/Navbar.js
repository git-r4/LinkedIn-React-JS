import {BrowserRouter, Routes, Route, NavLink, Link} from "react-router-dom";
import {useEffect, useRef, useState} from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse,
         faUserGroup,
         faBriefcase,
         faMessage,
         faBell,
         faCaretDown,
         faBars,

         faXmark,
         faClapperboard,
         faChartSimple,
         faRectangleAd,
         faCompass,
         faPeopleGroup,
         faCheckToSlot,
         faMoneyBill1 } from '@fortawesome/free-solid-svg-icons';

//scss style
import './navbar.scss';
import './transition.css';
import '../../../bootstrap_style/bootstrap-grid.min.css';
import { CSSTransition } from "react-transition-group";

//components
import Home from "../../Main/Home/Home";
import MyNetwork from "../../Main/MyNetwork/MyNetwork";
import Jobs from "../../Main/Jobs/Jobs";
import Messaging from "../../Main/Messaging/Messaging";
import Notifications from "../../Main/Nofitications/Notifications";
import Search from '../Search/Search';

const Navbar = () => {
    //Navbar Menu Data
    const navbarMenu = [
        { id: 1, path: '/', name: 'Home', Component: Home, icon: faHouse},
        { id: 2, path: '/my-network', name: 'MyNetwork', Component: MyNetwork, icon: faUserGroup },
        { id: 3, path: '/jobs', name: 'Jobs', Component: Jobs, icon: faBriefcase },
        { id: 4, path: '/messaging', name: 'Messaging', Component: Messaging, icon: faMessage },
        { id: 5, path: '/notification', name: 'Notifications', Component: Notifications, icon: faBell }
    ];

    const [dropdown, setDropdown] = useState(false);
    const [sidebar, setSidebar] = useState(false);
    const [searchResult, setSearchResult] = useState(false);

    let styleOff = {zIndex: '1'};

    if(sidebar || dropdown || searchResult){
        styleOff = {zIndex: '-1'};
    }
    if(sidebar || searchResult){
        document.body.style.overflow = 'hidden';
    }else{
        document.body.style.overflow = '';
    }

    //forSearch Props
    const onClickFalse = () => {
        setSearchResult(false);
    }
    const onClickTrue = () => {
        setSearchResult(true);
    }

    //Render Navbar Menu
    const renderNavbarMenu = navbarMenu.map(({id, path, name, icon}) => {
        return <NavLink
            key={id}
            to={path}
            as={NavLink}
            className="navLink">
            <div className="navLinkText">
                <FontAwesomeIcon className="navLinkIcon" icon={icon} />
                {name}
            </div>
        </NavLink>
    });

    //Render Navbar Elements
    const renderNavbarElement = navbarMenu.map(({path, Component}) => {
        return <Route key={path} path={path} element={<Component styleOff={styleOff}/>}/>
    });

    const useCLickOutside = (handler, handlerSidebar) => {
        let domNode = useRef();

        useEffect(() => {

            let clickOutside = (event) => {
                if(!domNode.current.contains(event.target)){
                    handler();
                    handlerSidebar();
                }
            }

            document.addEventListener("mousedown", clickOutside);

            return () => document.removeEventListener("mousedown", clickOutside);
        }, [])

        return domNode;
    }

    const domNode = useCLickOutside(() => {
        setDropdown(false);
        setSidebar(false);
    });
    //Right to Left SideBar (NAV)
    const navIcons = [
        { path: '.', name: 'Learning', icon: faClapperboard },
        { path: '.', name: 'Insights', icon: faChartSimple },
        { path: '.', name: 'Post a job', icon: faBriefcase },
        { path: '.', name: 'Advertise', icon: faRectangleAd },
        { path: '.', name: 'Find Leads', icon: faCompass },
        { path: '.', name: 'Groups', icon: faPeopleGroup },
        { path: '.', name: 'Services Marketplace', icon: faCheckToSlot },
        { path: '.', name: 'Salary', icon: faMoneyBill1 }
    ];

    //Render Items R to L Nav
    const renderNavIcons = navIcons.map(({path, name, icon}) => {
       return <div className="everyProduct">
           <Link to={path}
                 key={path}>
               <div className="navIconsBox">
                   <div className="iconBox">
                       <FontAwesomeIcon icon={icon} className="icn" />
                   </div>
                   <span>{name}</span>
               </div>
           </Link>
       </div>
    });

    return(
        <BrowserRouter>
            <div className="navbarBox">
                <Container>
                    <Row>
                        <Col>
                            <div className="navbarContainer">
                                <div className="navbarBrand">
                                    <Link to="/">
                                        <div className="linkdinLogo">
                                            <h1>in</h1>
                                        </div>
                                    </Link>
                                    <Search onClickFalse={onClickFalse}
                                            onClickTrue={onClickTrue}
                                            searchResult={searchResult}/>
                                </div>
                                <div className="navbarMenu">
                                    {renderNavbarMenu}
                                    <div className="navbarMenuSecond" ref={domNode}>
                                        <div className="refForDDNav" >
                                            <button onClick={() => setDropdown((dropdown) => !dropdown)}>
                                                <div className="twoGridBox">
                                                    <div className="imgBox">
                                                        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="Profile-Img" />
                                                    </div>
                                                    <div className="textBox">
                                                        <span>Me</span>
                                                        <FontAwesomeIcon className="downIcon" icon={faCaretDown} />
                                                    </div>
                                                </div>
                                            </button>
                                            <CSSTransition
                                                in={dropdown}
                                                timeout={300}
                                                classNames="dropdown-menu"
                                                mountOnEnter
                                                unmountOnExit>
                                                <div className="meDropdown">
                                                    <div className="meDropdown_account">
                                                        <div className="meDropdown_account_infoBox">
                                                            <div className="meDropdown_account_infoBox_img">
                                                                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="Profile-Img" />
                                                            </div>
                                                            <div className="meDropdown_account_infoBox_nameDescr">
                                                                <h4>Name Surname</h4>
                                                                <span>Description</span>
                                                            </div>
                                                        </div>
                                                        <div className="meDropdown_account_infoBox_btn">
                                                            <Link to=".">
                                                                <span>View Profile</span>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="meDropdown_line"></div>
                                                    <div className="meDropdown_account_setting">
                                                        <h4>Account</h4>
                                                        <Link to="."><span>Settings & Privacy</span></Link><br/>
                                                        <Link to="."><span>Help</span></Link><br/>
                                                        <Link to="."><span>Language</span></Link>
                                                    </div>
                                                    <div className="meDropdown_line"></div>
                                                    <div className="meDropdown_manage">
                                                        <h4>Manage</h4>
                                                        <Link to="."><span>Posts & Activity</span></Link><br/>
                                                        <Link to="."><span>Job Posting Account</span></Link>
                                                    </div>
                                                    <div className="meDropdown_line"></div>
                                                    <div className="meDropdown_signOut">
                                                        <Link to=".">
                                                            <span>Sign Out</span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </CSSTransition>
                                        </div>

                                        <div className="verticalLine"></div>
                                        {/*this place be ref*/}
                                        <div className="refForDDNav">
                                            <button onClick={() => setSidebar(sidebar => !sidebar)}>
                                                <div className="twoGridBox">
                                                    <div className="iconBox">
                                                        <FontAwesomeIcon className="navIcon" icon={faBars} />
                                                    </div>
                                                    <div className="textBox">
                                                        <span>Work</span>
                                                        <FontAwesomeIcon className="downIcon" icon={faCaretDown} />
                                                    </div>
                                                </div>
                                            </button>
                                            <div className={sidebar ? 'overflow' : 'overflow_hide'}
                                                 onClick={(e) => {
                                                     if(e.target.classList.contains('overflow')){
                                                         setSidebar(sidebar => false);
                                                     }
                                                 }}></div>
                                            <div className={sidebar ? 'workMenu activeNav' : 'workMenu'}>
                                                <div className="menuInner">
                                                    <div className="menuInner_closeBtn"><button onClick={() => setSidebar(sidebar => !sidebar)}><FontAwesomeIcon className="closeIcon" icon={faXmark} /></button></div>
                                                    <div className="menuInner_box">
                                                        <div className="menuInner_box_headerTxt"><h4>Visit More LinkedIn Products</h4></div>
                                                        <div className="menuInner_box_iconBox">
                                                            {renderNavIcons}
                                                        </div>
                                                    </div>
                                                    <div className="menuInner_box">
                                                        <div className="menuInner_box_headerTxt"><h4>LinkedIn Business Services</h4></div>
                                                        <div className="menuInner_box_services">
                                                            <Link to=".">
                                                                <div>
                                                                    <h5>Talent Solutions</h5>
                                                                    <span>Find, attract and recruit talent</span>
                                                                </div>
                                                            </Link>
                                                            <Link to=".">
                                                                <div>
                                                                    <h5>Sales Solutions</h5>
                                                                    <span>Unlock sales opportunities</span>
                                                                </div>
                                                            </Link>
                                                            <Link to=".">
                                                                <div>
                                                                    <h5>Post a job for free</h5>
                                                                    <span>Get your job in front of quality candidates</span>
                                                                </div>
                                                            </Link>
                                                            <Link to=".">
                                                                <div>
                                                                    <h5>Marketing Solutions</h5>
                                                                    <span>Acquire customers and grow your business</span>
                                                                </div>
                                                            </Link>
                                                            <Link to=".">
                                                                <div>
                                                                    <h5>Learning Solutions</h5>
                                                                    <span>Develop talent across your organization</span>
                                                                </div>
                                                            </Link>
                                                        </div>
                                                        <Link to=".">
                                                            <div className="menuInner_box_createPage">
                                                                <h4>Create a Company Page +</h4>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Routes>
                {renderNavbarElement}
            </Routes>
        </BrowserRouter>
    )
}

export default Navbar;