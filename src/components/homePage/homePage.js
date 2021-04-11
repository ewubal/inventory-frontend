import React from "react";
import DirectoryBox from "../directoryBox/directoryBox";
import AuthService from '../services/auth.service';
import './homePage.css'

export default class HomePage extends React.Component {

    render() {
        let level = this.props.match.params.level;
        level = level === undefined? 1 : level;
        let item = this.props.match.params.item;
        const user = AuthService.getCurrentUser();
        return (
            <div>
                {user && <DirectoryBox level={level} item={item}/>}
                {!user && <p className="errorMsg">Log in to use the application</p>}
            </div>
        )
    }
}
