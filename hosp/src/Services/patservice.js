let pats=[];
export const addPatient=async (patient)=>{
    const id=`P${(pats.length+1).toString().padStart(3,"0")}`;//P001
    let newPat={...patient,patientId:id};
    pats.push({...patient,patientId:id});
    return newPat;
}

export const getPatient=async()=>{
    return [...pats];
}
