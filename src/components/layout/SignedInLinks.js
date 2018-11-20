import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { MenuItem } from '@material-ui/core';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const SignedInLinks = props => {
  const { signOutMethod, handleClose } = props;

  const onClickSignOut = () => {
    signOutMethod();
    handleClose();
  };
  return (
    <React.Fragment>
      <NavLink to="/">
        <MenuItem onClick={handleClose}>Dashboard</MenuItem>
      </NavLink>
      <NavLink to="/configurations">
        <MenuItem onClick={handleClose}>Configurations</MenuItem>
      </NavLink>
      <MenuItem onClick={onClickSignOut}>Log Out</MenuItem>
    </React.Fragment>
  );
};

SignedInLinks.propTypes = {
  signOutMethod: PropTypes.instanceOf(Function).isRequired,
  handleClose: PropTypes.instanceOf(Function).isRequired
};

const mapDispatchToProps = dispatch => ({
  signOutMethod: () => dispatch(signOut())
});

export default connect(
  null,
  mapDispatchToProps
)(SignedInLinks);
