import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';
import ProfilePicture from '../commons/ProfilePicture';

const SignedInLinks = props => {
  const { signOutMethod, profile } = props;
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/configurations">Configurations</NavLink>
        </li>
        <li>
          <span role="presentation" onClick={signOutMethod}>
            Log Out
          </span>
        </li>
      </ul>
      <ProfilePicture size="smaller" src={profile.avatar} initialLetter={profile.initialLetter} />
    </div>
  );
};

SignedInLinks.propTypes = {
  signOutMethod: PropTypes.instanceOf(Function).isRequired,
  profile: PropTypes.instanceOf(Object).isRequired
};

const mapDispatchToProps = dispatch => ({
  signOutMethod: () => dispatch(signOut())
});

export default connect(
  null,
  mapDispatchToProps
)(SignedInLinks);
