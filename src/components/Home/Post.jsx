import "./AddPost.css";
import like from "./icon post/pollice.svg";
import comment from "./icon post/chat-right-text.svg";
import share from "./icon post/share-fill.svg";
import send from "./icon post/send-fill.svg";
import likeRed from "./icon post/like-rosso.svg";
import likeBlu from "./icon post/like-blue.svg";
import Comments from "./Comments";

import { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import AddComment from "./AddComment";
import AddPostModal from "./AddPostModal";

const Post = (props) => {
  const [showAddComment, setShowAddComment] = useState(false);
  // const [selected, setSelected] = useState(false);
  const [arrNumComm, setArrNumComm] = useState([]);


  const [click, setClick] = useState(false);

  const [selected, setSelected] = useState("");

  const [comments, setComments] = useState([]);

  const handleCommentClick = () => {
    setShowAddComment(!showAddComment);
  };

  const fetchComments = () => {
    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBiYzRlZGEyODFkODAwMTlhM2VjNTIiLCJpYXQiOjE3MTIwNDczNDEsImV4cCI6MTcxMzI1Njk0MX0._hbN8joRmo0ilM2j3j5Be52RH2nTsa2Ys4TZJvVoaUw",
      },
    })
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("Errore nel recupero commenti");
        }
      })
      .then((commentsFetch) => {
        // const found = comments.filter(
        //   (element) => element.elementId === props.infoPost._id
        // );
        // // console.log("commenti trovati", found);
        // if (found.length !== 0) {
        //   setArrNumComm(found);
        //   console.log("stato con commenti", comments);
        // }
        //
        setComments(commentsFetch);
      })
      .catch((error) => {
        console.log("ERRORE", error);
      });
  };

  useEffect(() => {
    fetchComments();
  }, []);

  let data = props.infoPost.createdAt.slice(11);
  // console.log('data slice', data)
  // vera ora
  let ora = data.slice(0, 5);
  // console.log('ora slice', ora)
  let provadata = props.infoPost.createdAt.slice(0, 10);
  // console.log('vera data', provadata)


  return (
    <div className="card my-2">
      <div className="card-top">
        <div className="profile-icon flex-grow-0">
          {/* Icona circolare del profilo */}
          <Link to={"/utente/" + props.infoPost.user._id}>
            <img
              src={
                props.infoPost.image
                  ? props.infoPost.image
                  : props.infoPost.user.image
              }
              alt="Profile Icon"
            />
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
        <div
          className="rel"
          onClick={() => {
            setClick(true);
            const found = comments.filter(
              (element) => element.elementId === props.infoPost._id
            );
            // console.log("commenti trovati", found);
            if (found.length !== 0) {
              setArrNumComm(found);
              console.log("stato con commenti", comments);
              let numeroCommenti = found.length;
              console.log("numero di commenti", numeroCommenti);
            } else {
              console.log("zero commenti");
            }

            if (click === true) {
              setClick(false);
              setSelected(props.infoPost._id);
              console.log("id post selezionato", selected);
              console.log("stato click DOPO AVER FATTO CLICK", click);
            }
          }}
        >
          <img src={likeRed} alt="" className="abs" />
          <img src={likeBlu} alt="" />
        </div>
      </div>
      <div className="d-flex  b-sopra">
        <div className="d-flex  flex-wrap align-items-center px-2 py-2 nome">
          <img src={like} alt="" style={{ height: "1em" }} className="px-2" />
          <p className="fs14 roboto-medium">Consiglia</p>
        </div>
        <div
          className="d-flex  flex-wrap align-items-center px-2 py-2 nome"
          onClick={handleCommentClick}
        >
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
      {click && (
          <div className="card noBord">
            {arrNumComm.map((singoloCommento, i) => {
              return <Comments array={singoloCommento} key={i} />;
            })}
          </div>
        )}
    </div>
  );
};
export default Post;
