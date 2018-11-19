import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Navbar = props => {
  const { auth, profile } = props;
  const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;

  return (
    <nav>
      <div>
        <Link to="/">Canary Social</Link>
        {links}
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  auth: PropTypes.instanceOf(Object).isRequired,
  profile: PropTypes.instanceOf(Object).isRequired
};

const mapStateToProps = state => ({ auth: state.firebase.auth, profile: state.firebase.profile });

export default connect(mapStateToProps)(Navbar);
