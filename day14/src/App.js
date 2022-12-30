import  Tab  from './component/Tab';
import './App.css';
import { Form } from './component/Form';
import Index from './component/Index';
import Nilesh from './component/Nilesh';
import RecipeReviewCard from './component/RecipeReviewCard';

function App() {
  return (
    <div className="App">
      <Form/>
      <RecipeReviewCard/>
      <Index/>
      <Nilesh/>
      <Tab/>
    </div>
    
  );
}

export default App;
