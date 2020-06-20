import React from "react";
import './signInsignUpPage.scss';
import SignIn from "../../components/sign_in/SignIn";
import SignUp from "../../components/sign_up/SignUp";

const SignInSignUpPage = () => {
    return(
        <div className='sign-in-sign-up'>
            <SignIn/>
            <SignUp/>
        </div>
    )
}

export default SignInSignUpPage;
