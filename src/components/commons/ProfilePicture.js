import React from 'react';
import { PropTypes } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const styles = theme => ({
  avatar: {
    borderRadius: '50%',
    boxSizing: 'content-box',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.background.paper
  },
  defaultSize: {
    width: 72,
    height: 72,
    border: `${theme.spacing.unit / 2 - 4}px solid ${theme.palette.background.paper}`
  },
  largerSize: {
    width: 192,
    height: 192,
    border: `${theme.spacing.unit / 2 - 4}px solid ${theme.palette.background.paper}`
  },
  smallSize: {
    width: 48,
    height: 48
  },
  smallerSize: {
    width: 32,
    height: 32
  }
});

const sizeClass = (size, classes) => {
  switch (size) {
    case 'small':
      return classes.smallSize;
    case 'smaller':
      return classes.smallerSize;
    case 'larger':
      return classes.largerSize;
    default:
      return classes.defaultSize;
  }
};

const ProfilePicture = props => {
  const { classes, src, size } = props;

  return (
    <Avatar alt="Avatar" src={src} className={`${classes.avatar} ${sizeClass(size, classes)}`} />
  );
};

ProfilePicture.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  src: PropTypes.string,
  size: PropTypes.oneOf(['smaller', 'small', 'default', 'larger'])
};
ProfilePicture.defaultProps = {
  size: 'default',
  src: null
};

export default withStyles(styles)(ProfilePicture);
