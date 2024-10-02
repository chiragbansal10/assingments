import React, { useState } from 'react';
import BoxLayout from './BoxLayout';
import List from './List';
 import "./SelectView.css";
const SelectView = ({ projectData }) => {
    const [selectedView, setSelectedView] = useState(localStorage.getItem('selectedView') || null);
  const [error, setError] = useState('');

  const handleViewChange = (view) => {
    setSelectedView(view);
    setError('');
  };

  const handleNext = () => {
    if (!selectedView) {
      setError('Please select a view.');
      return;
    }
    localStorage.setItem('selectedView', selectedView);
    alert(`Selected view saved: ${selectedView}`);
   
  };

  return (
    <div className="view-selector">
    <div><h3  className='select'>Select a view</h3>
    <p  className='select_para'>You can also customize this view in settings</p></div>
      
      <div className="view-options">
        <div
          className={`view-option ${selectedView === 'list' ? 'selected' : ''}`}
          onClick={() => handleViewChange('list')}
        >
         <List/>
          
        </div>
        <div
          className={`view-option ${selectedView === 'board' ? 'selected' : ''}`}
          onClick={() => handleViewChange('board')}
        >
         <BoxLayout/>
        </div>
      </div>
      <div className="listName"><p className="list_Name">List</p>
      <p className="boardName">Board</p></div>
      
      {error && <p className="error">{error}</p>}
      <button className="back-btn">{"< Back"}</button>
      <button className="next-btn" onClick={handleNext}>Next</button>
      <div className="dots-container">
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span> 
                    </div>
    </div>
  );
}

export default SelectView
