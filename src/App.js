import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AddNew from './Pages/AddNew/AddNew';
import AuthProvider from './Pages/AuthProvider/AuthProvider';
import Booking from './Pages/Booking/Booking';
import Footer from './Pages/Footer/Footer';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import ManageBooking from './Pages/ManageBooking/ManageBooking';
import MyBook from './Pages/MyBook/MyBook,';
import NotFound from './Pages/NotFound/NotFound';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  },[])
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <PrivateRoute path='/booking/:bookingId'>
            <Booking />
          </PrivateRoute>
          <PrivateRoute path='/manageBooking'>
            <ManageBooking />
          </PrivateRoute>
          <PrivateRoute path='/addNew'>
            <AddNew />
          </PrivateRoute>
          <PrivateRoute path='/myBook'>
            <MyBook />
          </PrivateRoute>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
