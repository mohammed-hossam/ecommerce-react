import React from 'react';
import './signin-signup.scss';
import Signin from '../../components/signin/Signin';
import Signup from '../../components/signup/Signup';

function SigninAndSignup() {
  return (
    <div className="sign-in-and-sign-up">
      <Signin />
      <Signup />
    </div>
  );
}

export default SigninAndSignup;
