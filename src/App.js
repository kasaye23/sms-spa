
import './App.css';
import Hi from './components/Class_comp';
import {Hello} from './components/Functional_comp';
import Wellcome from './components/jsx';
import Fullname from './components/props';
function App() {
  return (
    <div className="App">
       {/* <Hello/> */}
      {/* <Hi/> */}
      {/* <Wellcome/> */}
      <Fullname name="kassaye" Age="20">
        <p>This is my react world all are fine work amazing progress today</p>
         <button>Click me </button>
         </Fullname>
      <Fullname name="muse"Age="29"/>
      <Fullname name="aron"Age="24"/>
    </div>
  );
}

export default App;
