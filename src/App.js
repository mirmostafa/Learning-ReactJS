import logo from './logo.svg';
import './App.css';
import SayHello, { SayHello2 } from './Lessons/0500-Functional Component';
import Hello from './Lessons/0600-Class Component';

function App() {
  return (
    <div className="App">
     <h1>Explicit Hello from within the app page</h1>
     <SayHello></SayHello>
     <SayHello2></SayHello2>
     <Hello></Hello>
    </div>
  );
}

export default App;
