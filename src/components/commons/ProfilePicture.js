import React from 'react';
import { PropTypes } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const styles = theme => ({
  avatar: {
    borderRadius: '50%',
    boxSizing: 'content-box'
  },
  defaultSize: {
    width: 72,
    height: 72,
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
  src: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['smaller', 'small', 'default'])
};
ProfilePicture.defaultProps = {
  size: 'default'
};

export default withStyles(styles)(ProfilePicture);
