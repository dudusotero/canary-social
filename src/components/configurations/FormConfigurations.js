import React from 'react';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { withStyles, TextField, Button, Tooltip, Modal, Paper } from '@material-ui/core';
import DoneOutlineOutlined from '@material-ui/icons/DoneOutlineOutlined';
import Edit from '@material-ui/icons/Edit';
import CloudUploadOutlined from '@material-ui/icons/CloudUploadOutlined';
import ProfilePicture from '../commons/ProfilePicture';
import ImageCropper from '../commons/ImageCropper';

const styles = theme => ({
  profileContainer: {
    position: 'relative',
    marginBottom: 112
  },
  profileBg: {
    width: '100%',
    height: 256
  },
  avatar: {
    display: 'flex',
    '& .profile-picture': {
      display: 'flex',
      width: '100%',
      justifyContent: 'center',
      position: 'absolute',
      transform: 'translateY(-112px)'
    }
  },
  fabButton: {
    position: 'relative',
    top: 135,
    right: 50
  },
  inputsContainer: {
    display: 'flex',
    '& > div': {
      flex: 1,
      margin: theme.spacing.unit
    },
    '& > div:last-child': {
      flex: 0
    }
  },
  label: {
    position: 'absolute',
    bottom: 72,
    right: 16,
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
  paper: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  }
});

const FormConfigurations = ({
  classes,
  profile,
  handleUpdateUser,
  modalProfilePicture,
  handleOpenProfilePicture,
  handleCloseProfilePicture
}) => (
  <Formik
    initialValues={profile || { name: '', username: '' }}
    onSubmit={(values, { setSubmitting }) => {
      handleUpdateUser(values);
      setSubmitting(false);
    }}
    validationSchema={Yup.object().shape({
      name: Yup.string().required(),
      username: Yup.string().required(),
      background: Yup.string().required(),
      avatar: Yup.string().required()
    })}
  >
    {props => {
      const { values, errors, handleChange, handleSubmit, setValues } = props;
      const handleBackgroundChange = e => {
        e.preventDefault();
        const reader = new FileReader();
        reader.onload = () => {
          setValues({
            ...values,
            background: reader.result
          });
        };
        reader.readAsDataURL(e.target.files[0]);
      };
      return (
        <form>
          <div className={classes.profileContainer}>
            <div
              className={classes.profileBg}
              style={{
                background: `url(${values.background}) no-repeat center center / cover`
              }}
            />
            <div className={classes.avatar}>
              <div className="profile-picture">
                <ProfilePicture src={values.avatar} size="larger" />
                <Tooltip title="Change avatar" placement="right">
                  <Button
                    variant="fab"
                    color="secondary"
                    className={classes.fabButton}
                    onClick={handleOpenProfilePicture}
                  >
                    <Edit />
                  </Button>
                </Tooltip>

                <div className={classes.label}>
                  <Tooltip title="Change background" placement="left">
                    <label htmlFor="file">
                      <input id="file" type="file" onChange={handleBackgroundChange} />
                      <CloudUploadOutlined />
                    </label>
                  </Tooltip>
                </div>
              </div>
            </div>
          </div>

          <div className={classes.inputsContainer}>
            <TextField
              id="name"
              label="Name"
              value={values.name}
              onChange={handleChange}
              error={!!errors.name}
            />
            <TextField
              id="username"
              label="Username"
              value={values.username}
              onChange={handleChange}
              error={!!errors.username}
            />
            <div>
              <Tooltip title="Update profile" placement="top">
                <Button variant="fab" color="primary" onClick={handleSubmit}>
                  <DoneOutlineOutlined />
                </Button>
              </Tooltip>
            </div>
          </div>

          <Modal
            open={modalProfilePicture.open}
            onClose={handleCloseProfilePicture}
            disableAutoFocus
          >
            <Paper className={classes.paper}>
              <ImageCropper
                src={values.avatar}
                {...{ values }}
                {...{ setValues }}
                {...{ handleCloseProfilePicture }}
              />
            </Paper>
          </Modal>
        </form>
      );
    }}
  </Formik>
);

FormConfigurations.propTypes = {
  profile: PropTypes.instanceOf(Object),
  values: PropTypes.instanceOf(Object),
  errors: PropTypes.instanceOf(Object),
  handleChange: PropTypes.instanceOf(Function),
  handleSubmit: PropTypes.instanceOf(Function),
  setValues: PropTypes.instanceOf(Function),
  handleUpdateUser: PropTypes.instanceOf(Function),
  modalProfilePicture: PropTypes.instanceOf(Object),
  handleOpenProfilePicture: PropTypes.instanceOf(Function),
  handleCloseProfilePicture: PropTypes.instanceOf(Function)
};

FormConfigurations.defaultProps = {
  profile: {},
  values: {},
  errors: {},
  setValues: undefined,
  modalProfilePicture: {},
  handleOpenProfilePicture: undefined,
  handleCloseProfilePicture: undefined,
  handleChange: undefined,
  handleSubmit: undefined,
  handleUpdateUser: undefined
};

export default withStyles(styles)(FormConfigurations);
