
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
      <Fullname name="kassaye" Age="20"/>
      <Fullname name="muse"Age="29"/>
      <Fullname name="aron"Age="24"/>
    </div>
  );
}

export default App;
