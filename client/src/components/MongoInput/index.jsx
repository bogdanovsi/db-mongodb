import React, { Component } from 'react';

export default class MongoInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            output: ''
        }
    }

    handleChange(ev) {
        this.setState({ value: ev.target.value })
    }

    handleClick() {
        fetch(`${this.props.route}/${this.state.value}`,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            }
        )
        .then(res => res.json())
        .then(res => {
            console.log(res);
            this.setState({
                output: JSON.stringify(res),
                value: '',
            });
        });
    }
   
    render() {
      return (
         <div>
            <p>{this.props.route}</p>
            <input value={this.state.value} onChange={this.handleChange.bind(this)} type="text"/>
            <button onClick={this.handleClick.bind(this)}>Test it</button>
            <p>{this.state.output}</p>
         </div>
      );
   }
}