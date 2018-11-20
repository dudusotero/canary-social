import avatar from '../../assets/default-avatar.png';
import background from '../../assets/default-bg.jpg';

export const signIn = credencials => (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();
  firebase
    .auth()
    .signInWithEmailAndPassword(credencials.email, credencials.password)
    .then(() => {
      dispatch({ type: 'LOGIN_SUCCESS' });
    })
    .catch(err => {
      dispatch({ type: 'LOGIN_ERROR', paylod: err });
    });
};

export const signOut = () => (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();

  firebase
    .auth()
    .signOut()
    .then(() => {
      dispatch({ type: 'SIGNOUT_SUCCESS' });
    })
    .catch(err => {
      dispatch({ type: 'SIGNOUT_ERROR', payload: err });
    });
};

export const signUp = newUser => (dispatch, getState, { getFirebase, getFirestore }) => {
  const firebase = getFirebase();
  const firestore = getFirestore();

  firebase
    .auth()
    .createUserWithEmailAndPassword(newUser.email, newUser.password)
    .then(res =>
      firestore
        .collection('users')
        .doc(res.user.uid)
        .set({
          name: newUser.name,
          username: newUser.username,
          avatar,
          background
        })
    )
    .then(() => {
      dispatch({ type: 'SIGNUP_SUCCESS' });
    })
    .catch(err => {
      dispatch({ type: 'SIGNUP_ERROR', payload: err });
    });
};
