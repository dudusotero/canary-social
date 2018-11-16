import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ProfilePicture from '../commons/ProfilePicture';

const styles = theme => ({
  paper: {
    display: 'flex',
    flexDirection: 'column'
  },
  profileBg: {
    background: 'url(https://pbs.twimg.com/profile_banners/287748509/1352758140/600x200)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
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
    flex: 2
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
  const { classes } = props;

  return (
    <Paper className={classes.paper} elevation={0}>
      <div className={classes.profileBg} />
      <div className={classes.profileContent}>
        <div className={classes.contentChildLeft}>
          <div className="profile-picture">
            <ProfilePicture src="https://pbs.twimg.com/profile_images/3212607592/436352c4ff500dd5d4427a66d53f9531_400x400.jpeg" />
          </div>
        </div>
        <div className={classes.contentChildRight}>
          <Typography variant="h6" noWrap className={classes.bolder}>
            Eduardo Sotero
          </Typography>
          <Typography variant="body2">@DuduSotero</Typography>
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
  classes: PropTypes.instanceOf(Object).isRequired
};

export default withStyles(styles)(ProfileOverview);
