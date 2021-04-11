import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Button from "react-bootstrap/Button";
import './directoryBox.css';
import LevelService from "../services/LevelService";
import ItemService from "../services/ItemService";
import ItemCard from "../itemCard/itemCard";
import AddDirectoryCard from "../addDirectoryCard/AddDirectoryCard";
import AddItemCard from "../addItemCard/AddItemCard";


export default class directoryBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            levels: [],
            objects: [],
            level: '',
            item: '',
            addDirectory: false,
            addItem: false
        }
    }

    componentDidMount() {
        this.getLevels();
        this.getItems();
        this.getCorrectItem();
    }

    getLevels() {
        if (localStorage.getItem("user")) {
            const userId = localStorage.getItem("userId");
            const levelId = this.props.level;
            this.setState({
                level: levelId
            });
            LevelService.getLevels(levelId, userId).then(res => {
                this.setState({
                    levels: res.data
                });
            })
        }
    }

    getItems() {
        if (localStorage.getItem("user")) {
            const userId = localStorage.getItem("userId");
            const level = this.props.level;
            ItemService.getItems(level, userId).then(res => {
                this.setState({
                    objects: res.data
                });
            })
        }
    }

    getCorrectItem() {
        let itemId = this.props.item;
        this.setState({
            item: itemId
        })
    }

    render() {
        return (
            <div className="directoryBoxAndCard">
                <div className="directoryBoxAndAddBoxes">
                    <Navbar className="directoryBox">
                        <div className="directoryButtons">
                            {this.state.levels.map(level =>
                            <Button href={`/inventory/${level.id}`} className="directoryButton" key={level.id}>{level.name}</Button>)}
                            {this.state.objects.map(object =>
                            <Button href={`/inventory/${this.state.level}/${object.id}`} className="directoryButton" key={object.id} style={{background: "#fcfc83"}}>{object.name}</Button>)}
                        </div>
                        <div className="addButtons">
                            <Button className="addButton" onClick={() => this.setState({addDirectory : true})}>Add directory</Button>
                            <Button className="addButton" onClick={() => this.setState({addItem : true})}>Add item</Button>
                        </div>
                    </Navbar>
                    { this.state.addDirectory && <AddDirectoryCard level={this.state.level}/>}
                    { this.state.addItem && <AddItemCard level={this.state.level}/>}
                </div>
                { this.state.item !== undefined && this.state.objects.map(object => {

                    if (object.id === parseInt(this.state.item)) {
                            return <ItemCard key={object.id} name={object.name}
                                             serialNumber={object.serialNumber}
                                             picture={object.picture} information={object.information}
                                             age={object.age} addedOn={object.addedOn} id={object.id}
                                             level={this.state.level} price={object.price}/>}
                    else {
                        return null;
                    }})}
            </div>
        )
    }
}

