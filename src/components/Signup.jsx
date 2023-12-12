import React, { Component } from 'react';

export class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {
                name: "",
                email: "",
                password: ""
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
        e.preventDefault()
        console.log(this.state.inputs);
    }
    render() {
        return (
            <div>Signup</div>
        )
    }
}

export default Signup;