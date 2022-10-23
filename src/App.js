import './App.css';
import TimeoutComponent from './useTimeout/TimeoutComponent'
import DebounceComponent from './useDebounce/DebounceComponent';
import LocalStorage from './useLocalStorage/LocalStorageComponent';

function App() {
  return (
    <div className="App">
      <LocalStorage />
     {/* <TimeoutComponent /> */}
     {/* <DebounceComponent /> */}
    </div>
  );
}

export default App;
