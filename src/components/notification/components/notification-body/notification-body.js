import React, { Component } from 'react';
import './notification-body.sass';

export class NotificationBody extends Component {
    /**
     * Creates the notification title and body
     * 
     * @return {JSON}
     */
    createNotification() {
        const {
            event_name,
            username,
        } = this.props.data;

        let title = '';
        let body = '';

        switch (event_name) {
            case 'table_joined':
                title = 'Table Alert';
                body = `<strong>${username}</strong> joined your table.`;
                break;
            case 'table_left':
                title = 'Table Alert';
                body = `<strong>${username}</strong> left your table.`;
                break;
            case 'broadcast_start':
                title = 'Broadcast Alert';
                body = 'The broadcast has started. Please ensure your speaker or headphones are activated.'
                break;
            case 'broadcast_end':
                title = 'Broadcast Alert';
                body = 'The broadcast has ended.';
                break;
            case 'connection_issue':
                title = 'Connection Problem';
                
                if (username === null) {
                    body = 'There seems to be some network trouble on your end. Please ensure you\'re connected to the internet.';
                } else {
                    body = `There seems to be some network trouble on <strong>${username}</strong>'s end. Please wait while they attempt to reconnect.`;
                }
                break;
            case 'webcam_issue':
                title = 'Webcam Problem';

                if (username === null) {
                    body = 'There seems to be some webcam trouble on your end.';
                } else {
                    body = `There seems to be some webcam trouble on <strong>${username}</strong>'s end.`;
                }
                break;
            default:
                title = '';
                body = '';
                break;
        }

        return {
            title,
            body,
        };
    }

    render() {
        let notificationTitle = '';
        let notificationBody = '';
        let eventId = null;

        if (this.props.data !== null) {
            const notification = this.createNotification();
            notificationTitle = notification.title;
            notificationBody = notification.body;
            eventId = this.props.data.id;
        }

        return (
            <div className="notification-body">
                <div className="title">{notificationTitle}</div>
                <div className="description" dangerouslySetInnerHTML={{ __html: notificationBody }} />
                { !this.props.onDismiss ? <span></span> : <button type="button" className="dismiss" onClick={() => this.props.onDismiss(eventId, false)}>Dismiss</button> }
            </div>
        );
    }
}
