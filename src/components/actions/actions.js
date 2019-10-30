import React, { Component } from 'react';
import './actions.sass';

export class Actions extends Component {
    render() {
        return (
            <div className="actions">
                <strong>Actions</strong>
                <hr />
                <button type="button" className="action">User joined table</button>
                <button type="button" className="action">User left the table</button>
                <button type="button" className="action">Broadcast start</button>
                <button type="button" className="action">Broadcast end</button>
                <button type="button" className="action">Your connection issue</button>
                <button type="button" className="action">Other user connection issue</button>
                <button type="button" className="action">Your webcam issue</button>
                <button type="button" className="action">Other user webcam issue</button>
            </div>
        );
    }
}