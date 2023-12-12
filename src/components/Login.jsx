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

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state.inputs);
    }


    render() {
        return (
            <div>
                Login
            </div>
        )
    }
}

export default Login;