import logo from './logo.svg';
import './App.css';
import SayHello, { SayHello2 } from './Components/FuncComponent';

function App() {
  return (
    <div className="App">
     <h1>Explicit Hello from within the app page</h1>
     <SayHello></SayHello>
     <SayHello2></SayHello2>
    </div>
  );
}

export default App;
