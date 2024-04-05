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

import Comments from "./Comments";

const Post = (props) => {
  const [showAddComment, setShowAddComment] = useState(false);

  // stato post selezionato
  const [selected, setSelected] = useState("");
  // stato che memorizza commenti
  const [comments, setComments] = useState([]);
  // stato per numero commenti array
  const [arrNumComm, setArrNumComm] = useState([]);

  // funz fetch commenti
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

  // use effect per commenti
  const [click, setClick] = useState(false);
  console.log("stato click", click);

  useEffect(() => {
    fetchComments();
  }, []);

  //
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
    <>
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
              <p className="roboto-medium nome fs14">
                {props.infoPost.username}
              </p>
              {props.editable && (
                <div className="ms-auto">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 16 16"
                    fill="#191919"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ cursor: "pointer" }}
                  >
                    <path
                      d="M12.1465 0.146447C12.3417 -0.0488155 12.6583 -0.0488155 12.8536 0.146447L15.8536 3.14645C16.0488 3.34171 16.0488 3.65829 15.8536 3.85355L5.85357 13.8536C5.80569 13.9014 5.74858 13.9391 5.68571 13.9642L0.68571 15.9642C0.500001 16.0385 0.287892 15.995 0.146461 15.8536C0.00502989 15.7121 -0.0385071 15.5 0.0357762 15.3143L2.03578 10.3143C2.06092 10.2514 2.09858 10.1943 2.14646 10.1464L12.1465 0.146447ZM11.2071 2.5L13.5 4.79289L14.7929 3.5L12.5 1.20711L11.2071 2.5ZM12.7929 5.5L10.5 3.20711L4.00001 9.70711V10H4.50001C4.77616 10 5.00001 10.2239 5.00001 10.5V11H5.50001C5.77616 11 6.00001 11.2239 6.00001 11.5V12H6.29291L12.7929 5.5ZM3.03167 10.6755L2.92614 10.781L1.39754 14.6025L5.21903 13.0739L5.32456 12.9683C5.13496 12.8973 5.00001 12.7144 5.00001 12.5V12H4.50001C4.22387 12 4.00001 11.7761 4.00001 11.5V11H3.50001C3.28561 11 3.10272 10.865 3.03167 10.6755Z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
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

        <div className="card-bottom">
          <p className="fs14 nome">{props.infoPost.text}</p>
          {/* <img src={props.infoPost.image ? props.infoPost.image : ""} alt="" /> */}
          {/* img post */}
          {/* <img src={props.infoPost.user.image} alt="" /> */}
          {/* like e num commenti */}
          <div className="rel ms-auto">
            <img src={likeRed} alt="" className="abs me-3" />
            <img src={likeBlu} alt="" className="me-1" />
          </div>
          <p
            className="fs14 nome"
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

              if (click) {
                setClick(false);
                setSelected(props.infoPost._id);
                console.log("id post selezionato", selected);
                console.log("stato click DOPO AVER FATTO CLICK", click);
              }
            }}
          >
            {{ arrNumComm } ? arrNumComm.length + "Commenti" : "0 Commenti"}
          </p>
        </div>
        <div className="d-flex  b-sopra justify-content-center gap-2">
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
            <p className="fs14  flex-wrap roboto-medium">Diffondi</p>
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
