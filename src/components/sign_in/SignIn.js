import React, {Component} from "react";
import './signIn.scss';
import FormInput from "../form_input/FormInput";
import CustomButton from "../custom_botton/CustomButton";
import {signInWithGoogle} from "../../firebase/firebase";

class SignIn extends Component{
    state={
        'email':'',
        'password':''
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({
            email:'',
            password:''
        })
    }

    handleChange = event => {
        const {value,name} = event.target;
        this.setState({
            ...this.state,
            [name]:value
        })
    }

    render() {
        const {email,password} = this.state;
        return(
            <div className='sign-up'>
                <h2 className='title'>I already have an account</h2>
                <span className='title'>SignIn with you email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        type='email'
                        value={email}
                        label='email'
                        handleChange={this.handleChange}
                        required/>
                    <FormInput
                        name='password'
                        type='password'
                        value={password}
                        label='password'
                        handleChange={this.handleChange}
                        required/>
                    <div className='buttons'>
                        <CustomButton type='submit'>Submit Form</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>SignIn with Google</CustomButton>
                    </div>

                </form>
            </div>
        )
    }
}

export default SignIn;