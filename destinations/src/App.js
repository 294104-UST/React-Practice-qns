import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AddDestination from './components/AddDestination';
import ViewDestination from './components/ViewDestination';
import { EditDestination } from './components/EditDestination';
function App() {
  return(
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/AddDestination" element={<AddDestination />} />
    <Route path='viewDestn' element={<ViewDestination/>}/>
    <Route path='/EditDestination' element={<EditDestination/>}/>
    {/* <Route path='/EditDestination/:id' element={<EditDestination/>}/> */}
  </Routes>
  );
  
}

export default App;
