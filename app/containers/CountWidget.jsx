import React, {Component} from 'react'
import incrementCount from '../actions/actions.js'

import CountWidget from '../components/CountWidget.jsx'

export default class CountWidgetContainer extends Component{

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
                <CountWidget count={this.state.counter} handleClick={this.handleClick}/>
            </div>);
    }
}