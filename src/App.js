// import logo from './logo.svg';
import './App.css';
// import HelloFromFunction, { SayHello2 as HelloFromArrowFunction } from './Lessons/0500-Functional Component';
// import HelloFromClass from './Lessons/0600-Class Component';
// import HelloByCreateElement from './Lessons/0800-CreateElement';
// import HelloByProps from './Lessons/0900-Props'
// import HelloByPropsChildren from './Lessons/0901-PropChildren'
// import HelloByPropsInClass from './Lessons/0902-PropsInClass'
// import HelloFromStateClass from './Lessons/1000-State';
// import HandleButtonClick from './Lessons/1001-HandleButtonClick';
import Counter from './Lessons/1100-setStateAsync';

function App() {
  return (
    <div className="App">
     {/* <h1>Explicit Hello from within the app page</h1>
     <HelloFromFunction></HelloFromFunction>
     <HelloFromArrowFunction></HelloFromArrowFunction>
     <HelloFromClass></HelloFromClass>
     <HelloByCreateElement></HelloByCreateElement>
     <HelloByProps name='Mohammad'></HelloByProps>
     <HelloByPropsChildren>
       <p>Mohammad</p>
       <span>Ala</span>
       Abba$
       <br/>
       <button>Save</button>
     </HelloByPropsChildren>
     <HelloByPropsInClass name='Mohammad'/>
     <HelloFromStateClass /> 
     <HandleButtonClick /> */}
     <Counter/>
    </div>
  );
}

export default App;
