import React, { useState, useEffect } from 'react';
import { addPatient } from '../Services/patservice';




// Patient registration form component

const PatientRegistrationForm = ({ onRegister }) => {

    const [errors, setErrors] = useState({});



  const [formData, setFormData] = useState({

    name: '',

    age: '',

    gender: '',

    condition: '',

    lastVisit: '',

  });



  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });

  };

  const validateForm = () => {

    const errors = {};
    if(!formData.name){
        errors.name="name is required";
    }
    if(!formData.age){
        errors.age="age is required";
    }
    if(!formData.gender){
        errors.gender="gender is required";
    }
    if(!formData.condition){
        errors.condition="condition is required";
    }
    if(!formData.lastVisit){
        errors.lastVisit="last visit is required";
    }
    else if(new Date(formData.lastVisit)>new Date()){
         errors.lastVisit="last visit cannot be future date";
    }

    setErrors(errors);
    return Object.keys(errors).length===0;


    // validate form and return errors 

  };



//   const isValidDate = (dateString) => {

// //    validate date 
//     if (new Date(dateString)>new Date())
//     {
//         return false;
//     }

//   };

  const handleSubmit = async (e) => {

    e.preventDefault();

    // Call parent function to register patient and validate form 
    if(!validateForm()){
        return;
    }
    
    const newPat=await addPatient(formData);


    if(onRegister){
        onRegister(newPat);
    }
    setFormData({name: '',
        age: '',
        gender: '',
        condition: '',
        lastVisit: '',});


  };

  return (
    <form onSubmit={handleSubmit}>
        <input
            type='text'
            name='name'
            placeholder='name'
            value={formData.name}
            onChange={handleChange}
        />
        {errors.name&&<div>{errors.name}</div>}

        <input
            type='text'
            name='age'
            placeholder='age'
            value={formData.age}
            onChange={handleChange}
        />
        {errors.age&&<div>{errors.age}</div>}

        <input
            type='text'
            name='gender'
            placeholder='gender'
            value={formData.gender}
            onChange={handleChange}
        />
        {errors.gender&&<div>{errors.gender}</div>}

        <input
            type='text'
            name='condition'
            placeholder='condition'
            value={formData.condition}
            onChange={handleChange}
        />
        {errors.condition&&<div>{errors.condition}</div>}

        <input
            type='date'
            name='lastVisit'
            placeholder='lastVisit'
            value={formData.lastVisit}
            onChange={handleChange}
        />
        {errors.lastVisit&&<div>{errors.lastVisit}</div>}

        <button type='submit'>Register</button>
    </form>


  );

};

export default PatientRegistrationForm;