import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Form=()=>{
    const [formData,setFormData]=useState({
        name:'',
        dob:'',
        hist:'',
        medi:''
    });
    const [error,setError]=useState({});
    const navigate=useNavigate();

    const validate=()=>{
        const errs={};
        if(!formData.name){
            errs.name="name is required";
        }
        if(!formData.dob){
            errs.dob="name is required";
        }
        else if(new Date(formData.dob)>new Date()){
            errs.dob="no future datepossible";
        }

        if(!formData.hist){
            errs.hist="history is required";
        }
        if(!formData.medi){
            errs.medi="medical condn is required";
        }
        setError(errs);
        return Object.keys(errs).length===0;
    };

    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
    };

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(validate()){
            navigate('/welcome');
        }
        // else{
        //     navigate('/error');
        // }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>The patient form</h2>
            <input
                type='text'
                name="name"
                placeholder="patient's name"
                value={formData.name}
                onChange={handleChange}
            />
            {error.name&&<div>{error.name}</div>}

            <input 
                type='Date'
                name='dob'
                placeholder='date'
                value={formData.dob}
                onChange={handleChange}
            />
            {error.dob&&<div>{error.dob}</div>}

            <input 
                type='text'
                name='hist'
                placeholder='medical history'
                value={formData.hist}
                onChange={handleChange}
            />
            {error.hist&&<div>{error.hist}</div>}

            <input 
                type='text'
                name='medi'
                placeholder='medical condn'
                value={formData.medi}
                onChange={handleChange}
            />
            {error.medi&&<div>{error.medi}</div>}

            <button type='submit'>Submit</button>

        </form>
    );
}

export default Form;