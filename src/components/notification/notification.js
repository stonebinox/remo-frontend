import React, { Component } from 'react';
import { Brand } from '../brand/brand';
import { NotificationBody } from './components/notification-body/notification-body';
import './notification.sass';

export class Notification extends Component {
    render() {
        return (
            <div className="notification">
                <div class="notification-layout">
                    <div>
                        <NotificationBody />
                    </div>
                    <div>
                        <Brand />
                    </div>
                </div>
            </div>
        );
    }
}
