import './App.css';
import Home from './component/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import About from './component/About';
import Contact from './component/Contact';
import Blog from './component/Blog';
import Service from './component/Service';

function App() {
  return (
    <div className="App">

    <BrowserRouter>
    <Home/>
    <Routes>
     
      <Route exact path='/Blog' element={<Blog/>}/>
      <Route exact path='/About' element={<About/>}/>
      <Route exact path='/Contact' element={<Contact/>}/>
      <Route exact path='/Service' element={<Service/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
