import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import ATM from './components/ATM';
import { toggleAtm } from './redux/atmSlice';

function App() {
  const dispatch = useDispatch()
  const {showAtm} = useSelector((state) => state.atm)

  const getAtm = () => {
    dispatch(toggleAtm())
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>ATM</h1>
        <button onClick={getAtm}>{showAtm ? "Close ATM" : "Open ATM"}</button>
        {showAtm && <ATM/>}
      </header>
    </div>
  );
}

export default App;
