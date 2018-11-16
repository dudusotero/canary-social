import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { withStyles } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import { Button } from '@material-ui/core';
import HomeRounded from '@material-ui/icons/HomeRounded';
import FlashOnRounded from '@material-ui/icons/FlashOnRounded';
import NotificationsRounded from '@material-ui/icons/NotificationsRounded';
import ProfilePicture from '../commons/ProfilePicture';

const styles = theme => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.grey[200],
    boxShadow: theme.shadows[1]
  },
  container: {
    width: '100%',
    maxWidth: 1190,
    alignSelf: 'center',
    padding: `0 ${theme.spacing.unit / 2}px`
  },
  grow: {
    flexGrow: 1
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  bootstrapRoot: {
    flex: 1,
    'label + &': {
      marginTop: theme.spacing.unit * 3
    }
  },
  bootstrapInput: {
    marginLeft: theme.spacing.unit / 2,
    borderRadius: 20,
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: theme.spacing.unit - 4,
    fontWeight: 'bolder',
    padding: `5px ${theme.spacing.unit - 4}px`,
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)'
    },
    marginRight: theme.spacing.unit
  },
  bolder: {
    fontWeight: 'bolder'
  },
  menuIcon: {
    marginRight: theme.spacing.unit / 2 - 2
  }
});

class Navbar extends React.Component {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null
  };

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  render() {
    const { anchorEl, mobileMoreAnchorEl } = this.state;
    const { classes } = this.props;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
      </Menu>
    );

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={this.handleMobileMenuClose}
      >
        <MenuItem>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <MailIcon />
            </Badge>
          </IconButton>
          <p>Messages</p>
        </MenuItem>
        <MenuItem>
          <IconButton color="inherit">
            <Badge badgeContent={11} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <p>Notifications</p>
        </MenuItem>
        <MenuItem onClick={this.handleProfileMenuOpen}>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      </Menu>
    );

    return (
      <React.Fragment>
        <AppBar position="fixed" className={classes.root}>
          <Toolbar className={classes.container}>
            <div className={classes.sectionDesktop}>
              <Button>
                <HomeRounded className={classes.menuIcon} />
                <Typography variant="body1" className={classes.bolder}>
                  Home
                </Typography>
              </Button>
              <Button>
                <FlashOnRounded />
                <Typography variant="body1" className={classes.bolder}>
                  Moments
                </Typography>
              </Button>
              <Button>
                <NotificationsRounded />
                <Typography variant="body1" className={classes.bolder}>
                  Notifications
                </Typography>
              </Button>
            </div>
            <InputBase
              id="bootstrap-input"
              classes={{ root: classes.bootstrapRoot, input: classes.bootstrapInput }}
              placeholder="Search Tweet"
            />
            <ProfilePicture
              src="https://pbs.twimg.com/profile_images/3212607592/436352c4ff500dd5d4427a66d53f9531_400x400.jpeg"
              size="smaller"
            />
            <div className={classes.sectionMobile}>
              <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen}>
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMenu}
        {renderMobileMenu}
      </React.Fragment>
    );
  }
}

Navbar.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired
};

export default withStyles(styles)(Navbar);
