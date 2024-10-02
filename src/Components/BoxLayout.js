
import React from 'react';
import './BoxLayout.css';

const BoxLayout = () => {
    return (
        <div className="box-container">
            <div className="column">
                <div className="box small-box"></div>
                <div className="box medium-box"></div>
            </div>
            <div className="column">
                <div className="box small-box"></div>
                <div className="box large-box"></div>
            </div>
            <div className="column">
                <div className="box small-box"></div>
                <div className="box tall-box"></div>
            </div>
        </div>
    );
};

export default BoxLayout;
