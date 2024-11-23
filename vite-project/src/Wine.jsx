import { Component } from "react";

export default class Wine extends Component {
    clickHandler = (event) => {
        console.log(event.target);
    }
    render() {
        return (
            <div>
                <h3>{this.props.title}</h3>
                <p>{this.props.description}</p>
                <p>{this.props.rating}</p>
                <button onClick={this.clickHandler}>Button click!</button>
            </div>
        )
    }
}