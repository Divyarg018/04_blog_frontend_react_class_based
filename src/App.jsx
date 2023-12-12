import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Logout from './components/Logout';
import Signup from './components/Signup';
import Home from './components/Home';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoggedIn: false,
    }
  }
  render() {
    
    return (
      <>
       <Navbar isLoggedIn={this.state.isLoggedIn}/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/auth' element={<Login />}></Route>
          <Route path='/auth/logout' element={<Logout />}></Route>
          <Route path='/auth/signup' element={<Signup />}></Route>
        </Routes>
        <Footer />

      </>
    );
  }
}

