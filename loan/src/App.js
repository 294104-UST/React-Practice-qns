import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import LoanForm from './Components/LoanForm';
import WelcomePage from './Components/Welcome';
import ErrorPage from './Components/Error';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoanForm/>}/>
      <Route path="/welcome" element={<WelcomePage/>}/>
      <Route path="/error" element={<ErrorPage/>}/>
    </Routes>
  );
}

export default App;
