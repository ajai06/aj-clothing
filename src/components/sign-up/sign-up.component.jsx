import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';

class  SignUp extends React.Component{
    constructor(props) {
        super(props)
    
        this.state = {
             displayName : '',
             email : '',
             password : '',
             confirmPassword : ''
        }
    }

    handleSubmit  = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if(password !== confirmPassword ){
            alert("password don't match");
            return;
        }

        try {
            const { user } =  await auth.createUserWithEmailAndPassword(email,password);
            await createUserProfileDocument(user, { displayName })

            this.setState({
                displayName : '',
                email : '',
                password : '',
                confirmPassword : ''
            })
        } catch(error) {
            console.log(error)
        }
    }

    handleChange = async event => {
        event.preventDefault();
        const { name, value } = event.target;

        this.setState({
            ...this.state, [name] : value
        })
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className="sign-up">
                <h2 className="title">I do not have a account</h2>
                <span>Sign up with your email and password</span>

                <form action="" onSubmit={this.handleSubmit}>
                    <FormInput name="displayName" type="text" value={displayName} label="Display Name" required onChange={this.handleChange}/>
                    <FormInput name="email" type="email" value={email} label="Email" required onChange={this.handleChange}/>
                    <FormInput name="password" type="password" value={password} label="Password" required onChange={this.handleChange}/>
                    <FormInput name="confirmPassword" type="password" value={confirmPassword} label="Confirm Password" required onChange={this.handleChange}/>

                    <CustomButton type="submit">SIGN UP</CustomButton>
                </form>

            </div>
        )
    }
    
}

export default SignUp
