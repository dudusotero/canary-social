const initState = {};

const tweetReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_TWEET':
      return state;
    case 'CREATE_TWEET_ERROR':
      return state;
    default:
      return state;
  }
};

export default tweetReducer;
