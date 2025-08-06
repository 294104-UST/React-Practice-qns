import React, { useState } from 'react';
import { addPatient } from './PatientService';
const PatientRegistrationForm = ({ onRegister }) => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    condition: '',
    lastVisit: '',
  });

  const [error, setError] = useState({});

  const validateForm= () => {
    const error={};
    if(!formData.name){
        error.name="Name is required"
    }

    if(!formData.age){
        error.age="Age is required"
    }

     if(!formData.gender){
        error.gender="Gender is required"
    }

    if(!formData.condition){
        error.condition="Condition is required"
    }

    if(!formData.lastVisit){
        error.lastVisit="Last Visit is required"
    }

    setError(error);
    return Object.keys(error).length===0;

  };

  const handleChange = (e) => {
    setFormData({...formData,[e.target.name]:e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(validateForm()){
        console.log("the final formdata:",formData);

        if(onRegister) {
            onRegister(formData);
        }
        setFormData({
            name: '',
    age: '',
    gender: '',
    condition: '',
    lastVisit: ''
        })
    setError({});
    }
   
  };
const isValidDate = (dateString) => {
  
};
  return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                name='name'
                value={formData.name}
                onChange={handleChange}
                placeholder='Name'
            />
            {error.name&&<p>{error.name}</p>}

            <input
                type='text'
                name='age'
                value={formData.age}
                onChange={handleChange}
                placeholder='Age'
            />
            {error.age&&<p>{error.age}</p>}

            <select name='gender' value={formData.gender} onChange={handleChange}>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>
            {error.gender&&<p>{error.gender}</p>}

            <input
                type='text'
                name='condition'
                value={formData.condition}
                onChange={handleChange}
                placeholder='Condition'
            />
            {error.condition&&<p>{error.condition}</p>}

            <input
                type='date'
                name='lastVisit'
                value={formData.lastVisit}
                onChange={handleChange}
                placeholder='Last Visit (YYYY-MM-DD)'
            />
            {error.lastVisit&&<p>{error.lastVisit}</p>}
            <button type='submit'>Register Patient</button>
        </form>
  );
};
export default PatientRegistrationForm;