import React, { Component } from 'react';

/**
 * Sample starter component,
 * This is header component to display the header
 * 
 * We are binding the header content from React Props
 */
class Header extends Component {
    render()
    {
        return (
            <div className="App-header">
                <h1> {this.props.text} </h1>
            </div>
        );
    }
}

export default Header;