
import './App.css';

import CreateAccount from './Components/CreateAccount';
// import { BrowserRouter } from 'react-router-dom';
import CreateProject from './Components/CreateProject';
import ProjectType from './Components/ProjectType';
import { BrowserRouter as BrowserRouter, Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    
    
      <BrowserRouter>
     
  
      <Routes>
        <Route path="/" element={<CreateAccount />} />
        <Route path="/create-project" element={<CreateProject />} /> {/* Add this route */}
        <Route path="/project-type" element={<ProjectType />} /> 
      </Routes>
    
   </BrowserRouter>
    

  );
}

export default App;
