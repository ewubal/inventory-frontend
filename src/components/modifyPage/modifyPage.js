import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import './modifyPage.css';
import ItemService from "../services/ItemService";


export default class modifyPage extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            serialNumber: this.props.serialNumber,
            picture: this.props.picture,
            information: this.props.information,
            age: this.props.age,
            price: this.props.price,
            addedOn: this.props.addedOn,
            levelId: this.props.level,
            userId: localStorage.getItem("userId")
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name] : event.target.value});
    }

    async handleSubmit(event) {
        ItemService.updateItem(this.props.id, this.state);
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Card className="modify">
                    <p className="itemTitle">Modify item</p>
                    <Form.Group>
                        <p>New item name:</p>
                        <Form.Control className="itemInput" name="name" onChange={this.handleChange} type="text" placeholder="Ex. HDMI cable"/>
                    </Form.Group>
                    <Form.Group>
                        <p>New serial number:</p>
                        <Form.Control className="itemInput" name="serialNumber" onChange={this.handleChange} type="text" placeholder="Ex. asdufe232145sah13"/>
                    </Form.Group>
                    <Form.Group>
                        <p>New picture url:</p>
                        <Form.Control className="itemInput" name="picture" onChange={this.handleChange} type="text"/>
                    </Form.Group>
                    <Form.Group>
                        <p>New Information:</p>
                        <Form.Control className="itemInput" name="information" onChange={this.handleChange} type="text" placeholder="Ex. Little bit broken"/>
                    </Form.Group>
                    <Form.Group>
                        <p>New age(In years):</p>
                        <Form.Control className="itemInput" name="age" onChange={this.handleChange} type="text" placeholder="Ex. 4"/>
                    </Form.Group>
                    <Form.Group>
                        <p>New price:</p>
                        <Form.Control className="itemInput" name="price" onChange={this.handleChange} type="text" placeholder="Ex. 50"/>
                    </Form.Group>
                    <div className="modifyBtns">
                        <Button className="modifyPageBtn" type="submit">Modify</Button>
                        <Button className="modifyPageBtn" onClick={() => window.location.reload()}>Back</Button>
                    </div>
                </Card>
            </Form>
        )
    }
}
