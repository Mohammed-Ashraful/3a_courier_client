import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Shared/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Shared/Footer/Footer'
import Login from './Pages/Login/Login';
import AuthProvider from './Context/AuthProvider';
import About from './Pages/Home/About/About';
import Services from './Pages/Home/Services/Services';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Contact from './Pages/Home/Contact/Contact';
import NotFound from './NotFound/NotFound';
import Home from './Pages/Home/Home/Home';
import MyOrder from './Pages/Home/MyOrder/MyOrder';
import AddService from './Pages/Home/AddService/AddService';
import Booking from './Pages/Home/Booking/Booking';
import ManageOrder from './Pages/Home/ManageOrder/ManageOrder';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>

            <Route path="/about">
              <About />
            </Route>

            <Route path="/login">
              <Login />
            </Route>

            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/orders">
              <MyOrder />
            </Route>
            <Route path="/allOrders">
              <ManageOrder/>
            </Route>
            <PrivateRoute path="/service">
              <Services />
            </PrivateRoute>
            <PrivateRoute path="/services/:id">
              <Booking></Booking>
            </PrivateRoute>

            <Route path="/addService">
              <AddService />
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>

          </Switch>
          <Footer />
        </Router >
      </AuthProvider>
    </div>
  );
}

export default App;
