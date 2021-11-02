
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Shared/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Shared/Footer/Footer'
import Banner from './Pages/Home/Banner/Banner';
import Articles from './Pages/Home/Articles/Articles';
import Login from './Pages/Login/Login';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    // <div className="App">
     <AuthProvider>
      <Router>
        <Header />
      <Switch>
        <Route path="/about">
          {/* <About /> */}
        </Route>
        <Route path="/users">
          {/* <Users /> */}
        </Route>
        <Route path="/">
            {/* <Home /> */}
            <Login />
            <Banner></Banner>
            <Articles></Articles>
            
        </Route>
        </Switch>
        <Footer/>
    </Router >
    </AuthProvider>
  );
}

export default App;
