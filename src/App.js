import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Departments from './components/Departments/Departments';
import Doctors from './components/Doctors/Doctors';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './context/AuthProvider';
import SingleService from './components/SignleService/SingleService';
import SingleServiceDetails from './components/SignleService/SingleServiceDetails';
import Service from './components/Service/Service';
import Services from './components/Services/Services';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/departments">
              <Departments />
            </Route>
            <Route exact path="/doctors">
              <Doctors />
            </Route>
            <Route exact path="/services">
              <Services />
            </Route>
            <Route exact path="/service/:id">
              <SingleService />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
