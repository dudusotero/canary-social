import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ProfileOverview from './ProfileOverview';
import Trendings from './Trendings';
import Timeline from './Timeline';
import WhoToFollow from './WhoToFollow';
import Footer from './Footer';

const styles = theme => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing.unit + 64
    }
  },
  container: {
    maxWidth: 1190,
    [theme.breakpoints.down('sm')]: {
      marginTop: 72,
      padding: 0
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: 48,
      padding: 0
    }
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    '& > div': {
      marginBottom: theme.spacing.unit
    }
  }
});

function Dashboard(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={16} className={classes.container}>
        <Grid item xs md={3} className={classes.item}>
          <ProfileOverview />
          <Trendings />
        </Grid>
        <Grid item xs>
          <Timeline />
        </Grid>
        <Grid item xs md={3} className={classes.item}>
          <WhoToFollow />
          <Footer />
        </Grid>
      </Grid>
    </div>
  );
}

Dashboard.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired
};

export default withStyles(styles)(Dashboard);
