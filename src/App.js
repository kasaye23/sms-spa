
import './App.css';
import Hi from './components/Class_comp';
import {Hello} from './components/Functional_comp';
import Wellcome from './components/jsx';
import Fullname from './components/props';
import Kello from './Component/functuinal-component';
function App() {
  return (
    <div className="App">
       {/* <Hello/> */}
      {/* <Hi/> */}
      {/* <Wellcome/> */}
      {/* <Fullname name="kassaye" Age="20">
        <p>This is my react world all are fine work amazing progress today</p>
         <button>Click me </button>
         <p>The easiest way to debug websites built with React is to install the React Developer Tools browser extension. It is available for several popular browsers:</p>
         </Fullname>
      <Fullname name="muse"Age="29">
        <h6>wow kassaye </h6>
      </Fullname>
      <Fullname name="aron"Age="24"/> */}
      <Kello></Kello>
    </div>
  );
}

export default App;
