import React, { Component } from 'react';
import './notification-history.sass';
import { NotificationBody } from '../notification/components/notification-body/notification-body';

export class NotificationHistory extends Component {
    render() {
        let {
            history,
            historyOpen,
        } = this.props;

        let historyStyle = 'history';

        if (historyOpen) {
            historyStyle += ' active';
        }

        history = history.reverse();

        return (
            <div className={historyStyle}>{
                history.length > 0 ? (
                    <div>
                        <strong>Notifications ({history.length})</strong>
                        <hr />
                        {
                            history.map((event, index) => {
                                return (
                                    <div className="item" key={index}>
                                        <NotificationBody data={event} />
                                    </div>
                                );
                            })
                        }
                    </div>
                ) : <p>No notifications.</p>
            }</div>
        );
    }
}