import React from "react";
import './frontPage.css';

export default class FrontPage extends React.Component {

    render() {
        return (
            <div className="welcome">
                <p className="headingW">Welcome to Inventory</p>
                <p className="textW">Keep track of all your items and where they are</p>
            </div>
        )
    }
}
