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
