import React, { useEffect, useState } from 'react';
import { getPatient } from '../Services/patservice';

const PatientInformation=({patientId})=>{
    const [patient,setPatient]=useState(null);
    useEffect(()=>{
        const fetchPatient=async()=>{
            const pats=await getPatient();
            const realPat=pats.find(p=>p.patientId===patientId);
            if(realPat){
                setPatient(realPat);
            }
        }
        fetchPatient();
    },[patientId]);
    
    if(!patient) return(<div>loading...</div>);

    return(
        <div>
            <h2>the Patient Details:</h2>
            <p>Patient ID: {patient.patientId}</p>
            <p>Patient name:{patient.name}</p>
            <p>Age: {patient.age}</p>
            <p>Gender: {patient.gender}</p>
            <p>Condition: {patient.condition}</p>
            <p>Last Visit: {patient.lastVisit}</p>
        </div>
    );
}
export default PatientInformation;