import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import moment from 'moment';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import ChatBubbleOutline from '@material-ui/icons/ChatBubbleOutline';
import RepeatOutlined from '@material-ui/icons/RepeatOutlined';
import FavoriteBorderOutlined from '@material-ui/icons/FavoriteBorderOutlined';
import MailOutlined from '@material-ui/icons/MailOutlined';
import ProfilePicture from './ProfilePicture';

const styles = theme => ({
  placeholder: {
    minHeight: 115,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  tweet: {
    padding: theme.spacing.unit,
    display: 'flex',
    '& > div': {
      flex: 1
    },
    '& > div:first-child': {
      marginRight: theme.spacing.unit,
      flex: 'inherit'
    }
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden'
  },
  innerContent: {
    display: 'flex',
    '& > p': {
      marginRight: theme.spacing.unit / 2
    }
  },
  actions: {
    display: 'flex',
    '& > div': {
      marginTop: theme.spacing.unit - 2,
      marginRight: theme.spacing.unit / 2
    }
  },
  actionButton: {
    display: 'flex',
    cursor: 'pointer',
    alignItems: 'center',
    '& > span': {
      marginLeft: theme.spacing.unit / 4
    },
    '&:hover': {
      color: theme.palette.primary.light,
      '& > span': {
        color: theme.palette.primary.light
      }
    }
  },
  bolder: {
    fontWeight: 'bold'
  }
});

const Tweet = props => {
  const { classes, tweet } = props;

  if (!tweet.user) {
    return (
      <div className={classes.placeholder}>
        <CircularProgress />
      </div>
    );
  }
  return (
    <div className={classes.tweet}>
      <div>
        <ProfilePicture
          src={tweet.user.avatar}
          initialLetter={tweet.user.initialLetter}
          size="small"
        />
      </div>

      <div className={classes.content}>
        <div className={classes.innerContent}>
          <Typography variant="body1" noWrap className={classes.bolder}>
            {tweet.user.name}
          </Typography>
          <Typography variant="body2" noWrap>
            {`@${tweet.user.username}`}
          </Typography>
          <Typography variant="body2">{moment(tweet.createdAt.toDate()).fromNow(true)}</Typography>
        </div>
        <Typography variant="body2">{tweet.text}</Typography>
        <div className={classes.actions}>
          <div className={classes.actionButton}>
            <ChatBubbleOutline />
            <Typography variant="caption">0</Typography>
          </div>
          <div className={classes.actionButton}>
            <RepeatOutlined />
            <Typography variant="caption">0</Typography>
          </div>
          <div className={classes.actionButton}>
            <FavoriteBorderOutlined />
            <Typography variant="caption">0</Typography>
          </div>
          <div className={classes.actionButton}>
            <MailOutlined />
            <Typography variant="caption">0</Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

Tweet.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  tweet: PropTypes.shape({
    text: PropTypes.string.isRequired,
    user: PropTypes.instanceOf(Object)
  }).isRequired
};

export default withStyles(styles)(Tweet);
