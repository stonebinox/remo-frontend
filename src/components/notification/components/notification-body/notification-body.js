import React, { Component } from 'react';
import './notification-body.sass';

export class NotificationBody extends Component {
    render() {
        return (
            <div className="notification-body">
                <div className="title">User left</div>
                <div className="description">User has left the table.</div>
                <button type="button" className="dismiss">Dismiss</button>
            </div>
        );
    }
}
