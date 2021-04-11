import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import './addDirectoryCard.css';
import LevelService from "../services/LevelService";

export default class AddDirectoryCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name] : event.target.value});
    }

    handleSubmit(event) {
        const directory = {
            name: this.state.name,
            levelId: parseInt(this.props.level),
            userId: localStorage.getItem("userId")
        }
        LevelService.postLevel(directory);
    }

    render() {
        return (
            <>
                <Form onSubmit={this.handleSubmit}>
                    <Card className="addDirectoryCard">
                        <p className="directoryTitle">Add directory</p>
                        <p className="directoryText">Directory name</p>
                        <Form.Group>
                            <Form.Control required name="name" onChange={this.handleChange} type="text" placeholder="Ex. ROOM 1"/>
                        </Form.Group>
                        <Button className="submitDirectoryBtn" type="submit">Add</Button>
                    </Card>
                </Form>
            </>
        )
    }
}
