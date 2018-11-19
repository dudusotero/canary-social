import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { Paper, TextField, Button, Tooltip } from '@material-ui/core';
import DoneOutlineOutlined from '@material-ui/icons/DoneOutlineOutlined';
import ProfilePicture from '../commons/ProfilePicture';

const styles = theme => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing.unit,
      paddingTop: theme.spacing.unit * 5
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing.unit * 3,
      padding: 0
    },
    backgroundColor: theme.palette.grey[100]
  },
  container: {
    maxWidth: 1190
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    '& > div': {
      marginBottom: theme.spacing.unit,
      '&:last-child': {
        marginBottom: 0
      }
    }
  },
  paper: {
    display: 'flex',
    flexDirection: 'column'
  },
  profileContainer: {
    position: 'relative',
    marginBottom: 112
  },
  profileBg: {
    width: '100%',
    height: 256
  },
  avatar: {
    display: 'flex',
    '& .profile-picture': {
      display: 'flex',
      width: '100%',
      justifyContent: 'center',
      position: 'absolute',
      transform: 'translateY(-112px)'
    }
  },
  form: {
    display: 'flex',
    '& > div': {
      flex: 1,
      margin: theme.spacing.unit
    },
    '& > button': {
      margin: theme.spacing.unit
    }
  }
});

class Configurations extends React.Component {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
    auth: PropTypes.instanceOf(Object).isRequired,
    profile: PropTypes.instanceOf(Object).isRequired
  };

  state = {
    name: '',
    username: '',
    avatar: '',
    background: ''
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleKeyPress = e => {
    if (e.key === 'Enter' && e.target.value) {
      const { updateProfile } = this.props;
      updateProfile(this.state);
      this.setState({
        [e.target.id]: ''
      });
    }
  };

  render() {
    const { name, username, avatar, background } = this.state;
    const { classes, auth, profile } = this.props;

    const backgroundStyle = {
      background: `url(${profile.background}) no-repeat center center / cover`
    };

    if (!auth.uid) {
      return <Redirect to="/signin" />;
    }

    return (
      <div className={classes.root}>
        <Grid container spacing={16} className={classes.container}>
          <Grid item xs className={classes.item}>
            <Paper elevation={0} className={classes.paper}>
              <div className={classes.profileContainer}>
                <div className={classes.profileBg} style={backgroundStyle} />
                <div className={classes.avatar}>
                  <div className="profile-picture">
                    <ProfilePicture src={profile.avatar} size="larger" />
                  </div>
                </div>
              </div>
              <form className={classes.form} autoComplete="off">
                <TextField id="name" label="Name" />
                <TextField id="username" label="Username" />
                <Tooltip title="Update profile" placement="top">
                  <Button variant="fab" color="primary">
                    <DoneOutlineOutlined />
                  </Button>
                </Tooltip>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({ auth: state.firebase.auth, profile: state.firebase.profile });

const mapDispatchToProps = dispatch => ({
  updateProfile: user => dispatch()
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withStyles(styles)
)(Configurations);
