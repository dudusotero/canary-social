import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ProfilePicture from '../commons/ProfilePicture';

const styles = theme => ({
  paper: {
    display: 'flex',
    flexDirection: 'column'
  },
  profileBg: {
    width: '100%',
    height: 95
  },
  profileContent: {
    display: 'flex',
    '& .profile-picture': {
      display: 'flex',
      width: '100%',
      justifyContent: 'center',
      position: 'absolute',
      transform: 'translateY(-38px)'
    }
  },
  contentChildLeft: {
    flex: 1,
    position: 'relative'
  },
  contentChildRight: {
    flex: 2,
    overflow: 'hidden'
  },
  bolder: {
    fontWeight: 'bolder'
  },
  profileInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    '& > div': {
      flex: 1,
      padding: theme.spacing.unit
    }
  }
});

const ProfileOverview = props => {
  const { classes, profile } = props;

  const backgroundStyle = {
    background: `url(${profile.background}) no-repeat center center / cover`
  };

  return (
    <Paper className={classes.paper} elevation={0}>
      <div className={classes.profileBg} style={backgroundStyle} />
      <div className={classes.profileContent}>
        <div className={classes.contentChildLeft}>
          <div className="profile-picture">
            <ProfilePicture src={profile.avatar} />
          </div>
        </div>
        <div className={classes.contentChildRight}>
          <Typography variant="h6" noWrap className={classes.bolder}>
            {profile.name}
          </Typography>
          <Typography variant="body2">{profile.username ? `@${profile.username}` : ''}</Typography>
        </div>
      </div>
      <div className={classes.profileInfo}>
        <div>
          <Typography variant="body2" className={classes.bolder}>
            Tweets
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" className={classes.bolder}>
            9,631
          </Typography>
        </div>
        <div>
          <Typography variant="body2" className={classes.bolder}>
            Following
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" className={classes.bolder}>
            211
          </Typography>
        </div>
        <div>
          <Typography variant="body2" className={classes.bolder}>
            Followers
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" className={classes.bolder}>
            265
          </Typography>
        </div>
      </div>
    </Paper>
  );
};

ProfileOverview.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  profile: PropTypes.instanceOf(Object).isRequired
};

const mapStateToProps = state => ({ profile: state.firebase.profile });

export default compose(
  connect(mapStateToProps),
  withStyles(styles)
)(ProfileOverview);
