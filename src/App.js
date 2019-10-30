import React, { Component } from 'react';
import { Notification } from './components/notification/notification';
import { Actions } from './components/actions/actions';
import './App.sass';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentEvent: null,
    };

    this.fireEvent = this.fireEvent.bind(this);
    this.clearEvent = this.clearEvent.bind(this);
  }

  fireEvent(event) {
    this.setState({
      currentEvent: event,
    });

    let that = this;
    setTimeout(() => that.clearEvent(), 5000);
  }

  clearEvent() {
    this.setState({
      currentEvent: null,
    });
  }

  render() {
    return (
      <div className="app">
        <Notification onClearEvent={this.clearEvent} event={this.state.currentEvent} />
        <Actions onFireEvent={this.fireEvent} />
      </div>
    );
  }
}
