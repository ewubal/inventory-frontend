import React from "react";
import {Button, Form} from "react-bootstrap";
import AuthService from '../services/auth.service';


export default class LogIn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name] : event.target.value});
    }

    async handleSubmit(event) {
        event.preventDefault();
        AuthService.login(this.state.email, this.state.password).then(
            () => {
                this.props.history.push("/inventory");
                window.location.reload();
            });
    }

    render() {
        return (
            <div>
                <Form className="regLogForm" onSubmit={this.handleSubmit}>
                    <Form.Group className="registerForm">
                        <Form.Label>E-mail</Form.Label>
                        <Form.Control required name="email" className="registerControl" onChange={this.handleChange} type="text"/>
                    </Form.Group>
                    <Form.Group className="registerForm">
                        <Form.Label>Password</Form.Label>
                        <Form.Control required name="password" className="registerControl" onChange={this.handleChange} type="password"/>
                    </Form.Group>
                    <Button type="submit" className="registerLogBtn">Log in</Button>
                </Form>
            </div>
        )
    }
}
