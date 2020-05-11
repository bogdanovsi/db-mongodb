import React, { Component } from 'react';

export default class MongoInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            output: ''
        }

        this.refInput = React.createRef();
    }

    handleClick(ev) {
        ev.preventDefault();
        fetch(`${this.props.route}/${this.refInput.current.value}`,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            }
        )
            .then(res => res.json())
            .then(res => {
                this.setState({
                    output: JSON.stringify(res)
                });
            });
    }

    render() {
        return (
            <form>
                <p>{this.props.route}</p>
                <input ref={this.refInput} type="text" />
                <button type="submit" onClick={this.handleClick.bind(this)}>Test it</button>
                <p>{this.state.output}</p>
            </form>
        );
    }
}