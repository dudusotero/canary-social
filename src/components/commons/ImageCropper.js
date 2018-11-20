import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import 'cropperjs/dist/cropper.css';
import Cropper from 'react-cropper';
import { Button, withStyles, Tooltip } from '@material-ui/core';
import Crop from '@material-ui/icons/Crop';
import CloudUploadOutlined from '@material-ui/icons/CloudUploadOutlined';

const styles = theme => ({
  root: {
    padding: theme.spacing.unit
  },
  label: {
    borderRadius: 26,
    height: 56,
    width: 82,
    backgroundColor: theme.palette.primary.light,
    '& label': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      cursor: 'pointer'
    },
    '& input': {
      display: 'none'
    }
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: theme.spacing.unit
  }
});

const cropperStyle = {
  height: 400,
  width: 400
};

class ImageCropper extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    setValues: PropTypes.instanceOf(Function).isRequired,
    values: PropTypes.instanceOf(Object).isRequired,
    handleCloseProfilePicture: PropTypes.instanceOf(Function).isRequired,
    classes: PropTypes.instanceOf(Object).isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      src: props.src
    };
  }

  onChange = e => {
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = () => {
      this.setState({ src: reader.result });
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  cropImage = () => {
    if (typeof this.cropper.getCroppedCanvas() === 'undefined') {
      return;
    }
    const { setValues, values, handleCloseProfilePicture } = this.props;
    setValues({
      ...values,
      avatar: this.cropper.getCroppedCanvas().toDataURL()
    });
    handleCloseProfilePicture();
  };

  render() {
    const { classes } = this.props;
    const { src } = this.state;
    return (
      <div className={classes.root}>
        <div>
          <Cropper
            style={cropperStyle}
            checkCrossOrigin={false}
            checkOrientation={false}
            aspectRatio={1 / 1}
            guides={false}
            src={src}
            viewMode={2}
            ref={cropper => {
              this.cropper = cropper;
            }}
          />
        </div>
        <div className={classes.actions}>
          <div className={classes.label}>
            <Tooltip title="Upload file" placement="right">
              <label htmlFor="avatarFile">
                <input id="avatarFile" type="file" onChange={this.onChange} />
                <CloudUploadOutlined />
              </label>
            </Tooltip>
          </div>
          <div>
            <Tooltip title="Crop" placement="left">
              <Button variant="fab" color="secondary" onClick={this.cropImage}>
                <Crop />
              </Button>
            </Tooltip>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(ImageCropper);
