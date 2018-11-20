import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import updateUser from '../../store/actions/userActions';
import FormConfigurations from './FormConfigurations';

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
  }
});

class Configurations extends React.Component {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
    auth: PropTypes.instanceOf(Object).isRequired,
    profile: PropTypes.instanceOf(Object).isRequired,
    updateUserMethod: PropTypes.instanceOf(Function).isRequired
  };

  state = {
    modalProfilePicture: { open: false }
  };

  handleUpdateUser = profile => {
    const { updateUserMethod, history } = this.props;
    updateUserMethod(profile);
    history.push('/');
  };

  handleOpenProfilePicture = () => {
    this.setState({ modalProfilePicture: { open: true } });
  };

  handleCloseProfilePicture = () => {
    this.setState({ modalProfilePicture: { open: false } });
  };

  render() {
    const { modalProfilePicture } = this.state;
    const { classes, auth, profile } = this.props;

    if (!auth.uid) {
      return <Redirect to="/signin" />;
    }

    if (profile.isEmpty) {
      return (
        <div className={classes.root}>
          <CircularProgress />
        </div>
      );
    }

    return (
      <div className={classes.root}>
        <Grid container spacing={16} className={classes.container}>
          <Grid item xs className={classes.item}>
            <Paper elevation={0} className={classes.paper}>
              <FormConfigurations
                {...{ profile }}
                handleUpdateUser={this.handleUpdateUser}
                modalProfilePicture={modalProfilePicture}
                handleOpenProfilePicture={this.handleOpenProfilePicture}
                handleCloseProfilePicture={this.handleCloseProfilePicture}
              />
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({ auth: state.firebase.auth, profile: state.firebase.profile });

const mapDispatchToProps = dispatch => ({
  updateUserMethod: user => dispatch(updateUser(user))
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withStyles(styles)
)(Configurations);
