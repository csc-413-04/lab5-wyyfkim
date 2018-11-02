import React, { Component } from 'react';
import { connect } from 'react-redux';


class HomePage extends Component {
    render() {
        return (
            <div onClick={this.props.doTest}>
                <h1>Page 1</h1>
                <p>
                    Here is my main page content 
                </p>
                <p>
                    <a href="https://reacttraining.com/react-router/web/guides/quick-start">Click me to find out more about routing</a>
                </p>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
    };
};

const mapDispatchToProps = {};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage);