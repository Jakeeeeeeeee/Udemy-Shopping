import React from 'react';
import Button from '../../../../components/Button';
import Input from '../../../../components/Input';
import './signIn.styles.scss';
import { auth, signInWithGoogle } from '../../../../../firebase/firebase.utils';

class SignIn extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      email: '',
      password: '',
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email:'', password:'' });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  }

  render() {
    return(
      <div className="sign-in">
        <h2 className="title">I already have account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <Input 
            name="email" 
            type="email" 
            label="Email"
            value={this.state.email} 
            handleChange={this.handleChange}
            required 
          />

          <Input 
            name="password" 
            type="password"
            label="Password" 
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />

          <div className="buttons">
            <Button type="submit">Sign In</Button>
            <Button
              type="button" 
              onClick={signInWithGoogle} 
              isGoogleSignIn
            >
              Sign In With Google
            </Button>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn;