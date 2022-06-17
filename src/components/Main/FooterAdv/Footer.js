import image from "../../../images/adv.png";
import {Link} from "react-router-dom";

import './footer.scss';

const Footer = (props) => {
    return(
        <div className="positionFooter" style={props.styleOff}>
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
    )
}
export default Footer;