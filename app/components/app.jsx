/**
 * Created by associate on 2/14/17.
 */
import React, {Component} from 'react'

import CountWidgetContainer from '../containers/CountWidget.jsx'

export default class App extends Component{

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <CountWidgetContainer store={this.props.store}/>
            </div>);
    }
}