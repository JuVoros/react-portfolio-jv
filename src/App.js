import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container';
import Footer from "./components/footer";
import AboutMe from './pages/AboutMe/index';
import Portfolio from './pages/Portfolio/index';
import Contact from './pages/Contact/index';
import Resume from './pages/Resume/index';
import './App.css';

function App() {
return (
    <Router>
    {/* Navbar Here */}
<Navbar className="navbar">
  <Container className="nav-container">
    <Navbar.Brand className="navTitle">Julian Voros</Navbar.Brand>
      <Nav className="nav">
        <Link to="/" className="navLink">About-Me</Link>
        <Nav.Link href="/Portfolio" className="navLink" >Portfolio</Nav.Link>
        <Nav.Link href="/Resume" className="navLink">Resume</Nav.Link>
        <Link to="/Contact" className="navLink">Contact</Link>
      </Nav>
  </Container>
</Navbar>
{/* Footer */}
    

{/* Routes To Pages */}
<Switch>
  <Route exact path="/">
    <AboutMe/>
  </Route>
  <Route exact path="/Portfolio">
    <Portfolio/>
  </Route>
  <Route exact path="/Resume">
    <Resume/>
  </Route>
  <Route exact path="/Contact">
    <Contact/>
  </Route>
  

</Switch>
<Footer/>
</Router>
);
}
// Export
export default App;

