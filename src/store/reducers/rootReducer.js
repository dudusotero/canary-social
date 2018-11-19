import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
import authReducer from './authReducer';
import tweetReducer from './tweetReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  tweet: tweetReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;
