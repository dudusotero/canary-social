import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles, InputBase } from '@material-ui/core';
import { createTweet } from '../../store/actions/tweetActions';
import ProfilePicture from './ProfilePicture';

const styles = theme => ({
  container: {
    padding: theme.spacing.unit,
    backgroundColor: theme.palette.grey[200],
    borderBottom: `1px solid ${theme.palette.divider}`,
    display: 'flex',
    alignItems: 'center'
  },
  bootstrapRoot: {
    flex: 1,
    'label + &': {
      marginTop: theme.spacing.unit * 3
    }
  },
  bootstrapInput: {
    marginLeft: theme.spacing.unit / 2,
    borderRadius: 4,
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: theme.spacing.unit - 4,
    fontWeight: 'bolder',
    padding: `5px ${theme.spacing.unit / 2}px`,
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)'
    }
  }
});

class TweetInput extends Component {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
    submitTweet: PropTypes.instanceOf(Function).isRequired
  };

  state = {
    text: ''
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleKeyPress = e => {
    if (e.key === 'Enter' && e.target.value) {
      const { submitTweet } = this.props;
      submitTweet(this.state);
      this.setState({
        [e.target.id]: ''
      });
    }
  };

  render() {
    const { text } = this.state;
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <ProfilePicture
          src="https://pbs.twimg.com/profile_images/3212607592/436352c4ff500dd5d4427a66d53f9531_400x400.jpeg"
          size="smaller"
        />
        <InputBase
          id="text"
          value={text}
          classes={{ root: classes.bootstrapRoot, input: classes.bootstrapInput }}
          placeholder="What's happening?"
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  submitTweet: tweet => dispatch(createTweet(tweet))
});

export default connect(
  null,
  mapDispatchToProps
)(withStyles(styles)(TweetInput));
