
import { BrowserRouter,Switch ,Route} from 'react-router-dom';
import './App.css';
import About from './Components/Pages/About/About';
import Booking from './Components/Pages/Booking/Booking';
import Contact from './Components/Pages/Contact/Contact';
import Doctores from './Components/Pages/Doctores/Doctores';
import Banner from './Components/Pages/Home/Banner/Banner';
import Home from './Components/Pages/Home/Home/Home';
import Scedule from './Components/Pages/Home/Scedule/Scedule';
import Testimonial from './Components/Pages/Home/Testimonial/Testimonial';
import Login from './Components/Pages/Login/Login';
import Medicens from './Components/Pages/Madicens/Medicens';
import PageNotFount from './Components/Pages/PageNotfound/PageNotFount';
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
        <Route  path ='/about'>
          <About></About>
        </Route>
        <Route  path ='/doctor'>
        <Doctores></Doctores>
        </Route>
        <PrivateRoute  path ='/booking'>
        <Booking></Booking>
        </PrivateRoute>
        <PrivateRoute  path ='/medicen'>
       <Medicens></Medicens>
        </PrivateRoute>
        <Route  path ='/register'>
        <Register></Register>
        </Route>
        <Route  path ='/services'>
        <Services></Services>
        </Route>
        <PrivateRoute  path ='/service/:id'>
        <ServicesDetails></ServicesDetails>
        </PrivateRoute>
        <Route  path ='/login'>
        <Login></Login>
        </Route>
        <Route  path ='/contact'>
        <Contact></Contact>
        </Route>
        <Route exact path ='*'>
        <PageNotFount></PageNotFount>
        </Route>
      </Switch>
       <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
     
    </div>
  );
}

export default App;
