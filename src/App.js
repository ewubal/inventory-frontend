import './App.css';
import React, {Component} from "react";
import {BrowserRouter, Route} from "react-router-dom";
import NavigationBar from './components/navBar/navigationBar';
import homePage from "./components/homePage/homePage.js";
import frontPage from "./components/frontPage/frontPage.js"
import register from "./components/register/register";
import logIn from "./components/logIn/logIn";
import search from "./components/search/search";


class App extends Component {
    render() {
        return (
            <div>
                <NavigationBar/>
                <BrowserRouter>
                    <Route exact path={"/"} component={frontPage}/>
                    <Route exact path={"/inventory"} component={homePage}/>
                    <Route exact path={"/register"} component={register}/>
                    <Route exact path={"/login"} component={logIn}/>
                    <Route exact path={"/search/:search"} component={search}/>
                    <Route exact path={"/search/:search/:id"} component={search}/>
                    <Route exact path={"/inventory/:level"} component={homePage}/>
                    <Route exact path={"/inventory/:level/:item"} component={homePage}/>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
