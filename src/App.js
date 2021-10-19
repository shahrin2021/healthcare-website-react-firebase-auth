
import { BrowserRouter,Switch ,Route} from 'react-router-dom';
import './App.css';
import Booking from './Components/Pages/Booking/Booking';
import Doctores from './Components/Pages/Doctores/Doctores';
import Banner from './Components/Pages/Home/Banner/Banner';
import Home from './Components/Pages/Home/Home/Home';
import Scedule from './Components/Pages/Home/Scedule/Scedule';
import Testimonial from './Components/Pages/Home/Testimonial/Testimonial';
import Login from './Components/Pages/Login/Login';
import Register from './Components/Pages/Register/Register';
import Services from './Components/Pages/Services/Services';
import ServicesDetails from './Components/Pages/ServicesDetails/ServicesDetails';
import Footer from './Components/Pages/Shared/Footer/Footer';
import Header from './Components/Pages/Shared/Header/Header';
import AuthProvider, { AuthContext } from './Context/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">

    <AuthProvider>
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
        <PrivateRoute  path ='/booking'>
        <Booking></Booking>
        </PrivateRoute>
        <Route  path ='/register'>
        <Register></Register>
        </Route>
        <Route  path ='/services'>
        <Services></Services>
        </Route>
        <Route exact path ='/service/:serviceId'>
        <ServicesDetails></ServicesDetails>
        </Route>
        <Route  path ='/login'>
        <Login></Login>
        </Route>
      </Switch>
       <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
     
    </div>
  );
}

export default App;
