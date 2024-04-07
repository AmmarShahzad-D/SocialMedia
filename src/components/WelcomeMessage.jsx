import PropTypes from "prop-types";
const WelcomeMessage = ({getPostHandleClick}) => {
  return (
    <div className="my-5 d-block m-auto">
      <center><h3 >Their is no Post</h3>
        <button className="btn btn-primary my-2"  onClick={getPostHandleClick} >Get Post from Server</button>
      </center>
    </div>
  )
}

WelcomeMessage.propTypes = {
  getPostHandleClick: PropTypes.func,
};



export default WelcomeMessage
