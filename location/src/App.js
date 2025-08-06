import logo from './logo.svg';
import Location from './components/Location';
import './App.css';

function App() {
  const initLocs=["Paris","London","New York"];
  return(
    <Location locs={initLocs}/>
  );
}

export default App;
