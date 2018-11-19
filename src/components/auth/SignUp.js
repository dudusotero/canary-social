import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/authActions';

class SignUp extends React.Component {
  static propTypes = {
    authError: PropTypes.string,
    auth: PropTypes.instanceOf(Object).isRequired,
    signUpMethod: PropTypes.instanceOf(Function).isRequired
  };

  static defaultProps = {
    authError: null
  };

  state = {
    email: '',
    password: '',
    name: '',
    username: ''
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { signUpMethod } = this.props;
    signUpMethod(this.state);
  };

  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input type="email" id="email" placeholder="Email" onChange={this.handleChange} />
          </div>
          <div>
            <input
              type="password"
              id="password"
              placeholder="Password"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input type="text" id="name" placeholder="Name" onChange={this.handleChange} />
          </div>
          <div>
            <input type="text" id="username" placeholder="Username" onChange={this.handleChange} />
          </div>
          <div>
            <button type="submit">Login</button>
            <div>{authError ? <p>{authError}</p> : null}</div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({ authError: state.auth.authError, auth: state.firebase.auth });

const mapDispatchToProps = dispatch => ({ signUpMethod: creds => dispatch(signUp(creds)) });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
