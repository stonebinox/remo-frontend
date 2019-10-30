import React, { Component } from 'react';
import { NotificationBody } from './components/notification-body/notification-body';
import './notification.sass';

export class Notification extends Component {
    constructor(props) {
        super(props);

        this.dismiss = this.dismiss.bind(this);
    }

    /**
     * Closes a notification
     * 
     * @param {Number}  eventId The ID of the event being closed
     * @param {Boolean} auto    Determines if it was auto closed or not
     */
    dismiss(eventId, auto) {
        this.props.onClearEvent(eventId, auto);
    }

    render() {
        let notificationClass = 'notification';

        if (this.props.event !== null) {
            notificationClass += ' active';

            let {
                notification_type
            } = this.props.event;

            notificationClass += ` ${notification_type}`;
        }

        return (
            <div className={notificationClass}>
                <NotificationBody onDismiss={this.dismiss} data={this.props.event} />
            </div>
        );
    }
}
