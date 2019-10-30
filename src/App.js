import React from 'react';
import { Notification } from './components/notification/notification';
import { Actions } from './components/actions/actions';
import './App.sass';

function App() {
  return (
    <div className="app">
      <Notification />
      <Actions />
    </div>
  );
}

export default App;
