const user = {
  id: 1,
  name: 'Eduardo Sotero',
  username: '@DuduSotero',
  avatar:
    'https://pbs.twimg.com/profile_images/3212607592/436352c4ff500dd5d4427a66d53f9531_400x400.jpeg'
};

export const createTweet = tweet => (dispatch, getState, { getFirebase, getFirestore }) => {
  const firestore = getFirestore();
  const createdTweet = {
    ...tweet,
    user,
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
