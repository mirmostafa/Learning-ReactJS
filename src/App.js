// import logo from './logo.svg';
import './App.css';
import EventBinding from './Lessons/01400-EventBinding';
// import HelloFromFunction, { SayHello2 as HelloFromArrowFunction } from './Lessons/0500-Functional Component';
// import HelloFromClass from './Lessons/0600-Class Component';
// import HelloByCreateElement from './Lessons/0800-CreateElement';
// import HelloByProps from './Lessons/0900-Props'
// import HelloByPropsChildren from './Lessons/0901-PropChildren'
// import HelloByPropsInClass from './Lessons/0902-PropsInClass'
// import HelloFromStateClass from './Lessons/1000-State';
// import HandleButtonClick from './Lessons/1001-HandleButtonClick';
import Counter from './Lessons/1100-setStateAsync';
import CuncorrentCounter from './Lessons/1101-Cuncurrent';
import {Destructure1, Destructure2, Destructure3} from './Lessons/1200-Destructure';
import ButtonClickHandleFunc from './Lessons/1300-ButtonClickFunc';
import ButtonClickClass from './Lessons/1301-ButtonClickClass';

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
     {/* <Counter/>
     <CuncorrentCounter/> */}
     {/* <Destructure1 lName = 'Mohammad' fName = 'Mirmostafa'/>
     <Destructure2 lName = 'Mohammad' fName = 'Mirmostafa'/>
     <Destructure3 lName = 'Mohammad' fName = 'Mirmostafa'/> */}
     {/* <ButtonClickHandleFunc/>
     <ButtonClickClass/> */}
     <EventBinding/>
    </div>
  );
}

export default App;
