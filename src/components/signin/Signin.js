import React, { useState } from 'react';
import './signin.scss';
import FormInput from '../formInput/FormInput';
import CustomButton from '../customButton/CustomButton.js';
import { auth, provider } from '../../firebase/firebase.utils.js';

function Signin() {
  const [person, setPerson] = useState({ email: '', password: '' });

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(person.email, person.password);
    } catch (err) {
      console.log(err);
    }
  }
  function handleChange(e) {
    const { value, name } = e.target;
    setPerson({ ...person, [name]: value });
  }
  function handleGoogleLogin() {
    auth.signInWithPopup(provider);
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

export default Signin;
