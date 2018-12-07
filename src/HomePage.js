import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadAllMessages } from './redux/actions';
import axios from 'axios';

class Message extends Component {
    render() {
        return <div className="message">{this.props.content}</div>;
    }
}

class HomePage extends Component {
    state = {
        content: null,
        messageValue: ''
    };

    updateMessage = e => {
        this.setState({
            messageValue: e.target.value
        });
    };

    sendSomeData = () => {
        axios({
            method: 'POST',
            url: '/api/sendmessage',
            data: {
                message: this.state.messageValue
            }
        })
            .then(res => {
                console.log(res);
            })
            .catch(e => {
                console.log(e);
            });
        this.setState({
            messageValue: ''
        });
    };

    componentDidMount() {
        axios
            .get('/api/messages')
            .then(res => {
                console.log(res.data);
                this.props.loadAllMessages(res.data);
            })
            .catch(e => {
                // this is an async catch
                console.log(e);
            });
    }

    render() {
        return (
            <div className="content-area">
                {this.state.content}
                <div className="message">
                    {this.props.messages.map((messageData, i) => {
                        return <Message key={i} content={messageData} />;
                    })}
                </div>
                <input value={this.state.messageValue} onChange={this.updateMessage} />
                <button onClick={this.sendSomeData}>Send post data</button>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        messages: state.testReducer.messages
    };
};

const mapDispatchToProps = { loadAllMessages };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage);