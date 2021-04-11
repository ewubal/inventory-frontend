import React from "react";
import {Form, Button} from "react-bootstrap";
import './register.css';
import AuthService from '../services/auth.service';

export default class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            surname: '',
            email: '',
            password: '',
            passwordAgain: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name] : event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.state.password === this.state.passwordAgain
            && this.state.password !== ''
            && this.state.name !== ''
            && this.state.surname !== ''
            && this.state.email !== '') {
            AuthService.register(
                this.state.name,
                this.state.surname,
                this.state.email,
                this.state.password
            ).then(
                () => {
                    this.props.history.push("/login");
                    window.location.reload();
                });
        }
    }

    render() {
        return (
            <div className="regLogForm">
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group className="registerForm">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            required
                            name="name"
                            className="registerControl"
                            onChange={this.handleChange}
                            type="text"/>
                    </Form.Group>
                    <Form.Group className="registerForm">
                        <Form.Label>Surname</Form.Label>
                        <Form.Control
                            required
                            name="surname"
                            className="registerControl"
                            onChange={this.handleChange}
                            type="text"/>
                    </Form.Group>
                    <Form.Group className="registerForm">
                        <Form.Label>E-mail</Form.Label>
                        <Form.Control
                            required
                            name="email"
                            className="registerControl"
                            onChange={this.handleChange}
                            type="text"/>
                    </Form.Group>
                    <Form.Group className="registerForm">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            required
                            name="password"
                            className="registerControl"
                            onChange={this.handleChange}
                            type="password"/>
                    </Form.Group>
                    <Form.Group className="registerForm">
                        <Form.Label>Password again</Form.Label>
                        <Form.Control
                            required
                            name="passwordAgain"
                            className="registerControl"
                            onChange={this.handleChange}
                            type="password"/>
                    </Form.Group>
                    <Button type="submit" className="registerLogBtn">Register</Button>
                </Form>
            </div>
        )
    }
}
