import React from 'react';
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
  },
  link: {
    display: 'inline-block',
    marginRight: theme.spacing.unit / 2,
    '&:hover': {
      cursor: 'pointer',
      textDecoration: 'outline',
      color: theme.palette.primary.light
    }
  }
});

const state = {
  links: [
    { id: 2, title: 'About' },
    { id: 3, title: 'Help Center' },
    { id: 4, title: 'Terms' },
    { id: 5, title: 'Privacy policy' },
    { id: 6, title: 'Cookies' },
    { id: 7, title: 'Ads info' },
    { id: 8, title: 'Brand' },
    { id: 9, title: 'Blog' },
    { id: 10, title: 'Status' },
    { id: 11, title: 'Apps' },
    { id: 12, title: 'Jobs' },
    { id: 13, title: 'Marketing' },
    { id: 14, title: 'Businesses' },
    { id: 15, title: 'Developers' }
  ]
};

const Trendings = props => {
  const { links } = state;
  const { classes } = props;

  const linksList = links.map(link => (
    <Typography variant="caption" className={classes.link} key={link.id}>
      {link.title}
    </Typography>
  ));

  return (
    <Paper className={classes.paper} elevation={0}>
      <Typography variant="caption" className={classes.link}>
        © 2018 Canary Social
      </Typography>
      {linksList}
    </Paper>
  );
};

Trendings.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired
};

export default withStyles(styles)(Trendings);
