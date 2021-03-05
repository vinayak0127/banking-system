
import { MDBIcon, MDBSideNavCat, MDBSideNavNav, MDBSideNav, MDBSideNavLink, MDBContainer, MDBRow, MDBBtn } from 'mdbreact';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import CustomerInfo from './Components/CustomerInfo'
import NavbarPage from './Components/NavBarPage';
import FooterPage from './Components/FooterPage';
import Home from './Components/Home';
import Nav from './Components/Nav';
function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
        <Route  path ='/home'>
          <NavbarPage/>
          <Home/>
          <FooterPage/> 
        </Route>
        <Route  path ='/customerinfo'>
          <NavbarPage/>
          <CustomerInfo/>
          <FooterPage/> 
        </Route>
        <Route  path ='/'>
          <Nav/>
          <FooterPage/> 
        </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
