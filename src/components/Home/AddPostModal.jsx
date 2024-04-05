// lasciato intenzionalmente vuoto come reminder, su Linkedin serve ad aggiungere un post ma non so se dovremo implementarlo
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./AddPost.css";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../redux/actions";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

function AddPostModal(props) {
  // PRENDE PROFILO
  const user = useSelector((state) => state.user.available); // l'utente personale nel Redux Store
  const dispatch = useDispatch();

  // EDIT POST SET STATE
  const [postText, setPostText] = useState((props.post && props.post.text) || "");

  useEffect(() => {
    dispatch(getProfile());
    console.log("dispatch");
    console.log("user", user);
  }, []);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/` + (props.editable ? props.post._id : ""),
        {
          method: props.editable ? "PUT" : "POST",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBlYzVmYjEzZGYwYTAwMTk0OWY1OGIiLCJpYXQiOjE3MTIyNDQyMTksImV4cCI6MTcxMzQ1MzgxOX0.rFL8x1EdBXk5cXLx5V1jW6V2YTHy_0lLODn5-0_z7KE",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ text: postText }),
        }
      );

      if (response.ok) {
        handleClose();
        props.setPostChangedIndex(props.postIndex);
      } else {
        console.error("Errore durante l'invio dei dati");
      }
    } catch (error) {
      console.error("Errore durante la richiesta:", error);
    }
  };

  return (
    <>
      {props.editable ? (
        <div className="ms-auto pen_icon" onClick={handleShow}>
          <svg
            width="14"
            height="14"
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
      ) : (
        <Button variant="primary" onClick={handleShow} className="action-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#E06847"
            className="bi bi-pencil-square me-1"
            viewBox="0 0 16 16"
          >
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
            <path
              fill-rule="evenodd"
              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
            />
          </svg>
          Scrivi Articolo
        </Button>
      )}

      {/* POST BUTTON */}

      <Modal show={show} onHide={handleClose} className="w-100 h-100 pe-0">
        <Modal.Header className="border-0" closeButton>
          <div className="d-flex align-items-center p-3">
            <div className="post_imgProfile ">
              <img src={user.image} alt="" />
            </div>
            <div className="ms-3">
              <h4>
                {user.name} {user.surname}
              </h4>
              <p>Pubblica: Chiunque</p>
            </div>
          </div>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel controlId="floatingTextarea2" label="Di cosa vuoi parlare?">
            <Form.Control
              as="textarea"
              placeholder="Di cosa vuoi parlare?"
              id="myText"
              type="text"
              value={postText}
              style={{ border: "none", background: "transparent", outline: 0, height: "300px", width: "100%" }}
              onChange={(e) => setPostText(e.target.value)}
            />
          </FloatingLabel>

          {/* SMILEY */}
          <div className="ps-4 py-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-emoji-smile"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
              <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5" />
            </svg>
          </div>
          {/* ICONE */}
          <div className="d-flex">
            {/* svg picture */}
            <div className="post-icons">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-image"
                viewBox="0 0 16 16"
              >
                <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1z" />
              </svg>
            </div>
            {/* svg calendar */}
            <div className="post-icons">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-calendar3"
                viewBox="0 0 16 16"
              >
                <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857z" />
                <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
              </svg>
            </div>
            {/* svg celebrate */}
            <div className="post-icons">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-cake-fill"
                viewBox="0 0 16 16"
              >
                <path d="m7.399.804.595-.792.598.79A.747.747 0 0 1 8.5 1.806V4H11a2 2 0 0 1 2 2v3h1a2 2 0 0 1 2 2v4a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1v-4a2 2 0 0 1 2-2h1V6a2 2 0 0 1 2-2h2.5V1.813a.747.747 0 0 1-.101-1.01ZM12 6.414a.9.9 0 0 1-.646-.268 1.914 1.914 0 0 0-2.708 0 .914.914 0 0 1-1.292 0 1.914 1.914 0 0 0-2.708 0A.9.9 0 0 1 4 6.414v1c.49 0 .98-.187 1.354-.56a.914.914 0 0 1 1.292 0c.748.747 1.96.747 2.708 0a.914.914 0 0 1 1.292 0c.374.373.864.56 1.354.56zm2.646 5.732a.914.914 0 0 1-1.293 0 1.914 1.914 0 0 0-2.707 0 .914.914 0 0 1-1.292 0 1.914 1.914 0 0 0-2.708 0 .914.914 0 0 1-1.292 0 1.914 1.914 0 0 0-2.708 0 .914.914 0 0 1-1.292 0L1 11.793v1.34c.737.452 1.715.36 2.354-.28a.914.914 0 0 1 1.292 0c.748.748 1.96.748 2.708 0a.914.914 0 0 1 1.292 0c.748.748 1.96.748 2.707 0a.914.914 0 0 1 1.293 0 1.915 1.915 0 0 0 2.354.28v-1.34z" />
              </svg>
            </div>
            {/* svg three dots */}
            <div className="post-icons text-align-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-three-dots"
                viewBox="0 0 16 16"
              >
                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
              </svg>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" className="btn_clock p-0" onClick={handleClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-clock"
              viewBox="0 0 16 16"
            >
              <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
            </svg>
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Invia
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddPostModal;
