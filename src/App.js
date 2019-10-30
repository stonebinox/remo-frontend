import React, { Component } from 'react';
import { Notification } from './components/notification/notification';
import { Actions } from './components/actions/actions';
import { NotificationWidget } from './components/notification-widget/notification-widget';
import './App.sass';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentEvent: null,
      eventHistory: [],
      eventCount: 0,
    };

    this.fireEvent = this.fireEvent.bind(this);
    this.clearEvent = this.clearEvent.bind(this);
  }

  /**
   * Fires an event and modifies it for a notification
   * 
   * @param {JSON} event Contains a JSON structure 
   */
  fireEvent(event) {
    let {
      eventHistory,
      eventCount,
    } = this.state;

    eventCount += 1;
    event.id = eventCount;
    event.read = false;

    eventHistory.push(event);

    this.setState({
      currentEvent: event,
      eventHistory,
      eventCount,
    });

    let that = this;
    setTimeout(() => that.clearEvent(true), 5000);
  }

  /**
   * Clears a notification
   * 
   * @param {Boolean} auto To determine if it was auto closed or user-closed 
   */
  clearEvent(auto) {
    let {
      eventHistory,
      eventCount,
    } = this.state;

    if (!auto) {
      eventHistory.map((event, index) => {
        if (event.id === eventCount) {
          event.read = true;
          eventHistory[index] = event;
        }

        return true;
      });
    }

    this.setState({
      currentEvent: null,
      eventHistory,
    });
  }

  render() {
    return (
      <div className="app">
        <NotificationWidget notifications={this.state.eventHistory} />
        <Notification onClearEvent={this.clearEvent} event={this.state.currentEvent} />
        <Actions onFireEvent={this.fireEvent} />
      </div>
    );
  }
}
