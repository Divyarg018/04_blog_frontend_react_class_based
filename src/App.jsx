import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Logout from './components/Logout';
import Signup from './components/Signup';
import Home from './components/Home';
import AddBlogs from './components/AddBlogs';
import Blogs from './components/Blogs';
import UserBlogs from './components/UserBlogs';
import BlogDetail from './components/BlogDetail';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    }
  }
  render() {

    return (
      <>
        <Navbar isLoggedIn={this.state.isLoggedIn} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/auth' element={<Login />} />
          <Route path='/auth/logout' element={<Logout />} />
          <Route path='/auth/signup' element={<Signup />} />

          <Route path='/blogs' element={<Blogs />} />
          <Route path='/blog/add' element={<AddBlogs />} />
          <Route path='/myBlogs' element={<UserBlogs />} />
          <Route path='/myBlogs/:id' element={<BlogDetail />} />
        </Routes>
        <Footer />

      </>
    );
  }
}

