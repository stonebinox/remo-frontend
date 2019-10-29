import React, { Component } from 'react';
import { Brand } from '../brand/brand';
import './notification.sass';

export class Notification extends Component {
    render() {
        return (
            <div className="notification">
                <div class="notification-layout">
                    <div></div>
                    <div>
                        <Brand />
                    </div>
                </div>
            </div>
        );
    }
}
