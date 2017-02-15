import React, {Component} from 'react'

export default class CountWidget extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return (<div>
            <h1>Count: {this.props.count}</h1>
            <button onClick={this.props.handleClick}>Increase Count</button>
        </div>);
    }
}
