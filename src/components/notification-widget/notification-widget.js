import React, { Component } from 'react';
import './notification-widget.sass';

export class NotificationWidget extends Component {
    constructor(props) {
        super(props);

        this.state = {
            widgetOpen: false,
        };
    }

    openNotificationHistory() {
        if (!this.state.widgetOpen) {
            this.setState({
                widgetOpen: true
            });
        } else {
            this.setState({
                widgetOpen: false
            });
        }
    }

    render() {
        let widgetStyle = 'widget';

        if (this.state.widgetOpen) {
            widgetStyle += ' active';
        }

        let unreadCount = 0;

        if (this.props.notifications.length > 0) {
            const {
                notifications
            } = this.props;

            notifications.map((notification, index) => {
                if (!notification.read) {
                    widgetStyle = this.state.widgetOpen ? 'widget active unread' : 'widget unread';
                    unreadCount += 1;
                }

                return true;
            });
        }

        let unreadCountText = unreadCount;
        if (unreadCount > 99) {
            unreadCountText = `99+`;
        }

        return (
            <div className={widgetStyle} onClick={() => this.openNotificationHistory()}>
                { unreadCount > 0 ? unreadCountText : <i className="fas fa-exclamation"></i> }
            </div>
        );
    }
}