import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import './itemCard.css';
import ItemService from "../services/ItemService";
import ModifyPage from "../modifyPage/modifyPage";

export default class ItemCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modify: false
        }
    }

    deleteItem() {
        ItemService.deleteItem(this.props.id).then(() => {
            window.location.reload();
        });
    }

    render() {
        return (
            <div>
                {!this.state.modify && <Card className="itemCard">
                    <Card.Img className="img" variant="left" src={this.props.picture}/>
                    <Card.Body className="body">
                        <div className="title">Name: <span>{this.props.name}</span></div>
                        <div className="heading">Information: <span className="text">{this.props.information}</span></div>
                        <div className="heading">Age: <span className="text">{this.props.age}</span></div>
                        <div className="heading">Price: <span className="text">{this.props.price}</span></div>
                        <div className="heading">Serial number: <span className="text">{this.props.serialNumber}</span></div>
                        <div className="heading">Adding date: <span className="text">{this.props.addedOn.substring(0, 10)}</span></div>
                    </Card.Body>
                    <Button className="deleteBtn" onClick={() => this.deleteItem()}>Delete</Button>
                    <Button className="modifyBtn" onClick={() => this.setState({modify:true})}>Modify</Button>
                </Card>}
                {this.state.modify && <ModifyPage key={this.props.id} id={this.props.id}
                name={this.props.name} picture={this.props.picture} information={this.props.information}
                age={this.props.age} serialNumber={this.props.serialNumber} addedOn={this.props.addedOn}
                level={this.props.level} price={this.props.price}/>}
            </div>
        )
    }
}
