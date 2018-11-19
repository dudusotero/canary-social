export const createTweet = tweet => (dispatch, getState, { getFirebase, getFirestore }) => {
  const firestore = getFirestore();

  const createdTweet = {
    ...tweet,
    userId: getState().firebase.auth.uid,
    createdAt: new Date()
  };
  firestore
    .collection('tweets')
    .add(createdTweet)
    .then(() => {
      dispatch({ type: 'CREATE_TWEET', payload: createdTweet });
    })
    .catch(err => {
      dispatch({ type: 'CREATE_TWEET_ERROR', payload: err });
    });
};

export const deleteTweet = tweet => {};
