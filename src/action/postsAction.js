import axios from "axios";
export const postsGetData = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const result = response.data;
      // console.log("result", result);
      if (result.hasOwnProperty("errors")) {
        alert(result.message);
      } else {
        dispatch(getAllPosts(result));
      }
    } catch (error) {
      alert(error.message);
    }
  };
};

export const getAllPosts = (getPosts) => {
  return {
    type: "GET_ALL_PRODUCTS",
    payload: getPosts,
  };
};
