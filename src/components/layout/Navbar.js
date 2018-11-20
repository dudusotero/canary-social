import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withStyles, AppBar, Toolbar, Typography, IconButton, Menu } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

class Navbar extends React.Component {
  static propTypes = {
    auth: PropTypes.instanceOf(Object).isRequired,
    profile: PropTypes.instanceOf(Object).isRequired,
    classes: PropTypes.instanceOf(Object).isRequired
  };

  state = {
    anchorEl: null
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { auth, profile, classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    const links = auth.uid ? (
      <SignedInLinks profile={profile} handleClose={this.handleClose} />
    ) : (
      <SignedOutLinks handleClose={this.handleClose} />
    );

    return (
      <div className={classes.root}>
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Canary Social
            </Typography>
            <div>
              <IconButton
                aria-owns={open ? 'menu-appbar' : undefined}
                aria-haspopup="true"
                onClick={this.handleMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                open={open}
                onClose={this.handleClose}
              >
                {links}
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const mapStateToProps = state => ({ auth: state.firebase.auth, profile: state.firebase.profile });

export default compose(
  connect(mapStateToProps),
  withStyles(styles)
)(Navbar);
