import "./AddPost.css";
import like from "./icon post/pollice.svg";
import comment from "./icon post/chat-right-text.svg";
import share from "./icon post/share-fill.svg";
import send from "./icon post/send-fill.svg";
import likeRed from "./icon post/like-rosso.svg";
import likeBlu from "./icon post/like-blue.svg";

import { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import AddComment from "./AddComment";
import AddPostModal from "./AddPostModal";

const Post = (props) => {
  const [showAddComment, setShowAddComment] = useState(false);

  let data = props.infoPost.createdAt.slice(11);
  // console.log('data slice', data)
  // vera ora
  let ora = data.slice(0, 5);
  // console.log('ora slice', ora)
  let provadata = props.infoPost.createdAt.slice(0, 10);
  // console.log('vera data', provadata)

  const handleCommentClick = () => {
    setShowAddComment(!showAddComment);
  };
  return (
    <div className="card my-2">
      <div className="card-top">
        <div className="profile-icon flex-grow-0">
          {/* Icona circolare del profilo */}
          <Link to={"/utente/" + props.infoPost.user._id}>
            <img src={props.infoPost.image ? props.infoPost.image : props.infoPost.user.image} alt="Profile Icon" />
            {console.log("post dati", props.infoPost)}
          </Link>
        </div>
        <div className="d-flex flex-grow-1 flex-column">
          <div className="d-flex">
            <p className="roboto-medium nome fs14">{props.infoPost.username}</p>
            {/* edit pen */}
            {props.editable && (
              <AddPostModal
                postIndex={props.postIndex}
                setPostChangedIndex={props.setPostChangedIndex}
                post={props.infoPost}
                editable={props.editable}
              />
            )}
          </div>
          <p className="fs12" style={{ color: "#666666" }}>
            {props.infoPost.user.area ? props.infoPost.user.area : ""}
          </p>
          <p className="fs12" style={{ color: "#666666" }}>
            {ora} . {provadata}
          </p>
        </div>
      </div>

      <div className="card-bottom">
        <p className="fs14 nome">{props.infoPost.text}</p>
        {/* <img src={props.infoPost.image ? props.infoPost.image : ""} alt="" /> */}
        {/* img post */}
        {/* <img src={props.infoPost.user.image} alt="" /> */}
        {/* like e num commenti */}
        <div className="rel">
          <img src={likeRed} alt="" className="abs me-1" />
          <img src={likeBlu} alt="" className="like" />
        </div>
      </div>
      <div className="d-flex  b-sopra">
        <div className="d-flex  flex-wrap align-items-center px-2 py-2 nome">
          <img src={like} alt="" style={{ height: "1em" }} className="px-2" />
          <p className="fs14 roboto-medium">Consiglia</p>
        </div>
        <div className="d-flex  flex-wrap align-items-center px-2 py-2 nome" onClick={handleCommentClick}>
          <img src={comment} alt="" className="px-2" />
          <p className="fs14 roboto-medium">Commenta</p>
        </div>
        <div className="d-flex  flex-wrap align-items-center px-2 py-2 nome">
          <img src={share} alt="" className="px-2" />
          <p className="fs14  flex-wrap roboto-medium">Diffondi il post</p>
        </div>
        <div className="d-flex  flex-wrap align-items-center px-2 py-2 nome">
          <img src={send} alt="" className="px-2" />
          <p className="fs14 roboto-medium">Invia</p>
        </div>
      </div>
      {showAddComment && <AddComment />}
    </div>
  );
};
export default Post;
