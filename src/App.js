
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Pages/Shared/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Pages/Shared/Footer/Footer'
import Banner from './Pages/Home/Banner/Banner';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
      <Switch>
        <Route path="/about">
          {/* <About /> */}
        </Route>
        <Route path="/users">
          {/* <Users /> */}
        </Route>
        <Route path="/">
            {/* <Home /> */}
            <Banner></Banner>
        </Route>
        </Switch>
        <Footer/>
    </Router >
    </div>
  );
}

export default App;
