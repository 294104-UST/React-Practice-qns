import React, { useEffect, useState } from 'react';
import { getPatients } from './PatientService';

export const PatientInformation = ({ patientID }) => {
  const [patient, setPatient] = useState(null);

  useEffect(()=>{
    const fetchAll=async()=>{
        const pats=await getPatients();
        const realPat=pats.find(p=>p.patientID==patientID);
        setPatient(realPat);
    }
    fetchAll();
  },[patientID])
 
  if(!patient){return <div>Loading.....</div>}
  return (
        <div>
            <p>Patient ID: {patient.patientID}</p>
            <p>Name: {patient.name}</p>
            <p>Age: {patient.age}</p>
            <p>Gender: {patient.gender}</p>
            <p>Condition: {patient.condition}</p>
            <p>Last Visit: {patient.lastVisit}</p>
        </div>
  );
};