import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ProfilePicture from './ProfilePicture';

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit,
    color: theme.palette.text.secondary
  },
  bolder: {
    fontWeight: 'bolder'
  },
  container: {
    display: 'flex',
    padding: `${theme.spacing.unit}px 0`,
    borderBottom: `1px solid ${theme.palette.background.default}`,
    '&:last-child': {
      border: 'none',
      paddingBottom: 0
    },
    '& > div': {
      flex: 0,
      alignItems: 'center',
      marginRight: theme.spacing.unit
    },
    '& > div:last-child': {
      flex: 2,
      overflow: 'hidden'
    }
  },
  profileCard: {
    display: 'flex',
    flexDirection: 'row',
    '& p:last-child': {
      flex: 1,
      fontSize: 'smaller',
      marginLeft: 4
    }
  },
  button: {
    borderRadius: 50,
    '& span': {
      padding: `0 ${theme.spacing.unit / 2}px`,
      fontSize: theme.typography.fontSize - 4
    }
  }
});

const state = {
  sugestions: [
    {
      id: 1,
      name: 'FeraCode',
      avatar:
        'https://media.licdn.com/dms/image/C560BAQFjwPsAmFZ-Cg/company-logo_200_200/0?e=2159024400&v=beta&t=HcLuqK_Vldfk82x5sJIKd1CibRyHrb0m46H8yHrOjfc',
      user: '@feracode'
    },
    {
      id: 2,
      name: 'Dan Abramov',
      avatar: 'https://pbs.twimg.com/profile_images/906557353549598720/oapgW_Fp_400x400.jpg',
      user: '@dan_abramov'
    }
  ]
};

const WhoToFollow = props => {
  const { sugestions } = state;
  const { classes } = props;

  const sugestionsList = sugestions.map(sugestion => (
    <div key={sugestion.id} className={classes.container}>
      <div>
        <ProfilePicture src={sugestion.avatar} size="small" />
      </div>
      <div>
        <div className={classes.profileCard}>
          <Typography className={classes.bolder} noWrap>
            {sugestion.name}
          </Typography>
          <Typography noWrap>{sugestion.user}</Typography>
        </div>
        <Button variant="outlined" size="small" color="primary" className={classes.button}>
          <Typography variant="caption" className={classes.bolder}>
            Follow
          </Typography>
        </Button>
      </div>
    </div>
  ));

  return (
    <Paper className={classes.paper}>
      <Typography variant="h6" gutterBottom className={classes.bolder}>
        Who to follow
      </Typography>
      {sugestionsList}
    </Paper>
  );
};

WhoToFollow.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired
};

export default withStyles(styles)(WhoToFollow);
