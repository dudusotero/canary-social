import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signIn } from '../../store/actions/authActions';

class SignIn extends React.Component {
  static propTypes = {
    authError: PropTypes.string,
    auth: PropTypes.instanceOf(Object).isRequired,
    signInMethod: PropTypes.instanceOf(Function).isRequired
  };

  static defaultProps = {
    authError: null
  };

  state = {
    email: '',
    password: ''
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { signInMethod } = this.props;
    signInMethod(this.state);
  };

  render() {
    const { authError, auth } = this.props;
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
            <button type="submit">Login</button>
            <div>{authError ? <p>{authError}</p> : null}</div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({ authError: state.auth.authError, auth: state.firebase.auth });

const mapDispatchToProps = dispatch => ({ signInMethod: creds => dispatch(signIn(creds)) });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
