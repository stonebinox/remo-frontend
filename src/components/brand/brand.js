import React, { Component } from 'react';
import './brand.sass';

export class Brand extends Component {
    render() {
        return (
            <div className="brand">
                <div className="title">Powered by Remo</div>
                <div className="sub">Virtual networking and events</div>
            </div>
        );
    }
}