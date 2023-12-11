import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';

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
        <header>
          <Header isLoggedIn={this.state.isLoggedIn} />
        </header>
        <main>
          <Routes>
            <Route path='/auth' element={<Login />} />
            <Route path='/blogs' element={<Blogs />} />
            <Route path='/myBlogs' element={<UserBlogs />} />
            <Route path='/myBlogs/:id' element={<BlogDetail />} />
            <Route path='/blogs/add' element={<AddBlogs />} />
          </Routes>
        </main>
      </>
    );
  }
}

