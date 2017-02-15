/**
 * Created by associate on 2/14/17.
 */
import React, {Component} from 'react'
import incrementCount from '../actions/actions.js'


export default class App extends Component{

    constructor(props){
        super(props);

        this.state ={
            counter: this.props.store.getState()
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
        this.props.store.subscribe(this.handleChange);
    }

    handleChange(){
        console.log(`CB ${this.props.store.getState()}`);
        this.setState({
            counter: this.props.store.getState()
        });
    }

    handleClick(){
        this.props.store.dispatch(incrementCount());
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.counter}</h1>
                <button onClick={this.handleClick}>Increase Count</button>
            </div>);
    }
}