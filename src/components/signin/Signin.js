import React, { useState } from 'react';
import './signin.scss';
import FormInput from '../formInput/FormInput';
import CustomButton from '../customButton/CustomButton.js';
import {
  googleSignInStart,
  emailSignInStart,
} from '../../redux/user/userActions';
import { connect } from 'react-redux';

function Signin({ googleSignInStart, emailSignInStart }) {
  const [person, setPerson] = useState({ email: '', password: '' });

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      console.log(person);
      emailSignInStart(person);
    } catch (err) {
      console.log(err);
    }
  }
  function handleChange(e) {
    const { value, name } = e.target;
    setPerson({ ...person, [name]: value });
  }
  function handleGoogleLogin() {
    googleSignInStart();
  }
  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          value={person.email}
          handelChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={person.password}
          handelChange={handleChange}
          label="password"
          required
        />
        <CustomButton type="submit">Sign In</CustomButton>
        <CustomButton type="button" onClick={handleGoogleLogin} isGoogleSignin>
          Sign In with Google
        </CustomButton>
      </form>
    </div>
  );
}

export default connect(null, { googleSignInStart, emailSignInStart })(Signin);
