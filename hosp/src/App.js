import React ,{useState} from 'react';
import PatientRegistrationForm from './Components/patreg';
import  PatientInformation  from './Components/patinfo';
import './App.css';

function App() {
 const [selectedPatientID, setSelectedPatientID] = useState(null);

  const handleRegister = (newPatient) => {
    // console.log('Registered patient:', newPatient);
    // console.log(' patient ID:', newPatient.patientId);
    setSelectedPatientID(newPatient.patientId); // set the new patient ID to view after registration
  };

  return (
    <div>
      <h1>Patient Registration</h1>
      <PatientRegistrationForm onRegister={handleRegister} />

      {selectedPatientID && (
        <>
          <h2>Registered Patient Details</h2>
          <PatientInformation patientId={selectedPatientID} />
        </>
      )}
    </div>
  );
}

export default App;
