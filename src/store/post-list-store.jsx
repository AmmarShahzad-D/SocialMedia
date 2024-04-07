import PropTypes from "prop-types";
import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  addInitialPost: () => {},
});

const postListReducer = (currentPostList, action) => {
  let NewPostList = currentPostList;
  if (action.type === "DELETE_POSTS") {
    NewPostList = currentPostList.filter(
      (post) => post.id !== action.payload.id
    );
    console.log(action.payload.postid);
  } else if (action.type === "ADD_POST") {
    NewPostList = [action.payload, ...currentPostList];
  } else if (action.type === "ADD_INITIAL_POSTS") {
    NewPostList = action.payload.posts;
  }
  return NewPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const addPost = (userId, postTitle, postBody, reaction, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reaction: reaction,
        userId: userId,
        tags: tags,
      },
    });
  };
  const addInitialPost = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  };

  const deletePost = (id) => {
    dispatchPostList({
      type: "DELETE_POSTS",
      payload: {
        id,
      },
    });
  };

  return (
    <PostList.Provider
      value={{ postList, addPost, deletePost, addInitialPost }}
    >
      {children}
    </PostList.Provider>
  );
};

PostListProvider.propTypes = {
  children: PropTypes.object,
};

export default PostListProvider;
