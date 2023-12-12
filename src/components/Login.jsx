import React, { Component } from 'react';

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {
                email: "empty",
                password: "empty"
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState((prevState) => ({
            inputs: {
                ...prevState.inputs,
                [e.target.name]: e.target.value,
            }
        }))
    }
    async sendRequest() {
        const res = await axios.post(`http://localhost:5000/api/user/login`, {
            name: this.state.inputs.name,
            email: this.state.inputs.email,
            password: this.state.inputs.password,
        }).catch(err => {
            if (err.response.request.status === 404) {
                alert("User does not exist");
                this.setState(false);
            } else if (err.response.request.status === 400) {
                alert("Invalid password");
                this.setState(false);
            }
        })

        let data = null;
        if (res) {
            data = await res.data;
        }
        return data;
    }
    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state.inputs);
        this.sendRequest("login")
            .then(data => localStorage.setState("userID", data.user._id))
            .catch(err => console.log("There is mistake in Login"))

    }

    render() {
        return (
            < >
                <Header banner="/assets/img/post.jpg" heading="Login Page" subHeading="Login User to view blogs" />

                <main className="mb-4">
                    <div className="container px-4 px-lg-5">
                        <div className="row gx-4 gx-lg-5 justify-content-center">
                            <div className="col-md-10 col-lg-8 col-xl-7">

                                <div className="my-5">
                                    <form action="/auth" method="POST" onSubmit={this.handleSubmit}>

                                        <div className="form-floating">
                                            <input className="form-control" id="email" name="email" type="email" onChange={this.handleChange} value={this.state.email}
                                                placeholder="Type your registed email..." required />
                                            <label htmlFor="email">Email</label>
                                        </div><br />
                                        <div className="form-floating">
                                            <input className="form-control" id="password" name="password" type="password" onChange={this.handleChange} value={this.state.password}
                                                placeholder="Type the password..." required />
                                            <label htmlFor="password">Password</label>
                                        </div><br />
                                        {/* Submit Button*/}
                                        <div style={{ textAlign: 'center' }}>
                                            <button className="btn text-uppercase" id="submitButton" type="submit" style={{ color: 'orange' }}>Submit</button>
                                        </div>

                                        <span style={{ 'color': '#dc3545', 'fontWeight': 'bold', 'fontStyle': 'oblique' }}>
                                            &ensp; &ensp;
                                        </span>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </>
        )
    }
}

export default Login;