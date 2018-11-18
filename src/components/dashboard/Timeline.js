import React from 'react';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import Paper from '@material-ui/core/Paper';
import TweetInput from '../commons/TweetInput';
import Tweet from '../commons/Tweet';

const styles = theme => ({
  paper: {
    display: 'flex',
    flexDirection: 'column'
  },
  tweet: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    '&:last-child': {
      borderBottom: 'none'
    }
  }
});

const Timeline = props => {
  const { classes, tweets } = props;

  const tweetsList = tweets.map(tweet => (
    <div className={classes.tweet} key={tweet.id}>
      <Tweet tweet={tweet} />
    </div>
  ));

  return (
    <Paper className={classes.paper} elevation={0}>
      <TweetInput />
      {tweetsList}
    </Paper>
  );
};

Timeline.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  tweets: PropTypes.instanceOf(Array)
};
Timeline.defaultProps = {
  tweets: []
};

const mapStateToProps = state => ({
  tweets: state.firestore.ordered.tweets
});

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'tweets', orderBy: ['createdAt', 'desc'] }]),
  withStyles(styles)
)(Timeline);
