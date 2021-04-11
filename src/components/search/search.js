import React from "react";
import { Button} from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import ItemCard from "../itemCard/itemCard";
import ItemService from "../services/ItemService";

export default class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            objects: [],
            item: '',
            search: ''
        }
    }

    componentDidMount() {
        this.searchItems();
        this.getCorrectItem();
    }

    searchItems() {
        const userId = JSON.parse(localStorage.getItem("user")).id;
        const search = this.props.match.params.search;
        this.setState({
            search: search
        })
        if (typeof search === "string") {
            ItemService.getSearchItems(userId, search).then(res => {
                this.setState({
                    objects: res.data
                })
            })
        }
    }

    getCorrectItem() {
        let itemId = this.props.match.params.id;
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
                            {this.state.objects.map(object =>
                                <Button href={`/search/${this.state.search}/${object.id}`} className="directoryButton" key={object.id} style={{background: "#fcfc83"}}>{object.name}</Button>)}
                        </div>
                    </Navbar>
                </div>
                { this.state.item !== undefined && this.state.objects.map(object => {

                    if (object.id === parseInt(this.state.item)) {
                        return <ItemCard key={object.id} name={object.name}
                                         serialNumber={object.serialNumber}
                                         picture={object.picture} information={object.information}
                                         age={object.age} addedOn={object.addedOn} price={object.price}/>}
                    else {
                        return null;
                    }})}
            </div>
        )
    }
}
