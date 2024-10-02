

import React, { useState, useEffect } from 'react';
import './CreateProject.css';
import SelectView from './SelectView';

const ProjectType = ({ projectData }) => {
    const [hourlyRate, setHourlyRate] = useState(projectData.hourlyRate || '₹ 12,678.00');
    const [budgetResets, setBudgetResets] = useState(projectData.budgetResets || false);
    const [emailAlerts, setEmailAlerts] = useState(projectData.emailAlerts || true);
    const [budget, setBudget] = useState(projectData.budget || '80.00');
    const [isSelectViewVisible, setIsSelectViewVisible] = useState(false);

    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem('projectData'));
        if (savedData) {
            setBudget(savedData.budget);
            setBudgetResets(savedData.budgetResets);
            setEmailAlerts(savedData.emailAlerts);
        }
    }, []);

   
    const handleNext = () => {
        const projectData = {
            hourlyRate,
            budget,
            budgetResets,
            emailAlerts,
        };

        
        localStorage.setItem('projectData', JSON.stringify({ ...projectData }));
        setIsSelectViewVisible(true); 
    };

    return (
        <div className="box">
            {isSelectViewVisible ? (
                <SelectView /> 
            ) : (
                <>
                    <div className="header">
                        <h2 className='project'>Project type</h2>
                        <p className="info-text">Don't panic — You can also customize these types in settings</p>
                    </div>

                    <div className="type-buttons">
                        <button  className="time active">Time & Materials</button>
                        <button>Fixed Fee</button>
                        <button  className="nonbill">Non-Billable</button>
                    </div>
                    <div className="form-groups">
                        <label className='form_groups'>Hourly</label>
                        <p className="info-texts">We need hourly rates to track your project's billable amount.</p>
                        <div className="rate-group">
                            <select className='projecthourly'>
                                <option>Project Hourly Rate</option>
                            </select>
                            <input
                                type="text"
                                value={hourlyRate}
                                onChange={(e) => setHourlyRate(e.target.value)}
                                className='small-input'
                            />
                        </div>
                    </div>
                    <div className="form-groups">
                        <label className='form_groups'>Budget</label>
                        <p className="info-texts">We need hourly rates to track your project's billable amount.</p>
                        <div className="rate-group">
                            <select className='large-input'>
                                <option>Hours per Person</option>
                            </select>
                        </div>
                        <div className="checkbox-group">
                            <div className='inner-text'>
                                <span>
                                    <input
                                        type="checkbox"
                                        checked={budgetResets}
                                        onChange={(e) => setBudgetResets(e.target.checked)}
                                    />
                                </span>
                                <span>
                                    Budget resets every month
                                </span>
                            </div>
                            <div className='inner-text'>
                                <span>
                                    <input
                                        type="checkbox"
                                        checked={emailAlerts}
                                        onChange={(e) => setEmailAlerts(e.target.checked)}
                                    />
                                </span>
                                <span>
                                    Send email alerts if project exceeds
                                </span>
                                <span> 
                                    <span className='btn-type'>{budget}</span> 
                                    <span>% of the budget</span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="buttons">
                        <button className="back">Back</button>
                        <button className="nextproject" onClick={handleNext}>Next</button>
                    </div>
                    <div className="dots-container">
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span> 
                    </div>
                </>
            )}
        </div>
    );
};

export default ProjectType;
