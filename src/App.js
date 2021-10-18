
import { BrowserRouter,Switch ,Route} from 'react-router-dom';
import './App.css';
import Banner from './Components/Pages/Home/Banner/Banner';
import Home from './Components/Pages/Home/Home/Home';
import Scedule from './Components/Pages/Home/Scedule/Scedule';
import Testimonial from './Components/Pages/Home/Testimonial/Testimonial';
import Header from './Components/Pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">


      <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path ='/'>
          <Home></Home>
        </Route>
      </Switch>
      
      </BrowserRouter>
     
     
    </div>
  );
}

export default App;
