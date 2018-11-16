import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit,
    color: theme.palette.text.secondary
  },
  bolder: {
    fontWeight: 'bold'
  }
});

const state = {
  trends: [
    { id: 1, title: '#hire-me', tweetCount: 17235 },
    { id: 2, title: '#reactjs', tweetCount: 180442 },
    { id: 3, title: '#redux', tweetCount: 64633 },
    { id: 4, title: '#material-ui', tweetCount: 13825 },
    { id: 5, title: '#firebase', tweetCount: 5342 }
  ]
};

const Trendings = props => {
  const { trends } = state;
  const { classes } = props;

  const trendsContainer = trends.map(trend => (
    <Fragment key={trend.id}>
      <Typography variant="subtitle1" color="primary" className={classes.bolder}>
        {trend.title}
      </Typography>
      <Typography variant="caption" color="textSecondary" gutterBottom>
        {`${trend.tweetCount} Tweets`}
      </Typography>
    </Fragment>
  ));

  return (
    <Paper className={classes.paper} elevation={0}>
      <Typography variant="h6" gutterBottom className={classes.bolder}>
        Trends for you
      </Typography>
      {trendsContainer}
    </Paper>
  );
};

Trendings.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired
};

export default withStyles(styles)(Trendings);
