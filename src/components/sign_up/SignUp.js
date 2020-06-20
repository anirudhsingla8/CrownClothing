import React,{Component} from "react";
import './signUp.scss';
import FormInput from "../form_input/FormInput";
import CustomButton from "../custom_botton/CustomButton";
import {auth, createUserProfileDocument} from "../../firebase/firebase";


class SignUp extends Component{
    state={
        displayName:'',
        email:'',
        password:'',
        confirmPassword:''
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const { displayName,email,password,confirmPassword } =this.state;
        if(password !== confirmPassword){
            alert(`passwords don't match`)
            return;
        }
        try{
            const {user} = await auth.createUserWithEmailAndPassword(email,password);
            await createUserProfileDocument(user,{displayName})
            console.log('user successfully registered')
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        }catch (error) {
            console.error(error);
        }
    }

    handleChange = event => {
        const {name,value} = event.target;
        this.setState({
            ...this.state,
            [name]:value
        })
    }

    render() {
        const {displayName,email,password,confirmPassword} = this.state;
        return(
            <div className='sign-up'>
                <h2 className='title'>I do not have a account</h2>
                <span className='title'>SignUp with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        name='displayName'
                        type='text'
                        value={displayName}
                        label='display name'
                        handleChange={this.handleChange}
                        required/>
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
                    <FormInput
                        name='confirmPassword'
                        type='password'
                        value={confirmPassword}
                        label='Confirm Password'
                        handleChange={this.handleChange}
                        required/>
                    <div className='buttons'>
                        <CustomButton type='submit'>SIGN UP</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUp;