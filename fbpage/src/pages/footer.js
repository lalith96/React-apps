import React, { Component } from 'react';
import './footer.css';

export default class footer extends Component {
    render() {
        return (
            <div className="container1">
                <div className="Up">
                    <p>English (UK)<span id="links">&nbsp;&nbsp;&nbsp;&nbsp;हिंदी&nbsp;&nbsp;&nbsp;&nbsp;اردو &nbsp;&nbsp;&nbsp;&nbsp;தமிழ் &nbsp;&nbsp;&nbsp;&nbsp;বাংলা&nbsp;&nbsp;&nbsp;&nbsp;मराठी&nbsp;&nbsp;&nbsp;&nbsp;
తెలుగు &nbsp;&nbsp;&nbsp;&nbsp;ગુજરાતી&nbsp;&nbsp;&nbsp;&nbsp;ಕನ್ನಡ&nbsp;&nbsp;&nbsp;&nbsp;മലയാളം&nbsp;&nbsp;&nbsp;&nbsp;Espanol&nbsp;&nbsp;&nbsp;</span><input type="submit" value="+" /></p>
                </div>
                <div className="Down">
                    <p><span id="links">Sign Up &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Log In &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Messenger &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Facebook Lite &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mobile &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Find Friends &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;People &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pages &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Video &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;interests &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Places &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Games &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Locations &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Marketplace </span></p>
                    <p><span id="links">Groups &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Instagram &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Local &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;About &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Create ad &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Create Page &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Developers &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Careers &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Privacy &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cookies &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AdChoices &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Terms &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Help</span></p>
                    <p id="copyright">Facebook &copy; 2018</p>
                </div>
            </div>
        )
    }
}