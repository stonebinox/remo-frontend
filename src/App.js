import React, { Component } from 'react';
import { Notification } from './components/notification/notification';
import { Actions } from './components/actions/actions';
import { NotificationWidget } from './components/notification-widget/notification-widget';
import './App.sass';
import { NotificationHistory } from './components/notification-history/notification-history';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentEvent: null,
      eventHistory: [],
      eventCount: 0,
      historyOpen: false,
    };

    this.fireEvent = this.fireEvent.bind(this);
    this.clearEvent = this.clearEvent.bind(this);
    this.notificationMonitor = this.notificationMonitor.bind(this);
    this.clearAllEvents = this.clearAllEvents.bind(this);
    this.closeHistory = this.closeHistory.bind(this);
  }

  /**
   * Monitors notifications that are open and expires them if required.
   */
  notificationMonitor() {
    if (this.state.eventHistory.length > 0) {
      let history = this.state.eventHistory;

      history.map((event, index) => {
        const nowTs = new Date().getTime();
        if (nowTs >= event.expire && !event.read && !event.expired) {
          this.clearEvent(event.id, true);
        }

        return true;
      });
    }

    // check every 500ms if a notification has to be hidden
    setTimeout(() => this.notificationMonitor(), 500);
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
    const expireTs = new Date().getTime() + 5000;

    eventCount += 1;
    event.id = eventCount;
    event.read = false;
    event.expire = expireTs;
    event.expired = false;

    if (eventHistory.length === 0) {
      this.notificationMonitor();
    }

    eventHistory.push(event);

    this.setState({
      currentEvent: event,
      eventHistory,
      eventCount,
    });
  }

  /**
   * Closes the notification history
   */
  closeHistory() {
    this.setState({
      historyOpen: false,
    });
  }

  /**
   * Essentially marks all notifications as read
   */
  clearAllEvents() {
    const {
      eventHistory
    } = this.state;

    eventHistory.map((event, index) => {
      this.clearEvent(event.id, false);

      return true;
    });

    this.setState({
      historyOpen: true,
    });
  }

  /**
   * Clears a notification
   * 
   * @param {Number}  eventId The ID of the event to clear
   * @param {Boolean} auto    User initated or auto closed
   */
  clearEvent(eventId, auto) {
    let {
      eventHistory,
      currentEvent,
    } = this.state;

    let targetEvent = null;
    let position = null;

    eventHistory.map((event, index) => {
      if (event.id === eventId) {
        targetEvent = event;
        position = index;
      }

      return true;
    });

    if (targetEvent) {
      targetEvent.expired = true;

      if (!auto) {
        targetEvent.read = true;
      }

      eventHistory[position] = targetEvent;

      if (currentEvent && targetEvent.id === currentEvent.id) {
        currentEvent = null;
      }
    }

    this.setState({
      eventHistory,
      currentEvent,
    });
  }

  render() {
    return (
      <div className="app">
        <NotificationWidget onClearAll={this.clearAllEvents} notifications={this.state.eventHistory} onCloseHistory={this.closeHistory} />
        <NotificationHistory history={this.state.eventHistory}  historyOpen={this.state.historyOpen} />
        <Notification onClearEvent={this.clearEvent} event={this.state.currentEvent} />
        <Actions onFireEvent={this.fireEvent} />
      </div>
    );
  }
}
