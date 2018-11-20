import React from 'react';
import { PropTypes } from 'prop-types';
import { NavLink } from 'react-router-dom';
import { MenuItem } from '@material-ui/core';

const SignedOutLinks = props => {
  const { handleClose } = props;
  return (
    <React.Fragment>
      <NavLink to="signup">
        <MenuItem onClick={handleClose}>Signup</MenuItem>
      </NavLink>
      <NavLink to="/signin">
        <MenuItem onClick={handleClose}>Login</MenuItem>
      </NavLink>
    </React.Fragment>
  );
};

SignedOutLinks.propTypes = {
  handleClose: PropTypes.instanceOf(Function).isRequired
};

export default SignedOutLinks;
