import React from 'react';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
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

const user = {
  id: 1,
  name: 'Eduardo Sotero',
  username: '@DuduSotero',
  avatar:
    'https://pbs.twimg.com/profile_images/3212607592/436352c4ff500dd5d4427a66d53f9531_400x400.jpeg'
};

const tweets = [
  { id: 1, text: 'This is only a test...', user },
  { id: 2, text: 'This is only a test...', user },
  { id: 3, text: 'This is only a test...', user },
  { id: 4, text: 'This is only a test...', user },
  { id: 5, text: 'This is only a test...', user },
  { id: 6, text: 'This is only a test...', user },
  { id: 7, text: 'This is only a test...', user },
  { id: 8, text: 'This is only a test...', user },
  { id: 9, text: 'This is only a test...', user }
];

const Timeline = props => {
  const { classes } = props;

  const tweetsList = tweets.map(tweet => (
    <div className={classes.tweet} key={tweet.id}>
      <Tweet tweet={tweet} />
    </div>
  ));

  return (
    <Paper className={classes.paper}>
      <TweetInput />
      {tweetsList}
    </Paper>
  );
};

Timeline.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired
};

export default withStyles(styles)(Timeline);
