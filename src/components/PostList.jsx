import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";

const PostList = () => {
  const { postList, addInitialPost } = useContext(PostListData);
  const handlePostsClick = () => {
    fetch('https://dummyjson.com/posts')
      .then(res => res.json())
      .then((data) => {
        addInitialPost(data.posts)
      });
  }

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }} >
      {postList.length === 0 && <WelcomeMessage getPostHandleClick={handlePostsClick} />}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
