import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Blog from './Blog';
import axios from 'axios';

export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blogs: [],
        }
        this.sendRequest = this.sendRequest.bind(this);
    }

    async sendRequest() {
        const res = await axios.get(`http://localhost:5000/api/blog`)
            .catch(err => console.log(err))

        const data = await res.data;
        //console.log(data);
        return data;
    }
    async componentDidMount() {
        this.sendRequest().then(data => this.setState(data));
        //console.log(data.blogs);
        //this.setState({ blogs: data.blogs });
    }
    render() {
        return (
            <>
                <header className="masthead" style={{ "backgroundImage": "url('assets/img/home.jpg')" }}>
                    <div className="container position-relative px-4 px-lg-5">
                        <div className="row gx-4 gx-lg-5 justify-content-center">
                            <div className="col-md-10 col-lg-8 col-xl-7">
                                <div className="page-heading">
                                    <h1>Filmy Blog</h1>
                                    <span className="subheading">Welcome to Loka...Chitraloka</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">

                            <div className="d-flex justify-content-end mb-4"><Link className="btn btn-primary text-uppercase"
                                to="/">Older Posts →</Link></div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Home;