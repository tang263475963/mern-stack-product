import React from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import { Container } from 'reactstrap';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import Home from './components/Home';
import Content from './components/Content';
import Products from './components/Products';
import Profile from './components/Profile';
import Users from './components/Users';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <div> 
      <Header />
      <Container fluid={true}>
        <Route path="/" exact={true} component={Home} />
        <Route path="/about" component={About} />
        <Route path="/Content" component={Content} />
        <Route path="/profile" component={Profile} />
        <Route path="/users" component={Users} />
        <Route path="/products" component={Products} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </Container>
      <Footer />
    </div>
  );
}

export default App;