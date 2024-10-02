
import React, { useState } from "react";
import "./CreateAccount.css";
import { useNavigate } from "react-router-dom";
import BusinessInfo from "./BusinessInfo";
import AdditionalUser from "./AdditionalUser";

function CreateAccount() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.firstName) tempErrors.firstName = "First Name is required";
    if (!formData.lastName) tempErrors.lastName = "Last Name is required";
    if (!formData.email) tempErrors.email = "Email is required";
    if (!formData.phoneNumber)
      tempErrors.phoneNumber = "Phone Number is required";
    if (!formData.password) tempErrors.password = "Password is required";
    if (formData.password !== formData.confirmPassword)
      tempErrors.confirmPassword = "Passwords do not match";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };
    // Validate form inputs
  

  const handlePrev = () => {
    if (step > 1) setStep((prevStep) => prevStep - 1);
  };

  const handleNext = () => {
    if (step === 1 && validate()) {
      setStep((prevStep) => prevStep + 1);
    }
  };

  const handleAdditional = () => {
    if (step === 2) {
      handleNextStep({ preventDefault: () => {} });
    }
  };
  const handleNextStep = (e) => {
    e.preventDefault();
    if (step === 2) {
      setStep(3); // Update step state to 3
    }
  };
    const handleProject = () => {
    navigate('/create-project');
  }
  const renderSteps = () => {
    switch (step) {
      case 1:
        return (
          <div className="form">
            {/* Step 1 form code */}
            <div className="form-group-row">
              <div className="form-group">
                <label id="firstName" htmlFor="firstName">
                  First Name*
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Input Your First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                {errors.firstName && (
                  <p className="error-text">{errors.firstName}</p>
                )}
              </div>
              <div className="form-group">
                <label id="firstName" htmlFor="lastName">
                  Last Name*
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Input Your Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                />
                {errors.lastName && (
                  <p className="error-text">{errors.lastName}</p>
                )}
              </div>
            </div>
            <div className="form-group-row">
              <div className="form-group">
                <label id="firstName" htmlFor="email">
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Input Your Email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="error-text">{errors.email}</p>}
              </div>
              <div className="form-group">
                <label id="firstName" htmlFor="phoneNumber">
                  Phone Number*
                </label>
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="Input Your Phone Number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
                {errors.phoneNumber && (
                  <p className="error-text">{errors.phoneNumber}</p>
                )}
              </div>
            </div>
            <div className="form-group-row">
              <div className="form-group">
                <label id="firstName" htmlFor="password">
                  Password*
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Create Password"
                  value={formData.password}
                  onChange={handleChange}
                />
                {errors.password && (
                  <p className="error-text">{errors.password}</p>
                )}
              </div>
              <div className="form-group">
                <label id="firstName" htmlFor="confirmPassword">
                  Confirm Password*
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm Your Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                {errors.confirmPassword && (
                  <p className="error-text">{errors.confirmPassword}</p>
                )}
              </div>
            </div>
          </div>
        );
      case 2:
        return <BusinessInfo formData={formData} setFormData={setFormData} />;
      case 3:
        return <AdditionalUser />;
      default:
        return null;
    }
  };

  return (
    <div className="create-account">
      <div className="header">
        <a href="#" className="contact-link">
          Contact Us
        </a>
      </div>
      <div className="title">
        <div>Create New Account</div>
      </div>
      <div className="cards">
      
   <div className="step-indicator">
  <div className={`step1 ${step >= 1 ? 'active' : ''} ${step >= 2 ? 'no-radius' : ''}`}>
    <div className={`step ${step >= 1 ? 'active' : ''}`}>1</div>
    <div className={`step-label ${step >= 1 ? 'active' : ''}`}>Your Profile</div>
  </div>

  <div className={`step2 ${step >= 2 ? 'active' : ''} ${step >= 3 ? 'no-radius' : ''}`}>
    <div className={`step ${step >= 2 ? 'active' : ''}`}>2</div>
    <div className={`step-label ${step >= 2 ? 'active' : ''}`}>Business Information</div>
  </div>

  <div className={`step3 ${step >= 3 ? 'active' : ''} ${step >= 3 ? 'no-radius' : ''}`}>
    <div className={`step ${step >= 3 ? 'active' : ''}`}>3</div>
    <div className={`step-label ${step >= 3 ? 'active' : ''}`}>Additional Users</div>
  </div>
</div>

        {step === 1 && (
          <div className="content">
          
            <p className="createaccount1">Step 1</p>
            <h1>Your Profile</h1>
            <p className="profile-content">
              Enter the login information for your account. Your will be able to
              create additional users after registering.
            </p>
          </div>
        )}
        <div className="lower-form">{renderSteps()}</div>
      </div>

      {step === 1 && (
        <div className="form-footer">
          <button disabled={step === 1} onClick={handlePrev} className='back_first'>
            {"< Back to Login"}
          </button>
          <button  onClick={handleProject} className="project">Project</button>
          <button onClick={handleNext} className="submit-btn">
            Next Step
          </button>
        </div>
      )}
      {step === 2 && (
        <div className="form-footer">
          <button disabled={step === 1} className='back_second'>{"< Back to Login"}</button>
          <div className="step_btn">
            <button onClick={handlePrev} className="previous-btn">
              {"< Previous Step"}
            </button>
           
            <button onClick={handleAdditional} className="submit-btn">
              {"Next Step >"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CreateAccount;

