import React from "react";
import { useState } from "react";
import {useNavigate} from "react-router-dom";

const LoanForm=()=>{
    const [formData,setFormData]=useState({
        fullName:'',
        loanAmount:'',
        purpose:'House',
        tenure:''
    });

    const [error,setError]=useState({});
    const navigate=useNavigate();
    const validate=()=>{
        const errs={};
        if(!formData.fullName){
            errs.fullName="Full Name is required.";
        }
        if(!formData.loanAmount){
            errs.loanAmount="Loan Amount is required.";
        }
        else if(parseFloat(formData.loanAmount)<1000||parseFloat(formData.loanAmount)>1000000){
            errs.loanAmount="Loan Amount is not in limit 1000 - 10000000.";
        }
        
        if(!formData.tenure){
            errs.tenure="tenure is required.";
        } else if(parseInt(formData.tenure)<1||parseInt(formData.tenure)>30){
            errs.loanAmount="tenure is not in limit 1 - 30.";
        }

        setError(errs);
        return Object.keys(errs).length===0;
    }

    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(validate()){
            navigate('/welcome');
        }
        // else{
        //     navigate('/error');
        // }
    }

    return(
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="fullName"
                placeholder="enter the name"
                value={formData.fullName}
                onChange={handleChange}
            />
            {error.fullName&&<div>{error.fullName}</div>}

            <input
                type="text"
                name="loanAmount"
                placeholder="enter the amount"
                value={formData.loanAmount}
                onChange={handleChange}
            />
            {error.loanAmount&&<div>{error.loanAmount}</div>}

           <select 
                name="purpose"
                value={formData.purpose}
                onChange={handleChange}
           >
            <option value="House">House</option>
            <option value="Car">Car</option>
            <option value="Education">Education</option>
           </select>

            <input
                type="text"
                name="tenure"
                placeholder="enter the tenure"
                value={formData.tenure}
                onChange={handleChange}
            />
            {error.tenure&&<div>{error.tenure}</div>}

        <button type="submit">Register</button>
        </form>
    );
}

export default LoanForm;