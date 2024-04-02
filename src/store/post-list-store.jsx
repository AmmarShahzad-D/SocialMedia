import PropTypes from "prop-types";
import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currentPostList, action) => {
  let NewPostList = currentPostList;
  if (action.type === "DELETE_POST") {
    NewPostList = currentPostList.filter(
      (post) => post.id !== action.payload.postid
    );
  } else if (action.type === "ADD_POST") {
    NewPostList = [action.payload, ...currentPostList];
  }
  return NewPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    POST_DEFAULT_LIST
  );

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
  const deletePost = (postid) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postid,
      },
    });
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const POST_DEFAULT_LIST = [
  {
    id: 1,
    title: "Student of BS-IT",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, enim dolores. Ex dolorem expedita mollitia!",
    reaction: 2,
    userId: 1,
    tags: ["student", "study", "computer Science", "BS-IT"],
  },
  {
    id: 2,
    title: "Student of BS-IT",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, enim dolores. Ex dolorem expedita mollitia!",
    reaction: 21,
    userId: 2,
    tags: ["student", "study", "computer Science", "BS-IT"],
  },
];

PostListProvider.propTypes = {
  children: PropTypes.object,
};

export default PostListProvider;
