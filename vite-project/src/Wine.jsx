import { Component } from "react";

export default class Wine extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.title}</h3>
                <p>{this.props.description}</p>
                <p>{this.props.rating}</p>
            </div>
        )
    }
}