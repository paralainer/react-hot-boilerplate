import React, { Component } from 'react';
import List from './List';
import {addToList, removeOdd} from '../actions/actions';
import { connect } from 'react-redux'

function mapStateToProps(state) {
    const {list} = state;
    return {
        list: list
    };
}


class App extends Component {
    constructor() {
        super();
        this.onRemoveOdd = this.onRemoveOdd.bind(this);
        this.onAddToList = this.onAddToList.bind(this);
    }

    onRemoveOdd(e) {
        e.preventDefault();
        this.props.dispatch(removeOdd());
    }

    onAddToList(e) {
        e.preventDefault();
        this.props.dispatch(addToList(Math.max(...this.props.list) + 1));
    }

    render() {
        return (
            <div>
                <h1>Hello, world.</h1>
                <button onClick={this.onAddToList}>Add</button>
                <button onClick={this.onRemoveOdd}>Remove odd</button>
                <List data={this.props.list}/>
            </div>

        );
    }
}

export default connect(mapStateToProps)(App)
