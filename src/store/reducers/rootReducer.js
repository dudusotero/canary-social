import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import tweetReducer from './tweetReducer';

const rootReducer = combineReducers({
  tweet: tweetReducer,
  firestore: firestoreReducer
});

export default rootReducer;
