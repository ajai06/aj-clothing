import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from "../custom-button/custom-button.component";

import './sign-in.styles.scss';

import  { signInWithGoogle } from '../../firebase/firebase.utils';


class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email: '', password: '' })
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({[name]: value})
    }

    render() {
        return(
            <div className="sign-in">
                <h2>I already have an acccount</h2>
                <span>Sign in with your email and password</span>

                <form action="" onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" value={this.state.email} required handleChange={this.handleChange} label="email"/>
                    {/* <label htmlFor="">Email</label> */}

                    <FormInput name="password" type="password" value={this.state.password} required handleChange={this.handleChange} label="password"/>
                    {/* <label htmlFor="">Password</label> */}

                    <div className="buttons"> 
                    <CustomButton type="submit" >Sign in</CustomButton>
                    <CustomButton type="button" isGoogleSignIn onClick={signInWithGoogle}>{''}Sign in with Google{''}</CustomButton>
                    </div>

                </form>
            </div>
        )
    }
}

export default SignIn
