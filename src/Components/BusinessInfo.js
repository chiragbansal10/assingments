import React, { useState, useEffect } from "react";
import "./BusinessInfo.css"; 
import { useNavigate } from 'react-router-dom';

const BusinessInfo = () => {
    const [formData, setFormData] = useState({
        brandName: '',
        brandType: '',
        streetAddress: '',
        city: '',
        zipCode: '',
        taxIdNumber: '',
        document1: '',
        document2: '',
        document3: ''
    });

    const [errors, setErrors] = useState({});
    const navigate = useNavigate(); 

   
    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem('formData'));
        if (savedData) {
            setFormData(savedData);
        }
    }, []);

    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    
    const validate = () => {
        let tempErrors = {};
        if (!formData.brandName) tempErrors.brandName = "Brand Name is required";
        if (!formData.brandType) tempErrors.brandType = "Brand Type is required";
        if (!formData.streetAddress) tempErrors.streetAddress = "Street Address is required";
        if (!formData.city) tempErrors.city = "City is required";
        if (!formData.zipCode) tempErrors.zipCode = "Zip Code is required";
        if (!formData.taxIdNumber) tempErrors.taxIdNumber = "Tax ID Number is required";
        if (!formData.document1) tempErrors.document1 = "Document 1 is required";
        if (!formData.document2) tempErrors.document2 = "Document 2 is required";
        if (!formData.document3) tempErrors.document3 = "Document 3 is required";
        
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0; // Return true if no errors
    };

    
    const handleSubmit = (e) => {
        e.preventDefault(); 
        if (validate()) { 
            localStorage.setItem('formData', JSON.stringify(formData));
            alert('Data saved successfully!');
            navigate('/next-step'); 
        }
    };

    return (
        <div className="create-account">
            <div className="cards">
                <div className="steps">
                    <h2 className="step-number">Step 2</h2>
                    <h3>Business Information</h3>
                    <p>Please, enter information about your company.</p>
                </div>

                <form onSubmit={handleSubmit}>
                    <p className="general">General Information</p>
                    <div className="grid">
                        <div>
                            <label>Brand Name*</label>
                            <input
                                type="text"
                                name="brandName"
                                value={formData.brandName}
                                onChange={handleChange}
                                className={errors.brandName ? 'input-error' : ''}
                                placeholder="Input Your Brand Name"
                            />
                            {errors.brandName && <p className="error">{errors.brandName}</p>}
                        </div>
                        
                        <div>
                            <label className="tooltip">Brand Type* ?<span className="tooltiptext">Local: Brands with distribution in 3 divisions or less 
                                OR multiple divisions but a total of 150 stores or less.
                                <br/>
                                <br/>
                                National: Brands with distribution in 4 divisions or more 
                                divisions or in more than 150 stores.
                                </span>
                            </label>
                            
                            <select
                                name="brandType"
                                value={formData.brandType}
                                onChange={handleChange}
                                className={errors.brandType ? 'input-error' : ''}
                            >
                                <option value="">Select Type of Your Brand</option>
                                <option value="Retail">Retail</option>
                                <option value="Wholesale">Wholesale</option>
                                <option value="Services">Services</option>
                                <option value="Manufacturing">Manufacturing</option>
                            </select>
                            {errors.brandType && <p className="error">{errors.brandType}</p>}
                        </div>
                        
                        <div>
                            <label>Street Address*</label>
                            <input
                                type="text"
                                name="streetAddress"
                                value={formData.streetAddress}
                                onChange={handleChange}
                                className={errors.streetAddress ? 'input-error' : ''}
                                placeholder="Input Your Street Address"
                            />
                            {errors.streetAddress && <p className="error">{errors.streetAddress}</p>}
                        </div>
                        
                        <div>
                            <label>City*</label>
                            <input
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                className={errors.city ? 'input-error' : ''}
                                placeholder="Input City"
                            />
                            {errors.city && <p className="error">{errors.city}</p>}
                        </div>
                        
                        <div>
                            <label>Zip Code*</label>
                            <input
                                type="text"
                                name="zipCode"
                                value={formData.zipCode}
                                onChange={handleChange}
                                className={errors.zipCode ? 'input-error' : ''}
                                placeholder="Input Zip Code"
                            />
                            {errors.zipCode && <p className="error">{errors.zipCode}</p>}
                        </div>
                        
                        <div>
                            <label>Tax ID Number*</label>
                            <input
                                type="text"
                                name="taxIdNumber"
                                value={formData.taxIdNumber}
                                onChange={handleChange}
                                className={errors.taxIdNumber ? 'input-error' : ''}
                                placeholder="Input Tax ID Number"
                            />
                            {errors.taxIdNumber && <p className="error">{errors.taxIdNumber}</p>}
                        </div>
                    </div>
                    
                    <div className="documents">
                        <h4 className="docu">DOCUMENTS</h4>
                        <label>Once the following documents are signed, you'll be ready to get started</label>
                        <div className="document">
                            <input
                                type="text"
                                name="document1"
                                value={formData.document1}
                                onChange={handleChange}
                                placeholder="Electronically sign the agreement(s)"
                            />
                            {errors.document1 && <p className="error">{errors.document1}</p>}
                            <button type="button" className="blue_buuton">{">"}</button>
                        </div>
                        <div className="document">
                            <input
                                type="text"
                                name="document2"
                                value={formData.document2}
                                onChange={handleChange}
                                placeholder="Non adult beverage Kroger market supplier waiver and release"
                            />
                             {errors.document2 && <p className="error">{errors.document2}</p>}
                            <button type="button" className="blue_buuton">{">"}</button>
                        </div>
                    </div>

                    <div className="documents">
                        <h4 className="docu">COI PDF UPLOAD</h4>
                        <label>Once the following documents are signed, you'll be ready to get started</label>
                        <div className="document">
                            <input
                                type="text"
                                name="document3"
                                value={formData.document3}
                                onChange={handleChange}
                                placeholder="Electronically sign the agreement(s)"
                            />
                             {errors.document3 && <p className="error">{errors.document3}</p>}
                            <button type="button" className="blue_buuton">{">"}</button>
                        </div>
                    </div>
                    <button type="submit" className="submit-button">Next</button>
                </form>
            </div>
        </div>
    );
};

export default BusinessInfo;
