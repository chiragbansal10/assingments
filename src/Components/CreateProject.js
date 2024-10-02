import React, { useState, useEffect } from 'react';
import './CreateProject.css';
import ProjectType from './ProjectType'; 
import { useNavigate } from 'react-router-dom';

const CreateProject = () => {
  const [projectName, setProjectName] = useState('');
  const [client, setClient] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [notes, setNotes] = useState('');
  const [hourlyRate, setHourlyRate] = useState('₹ 12,678.00');
  const [budget, setBudget] = useState('80.00');
  const [budgetResets, setBudgetResets] = useState(false);
  const [emailAlerts, setEmailAlerts] = useState(true);

  const [errors, setErrors] = useState({}); 
  
  const [isProjectTypeVisible, setIsProjectTypeVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('projectData'));
    if (savedData) {
      setProjectName(savedData.projectName || '');
      setClient(savedData.client || '');
      setStartDate(savedData.startDate || '');
      setEndDate(savedData.endDate || '');
      setNotes(savedData.notes || '');
      setHourlyRate(savedData.hourlyRate || '₹ 12,678.00');
      setBudget(savedData.budget || '80.00');
      setBudgetResets(savedData.budgetResets || false);
      setEmailAlerts(savedData.emailAlerts || true);
    }
  }, []);

  const validateFields = () => {
    const newErrors = {};
    if (!projectName) newErrors.projectName = 'Project name is required';
    if (!client) newErrors.client = 'Client is required';
    if (!startDate) newErrors.startDate = 'Start date is required';
    if (!endDate) newErrors.endDate = 'End date is required';
    return newErrors;
  };

  const handleNext = () => {
    const validationErrors = validateFields();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // Show errors if validation fails
      return;
    }

    
    const projectData = {
      projectName,
      client,
      startDate,
      endDate,
      notes,
      hourlyRate,
      budget,
      budgetResets,
      emailAlerts,
    };
    localStorage.setItem('projectData', JSON.stringify(projectData));

    
    setIsProjectTypeVisible(true);
  };

  const handlePrevious = () => {
    navigate('/');
  };

  return (
    <div className="container">
      {isProjectTypeVisible ? (
        <ProjectType projectData={{ projectName, client, startDate, endDate, notes, hourlyRate, budget, budgetResets, emailAlerts }} />
      ) : (
        <>
          <div className="box">
            <div className="header">
              <h2 className="project">Create a project</h2>
              <i className="fas fa-times cursor-pointer"></i>
            </div>

            <div className="form-groups">
              <label className="form_groups">Project name</label>
              <input
                type="text"
                placeholder="Enter project name here"
                value={projectName}
                onChange={(e) => {
                  setProjectName(e.target.value);
                  if (errors.projectName) setErrors((prev) => ({ ...prev, projectName: '' })); 
                }}
              />
              {errors.projectName && <p className="error-text">{errors.projectName}</p>}
            </div>

            <div className="form-groups">
              <label className="form_groups">Client</label>
              <div className="client-group">
                <select
                  value={client}
                  onChange={(e) => {
                    setClient(e.target.value);
                    if (errors.client) setErrors((prev) => ({ ...prev, client: '' }));
                  }}
                >
                  <option value="">Select a client</option>
                  <option value="Client 1">Client 1</option>
                  <option value="Client 2">Client 2</option>
                </select> or
                <button className="new-client">{"+ New Client"}</button>
              </div>
              {errors.client && <p className="error-text">{errors.client}</p>}
            </div>

            <div className="form_groups_date">
              <label className="form_groups">Dates</label>
              <div className="date-group">
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => {
                    setStartDate(e.target.value);
                    if (errors.startDate) setErrors((prev) => ({ ...prev, startDate: '' }));
                  }}
                />
                <span>-</span>
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => {
                    setEndDate(e.target.value);
                    if (errors.endDate) setErrors((prev) => ({ ...prev, endDate: '' }));
                  }}
                />
              </div>
              {errors.startDate && <p className="error-text">{errors.startDate}</p>}
              {errors.endDate && <p className="error-text">{errors.endDate}</p>}
            </div>

            <div className="form-groups">
              <label className="form_groups">Notes</label>
              <textarea
                placeholder="Optional"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              ></textarea>
            </div>

            <div className="buttons">
              <button onClick={handlePrevious} className="back">Back</button>
              <button className="nextpro" onClick={handleNext}>Next</button>
            </div>

            <div className="dots-container">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default CreateProject;
