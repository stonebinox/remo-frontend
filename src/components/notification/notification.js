import React, { Component } from 'react';
import { NotificationBody } from './components/notification-body/notification-body';
import './notification.sass';

export class Notification extends Component {
    render() {
        return (
            <div className="notification">
                <NotificationBody />
            </div>
        );
    }
}
