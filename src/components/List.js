import React, { Component } from 'react';

export default class List extends Component {
    render() {
        return (
            <ul>
                {this.props.data.map(function(el){
                    return (
                        <li key={el}>{el}</li>
                    );
                })}
            </ul>
        );
    }
}