import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { searchFetched, searchFetchingError } from '../../../actions';
import { useHttp } from '../../../hooks/http.hook'

import './search.scss';
import {CSSTransition} from "react-transition-group";

const Search = (props) => {

    const [searchWord, setWordEntered] = useState("");

    const searchOff = useRef(null);
    const { search, loadingStatus } = useSelector(state => state);
    const dispatch = useDispatch();
    const {request} = useHttp();

    useEffect(() => {

        request("http://localhost:3001/search")
            .then(data => dispatch(searchFetched(data)))
            .catch(() => dispatch(searchFetchingError()))

        //Click OUTSide
        let onClickOff = (event) => {
            if(!searchOff.current.contains(event.target)){
                props.onClickFalse();
            }
        }
        document.addEventListener("mousedown", onClickOff);

        return () => document.removeEventListener("mousedown", onClickOff);

    }, [])

    if(loadingStatus === 'error'){
        return <h5>Error</h5>
    }

    return (
        <div className="refForSearch" ref={searchOff}>
            <div className="seacrh" onClick={props.onClickTrue}>
                <FontAwesomeIcon className="magnifyIcon" icon={faMagnifyingGlass} />
                <div className="searchBox">
                    <input
                        className="searchInput"
                        placeholder="Search"
                        onChange={(e) => setWordEntered(e.target.value)}/>
                </div>
            </div>
            <div className={props.searchResult ? 'overflow' : 'overflowHide'}
                 onClick={(e) => {
                if(e.target.classList.contains('overflow')) props.onClickFalse()}}></div>
            <CSSTransition
                in={props.searchResult}
                timeout={100}
                classNames="search-transition"
                mountOnEnter
                unmountOnExit
                >
                <div className={"resultBox"}>
                    <div className="resultBox_items">
                        {
                            search.filter(value => {
                                return value.name.toLowerCase().includes(searchWord)
                            }).map((item, i) => {
                                return(
                                    <div className="humanBox" key={i}>
                                        <div className="humanBox_info">
                                            <FontAwesomeIcon className="magnify" icon={faMagnifyingGlass} />
                                            <h4>{item.name}</h4>
                                        </div>
                                        <div className="humanBox_img">
                                            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="Profile-Img" />
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </CSSTransition>

        </div>

    )
}
export default Search;