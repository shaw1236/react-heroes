import React from 'react';

import MessageService from '../../services/MessageService';
import './style.css';

export default class Message extends React.Component {
    constructor(props) {
        super(props);
        // Message
        this.state = { messages: MessageService.get() };
    }

    handleClear = () => {
        MessageService.clear();
        this.setState({ messages: MessageService.get() });
    }

    render() {
        let aJSX = <div>
                        <hr/>
                        <h2>Messages</h2>
                        <button className="clear" onClick={() => this.handleClear()}>Clear</button>
                        <div>
                            {this.state.messages.map((message, index) => ( 
                            <div key={index}>
                                <p>{message}</p>
                            </div>
                        ))}
                        </div>
                    </div>;
      return this.state.messages.length? aJSX : <div></div>; 
    }
}