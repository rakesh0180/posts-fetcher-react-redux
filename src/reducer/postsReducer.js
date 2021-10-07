const postsInitialState = [];
const postsReducer = (state = postsInitialState, action) => {
  switch (action.type) {
    case "GET_ALL_PRODUCTS": {
      return [...action.payload];
    }

    default: {
      return [...state];
    }
  }
};
export default postsReducer;
