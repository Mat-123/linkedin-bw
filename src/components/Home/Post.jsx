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
import { Toast } from "react-bootstrap";

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

  const deletePost = async () => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/posts/` + props.infoPost._id, {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBlYzVmYjEzZGYwYTAwMTk0OWY1OGIiLCJpYXQiOjE3MTIyNDQyMTksImV4cCI6MTcxMzQ1MzgxOX0.rFL8x1EdBXk5cXLx5V1jW6V2YTHy_0lLODn5-0_z7KE",
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        console.log("ok");
        setShow(true);
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const [show, setShow] = useState(false);

  return (
    <>
      <Toast
        className="d-inline-block m-1 toast_abs"
        bg="success"
        onClose={() => setShow(false)}
        show={show}
        delay={3000}
        autohide
      >
        <Toast.Body className="text-white ">Il post è stato correttamente eliminato!</Toast.Body>
      </Toast>
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
                <div className="put_del">
                  <AddPostModal
                    postIndex={props.postIndex}
                    setPostChangedIndex={props.setPostChangedIndex}
                    post={props.infoPost}
                    editable={props.editable}
                  />
                  <div className="trash_icon" onClick={deletePost}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      fill="currentColor"
                      class="bi bi-trash3-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
                    </svg>
                  </div>
                </div>
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

        <div className="card-bottom d-flex flex-column">
          <p className="fs14 nome">{props.infoPost.text}</p>
          {/* <img src={props.infoPost.image ? props.infoPost.image : ""} alt="" /> */}
          {/* img post */}
          {/* <img src={props.infoPost.user.image} alt="" /> */}
          {/* like e num commenti */}
          <div
            className="rel"
            onClick={() => {
              setClick(true);
              const found = comments.filter((element) => element.elementId === props.infoPost._id);
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
            <img src={likeRed} alt="" className="abs heart" />
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
        {click && (
          <div className="card noBord">
            {arrNumComm.map((singoloCommento, i) => {
              return <Comments array={singoloCommento} key={i} />;
            })}
          </div>
        )}
      </div>
    </>
  );
};
export default Post;
