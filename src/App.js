import logo from './logo.svg';
import './App.css';
import SayHello from './Components/FuncComponent';

function App() {
  return (
    <div className="App">
     <h1>Explicit Hello from within the app page</h1>
     <SayHello></SayHello>
    </div>
  );
}

export default App;
