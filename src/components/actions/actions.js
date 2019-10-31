import React, { Component } from 'react';
import ReactNotifications from 'react-browser-notifications';
import './actions.sass';

export class Actions extends Component {
    constructor(props) {
        super(props);

        this.state = {
            names: [
                'mike',
                'dan',
                'austin',
                'duncan',
                'john',
                'dave',
                'richard',
            ],
            currentName: null,
        };

        this.randomizeName = this.randomizeName.bind(this);
        this.showBrowserNotification = this.showBrowserNotification.bind(this);
    }

    showBrowserNotification() {
        if (this.n.supported()) this.n.show();
    }

    /**
     * Gets random names for the notifications
     */
    randomizeName() {
        const name = this.state.names[Math.floor(Math.random() * this.state.names.length)];

        this.setState({
            currentName: name,
        });

        return name;
    }

    render() {
        return (
            <div className="actions">
                <strong>Actions</strong>
                <hr />
                <ReactNotifications
                    onRef={ref => (this.n = ref)} // Required
                    title="Hey There!" // Required
                    body="This is the body"
                    // icon="icon.png"
                    tag="abcdef"
                    timeout="2000"
                    onClick={event => this.n.close(event.target.tag)}
                />
                <button type="button" className="action" onClick={() => this.props.onFireEvent({
                    event_name: 'table_joined',
                    username: this.randomizeName(),
                    notification_type: 'info',
                })}>User joined table</button>
                <button type="button" className="action" onClick={() => {
                    this.props.onFireEvent({
                        event_name: 'table_left',
                        username: this.state.currentName ? this.state.currentName : this.randomizeName(),
                        notification_type: 'alert',
                    });

                    this.setState({
                        currentName: null,
                    });

                    this.showBrowserNotification();
                }}>User left the table</button>
                <button type="button" className="action" onClick={() => this.props.onFireEvent({
                    event_name: 'broadcast_start',
                    username: null,
                    notification_type: 'alert-success',
                })}>Broadcast start</button>
                <button type="button" className="action" onClick={() => this.props.onFireEvent({
                    event_name: 'broadcast_end',
                    username: null,
                    notification_type: 'alert',
                })}>Broadcast end</button>
                <button type="button" className="action" onClick={() => this.props.onFireEvent({
                    event_name: 'connection_issue',
                    username: null,
                    notification_type: 'danger',
                })}>Your connection issue</button>
                <button type="button" className="action" onClick={() => this.props.onFireEvent({
                    event_name: 'connection_issue',
                    username: this.randomizeName(),
                    notification_type: 'danger',
                })}>Other user connection issue</button>
                <button type="button" className="action" onClick={() => this.props.onFireEvent({
                    event_name: 'webcam_issue',
                    username: null,
                    notification_type: 'danger',
                })}>Your webcam issue</button>
                <button type="button" className="action" onClick={() => this.props.onFireEvent({
                    event_name: 'webcam_issue',
                    username: this.randomizeName(),
                    notification_type: 'danger',
                })}>Other user webcam issue</button>
            </div>
        );
    }
}