import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {googleSignInStart, EmailSignInStart} from "../../redux/user/user.actions";
import {connect} from "react-redux"

import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer
} from './sign-in.styles';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    const {EmailSignInStart} = this.props;
    const { email, password } = this.state;
    EmailSignInStart(email, password)
  
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const {googleSignInStart} = this.props;
    return (
      <SignInContainer>
        <SignInTitle>I already have an account</SignInTitle>
        <span>Sign in with your email and password</span>

        {/* Forms for email and passowrd signing in */}
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            required
          />
          <ButtonsBarContainer>
          {/* Submits our email and passowrd forms */}
            <CustomButton type='submit'> Sign in </CustomButton>
          {/* Fires the googleSignInStart action, starts the saga and redux flow */}
            <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </ButtonsBarContainer>
        </form>
      </SignInContainer>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: ()=> dispatch(googleSignInStart()), 
  EmailSignInStart: (email, password) => dispatch(EmailSignInStart({email, password}))
})

export default connect(null,mapDispatchToProps )(SignIn);