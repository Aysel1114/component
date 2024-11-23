import { Component } from "react";
import './App.css'

export default class Wine extends Component {
    // clickHandler = (event) => {
    //     console.log(event.target);
    // }
    state = {
        click: false,
        message: "Clicked here",
    };
    clicked = () => {
        this.setState({ message: "Clicked", click: true });
    }
    render() {
        const {message, click} = this.state;
        let className = "message-button";

        if(!click) {
            className += " message-button_white";
        }
        else {
            className += " message-button_blue";
        }
        return (
            <div>
                <h3>{this.props.title}</h3>
                <p>{this.props.description}</p>
                <p>{this.props.rating}</p>
                {/* <button onClick={this.clickHandler}>{message}</button> */}
                <button className = {className} type = "button" onClick={this.clicked}>{message}</button>
            </div>
        )
    }
}