import React, { Component } from 'react';
import './notification-widget.sass';

export class NotificationWidget extends Component {
    render() {
        let widgetStyle = 'widget';
        let unreadCount = 0;

        if (this.props.notifications.length > 0) {
            const {
                notifications
            } = this.props;

            notifications.map((notification, index) => {
                if (!notification.read) {
                    widgetStyle = 'widget unread';
                    unreadCount += 1;
                }

                return true;
            });
        }

        return (
            <div className={widgetStyle}>
                { unreadCount > 0 ? unreadCount : <i className="fas fa-exclamation"></i> }
            </div>
        );
    }
}