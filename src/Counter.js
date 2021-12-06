import React from "react";

class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 7
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment() {
        this.setState({
            count: this.state.count + 1
        })
    }

    decrement() {
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.decrement}> - </button>
                <div>{this.state.count}</div>
                <button onClick={this.increment}> + </button>
            </div>
        )
    }
}

export default Counter;