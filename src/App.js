
import { BrowserRouter,Switch ,Route} from 'react-router-dom';
import './App.css';
import Booking from './Components/Pages/Booking/Booking';
import Doctores from './Components/Pages/Doctores/Doctores';
import Banner from './Components/Pages/Home/Banner/Banner';
import Home from './Components/Pages/Home/Home/Home';
import Scedule from './Components/Pages/Home/Scedule/Scedule';
import Testimonial from './Components/Pages/Home/Testimonial/Testimonial';
import Register from './Components/Pages/Register/Register';
import Footer from './Components/Pages/Shared/Footer/Footer';
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
        <Route  path ='/home'>
          <Home></Home>
        </Route>
        <Route  path ='/doctor'>
        <Doctores></Doctores>
        </Route>
        <Route  path ='/booking'>
        <Booking></Booking>
        </Route>
      </Switch>
       <Footer></Footer>
      </BrowserRouter>
     
     
    </div>
  );
}

export default App;
