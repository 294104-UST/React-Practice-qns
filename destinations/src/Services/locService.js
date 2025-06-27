let destinations=[]
export const addDestination=(dest)=>{
    const id=destinations.length+1;
    destinations.push({...dest,id:id});
}

export const viewDestination=()=>{
    return destinations;
}

export const editDestination=(dsetn,destId)=>{
    const indx=destinations.findIndex(d=>d.id===destId);
    destinations[indx]={ ...dsetn, id: destId };
    
}

export const deleteDestination= (destId)=>{
    const indx=destinations.findIndex(d=>d.id===destId);
    //destinations.splice(indx,1);
    
    const res = destinations.filter(d => d.id !== destId);
    destinations = res;

}
