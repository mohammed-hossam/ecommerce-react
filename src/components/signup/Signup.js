import React, { useState } from 'react';
import './signup.scss';
import { auth, createUserinDataBase } from '../../firebase/firebase.utils';
import FormInput from '../formInput/FormInput';
import CustomButton from '../customButton/CustomButton';
import { connect } from 'react-redux';
import { signupStart } from '../../redux/user/userActions';
// i signedup with mohamedguitar@mh.com 478963214
function Signup({ signupStart }) {
  const [person, setPerson] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  async function handleSubmit(e) {
    const { displayName, email, password, confirmPassword } = person;
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('password dont match');
      return;
    }
    //action
    signupStart(person);
  }

  function handleChange(e) {
    const { name, value } = e.target;

    setPerson({ ...person, [name]: value });
  }

  return (
    <div className="sign-up ">
      <h2 className="title">I do not have a account</h2>
      <span>Sign up with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={person.displayName}
          handelChange={handleChange}
          label="displayName"
          required
        />
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
        <FormInput
          type="password"
          name="confirmPassword"
          value={person.confirmPassword}
          handelChange={handleChange}
          label="Confirm Password"
          required
        />

        <CustomButton type="submit">Sign Up</CustomButton>
      </form>
    </div>
  );
}

export default connect(null, { signupStart })(Signup);
