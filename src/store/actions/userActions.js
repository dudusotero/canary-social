const updateUser = user => (dispatch, getState, { getFirebase, getFirestore }) => {
  const firestore = getFirestore();

  firestore
    .collection('users')
    .doc(getState().firebase.auth.uid)
    .update(user)
    .then(() => {
      dispatch({ type: 'UPDATE_USER', payload: user });
    })
    .catch(err => {
      dispatch({ type: 'UPDATE_USER_ERROR', payload: err });
    });
};

export default updateUser;
