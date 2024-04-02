import PropTypes from "prop-types";
import { MdDelete } from "react-icons/md";
import "../../src/App.css";
import { useContext } from "react";
import { PostList } from "../store/post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);
  return (
    <div>
      <div className="card postCard" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">
            {post.title}

            <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              onClick={() => deletePost(post.id)}
            >
              <MdDelete />
            </span>
          </h5>
          <p className="card-text">{post.body}</p>
          {post.tags.map((tag) => (
            <span className="badge text-bg-primary mx-1" key={tag}>
              {tag}
            </span>
          ))}
          <div className="alert alert-info m-0 p-0 mt-4  " role="alert">
            This Post is reacted by {post.reaction} Propple
          </div>
        </div>
      </div>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.object,
};

export default Post;
