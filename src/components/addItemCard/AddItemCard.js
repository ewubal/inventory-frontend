import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import './addItemCard.css';
import ItemService from "../services/ItemService";

export default class AddItemCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            serialNumber: '',
            picture: '',
            information: '',
            age: '',
            price: '',
            levelId: '',
            userId: localStorage.getItem("userId")
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name] : event.target.value});
    }

    async handleSubmit(event) {
        await this.setState({
            levelId : this.props.level
        })
        ItemService.saveObject(this.state);
    }

    render() {
        return (
            <>
                <Form onSubmit={this.handleSubmit}>
                    <Card className="addItemCard">
                        <p className="itemTitle">Add item</p>
                        <Form.Group>
                            <p>Item name:</p>
                            <Form.Control required className="itemInput" name="name" onChange={this.handleChange} type="text" placeholder="Ex. HDMI cable"/>
                        </Form.Group>
                        <Form.Group>
                            <p>Serial number:</p>
                            <Form.Control className="itemInput" name="serialNumber" onChange={this.handleChange} type="text" placeholder="Ex. asdufe232145sah13"/>
                        </Form.Group>
                        <Form.Group>
                            <p>Picture url:</p>
                            <Form.Control required className="itemInput" name="picture" onChange={this.handleChange} type="text"/>
                        </Form.Group>
                        <Form.Group>
                            <p>Information:</p>
                            <Form.Control required className="itemInput" name="information" onChange={this.handleChange} type="text" placeholder="Ex. Little bit broken"/>
                        </Form.Group>
                        <Form.Group>
                            <p>Age(In years):</p>
                            <Form.Control required className="itemInput" name="age" onChange={this.handleChange} type="text" placeholder="Ex. 4"/>
                        </Form.Group>
                        <Form.Group>
                            <p>Price:</p>
                            <Form.Control className="itemInput" name="price" onChange={this.handleChange} type="text" placeholder="Ex. 50"/>
                        </Form.Group>
                        <Button className="submitDirectoryBtn" type="submit">Add</Button>
                    </Card>
                </Form>
            </>
        )
    }
}
