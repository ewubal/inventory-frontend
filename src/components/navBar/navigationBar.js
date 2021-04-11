import React, {Component} from "react";
import './navBar.css';
import Navbar from 'react-bootstrap/Navbar';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { BiSearchAlt } from 'react-icons/bi';
import AuthService from '../services/auth.service';

class NavigationBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            search: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name] : event.target.value});
    }

    logout() {
        AuthService.logout();
    }

    render() {
        return (
            <Navbar variant="primary">
                <Navbar.Brand href="/">Inventory</Navbar.Brand>
                <Form className="search">
                    {localStorage.getItem("user") && <input name="search" className="search" placeholder="Search.." onChange={this.handleChange}/>}
                    {localStorage.getItem("user") && <Button type="submit" href={`/search/${this.state.search}`}><BiSearchAlt className="searchBtn"/></Button>}
                </Form>
                <div className="buttons">
                    {!localStorage.getItem("user") && <Button className="button" href="/login">Log In</Button>}
                    {!localStorage.getItem("user") && <Button className="button" href="/register">Register</Button>}
                    {localStorage.getItem("user") && <Button className="button" href="/inventory">My Inventory</Button>}
                    {localStorage.getItem("user") && <Button className="button" href="/" onClick={() => this.logout()}>Log Out</Button>}
                </div>
            </Navbar>
        )
    }
}

export default NavigationBar
