import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <h1>Banner</h1>
                {this.props.banner}
            </div>
        );
    }
}

export default Header;