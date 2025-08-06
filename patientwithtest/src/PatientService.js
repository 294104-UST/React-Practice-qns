//import environment from "./environments/environment.ts";
const API_URL = 'http://localhost:3000/patients';

export const addPatient = async (patient) => {
 return await fetch(`${API_URL}`,{
    method:"POST",
    body:JSON.stringify(patient)
 }).then(res=>res.json());
};

export const getPatients = async () => {
  return await fetch(`${API_URL}`).then(res=>res.json());
};



