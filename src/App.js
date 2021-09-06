import logo from './logo.svg';
import './App.css';
import SayHello, { SayHello2 } from './Lessons/0500-Functional Component';
import Hello from './Lessons/0600-Class Component';
import CreateElementTest from './Lessons/0800-CreateElement';
import HelloProps from './Lessons/0900-Props'
import PropsChildren from './Lessons/0901-PropChildren'

function App() {
  return (
    <div className="App">
     <h1>Explicit Hello from within the app page</h1>
     <SayHello></SayHello>
     <SayHello2></SayHello2>
     <Hello></Hello>
     <CreateElementTest></CreateElementTest>
     <HelloProps name='Mohammad'></HelloProps>
     <PropsChildren>
       <p>Mohammad</p>
       <span>Ala</span>
       Abba$
     </PropsChildren>
    </div>
  );
}

export default App;
