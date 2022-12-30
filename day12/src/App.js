
import './App.css';
import { CardCollection } from './component/CardCollection';
import { Main1 } from './component/Main1';
import { MiniCard } from './component/MiniCard';
import Navbar1 from './component/Navbar1';

function App() {
  return (
    <div>
      <Navbar1/>
     <Main1/> 
     <CardCollection/>
     <MiniCard/>
    </div>
  );
}

export default App;
