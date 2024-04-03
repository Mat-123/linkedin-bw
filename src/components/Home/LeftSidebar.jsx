import Container from "react-bootstrap/Container";
import sfondo from "../MyProfile/hero-section/uno.svg";
import pencil from "../MyProfile/hero-section/pencil.svg";
import verified from "../MyProfile/hero-section/verified-protection-svgrepo-com.svg";
import camera from "../MyProfile/hero-section/camera-fill.svg";

import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { getProfile } from "../../redux/actions";

const LeftSidebar = () => {
  const user = useSelector((state) => state.user.available); // l'utente personale nel Redux Store
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfile()); // dispatcho da BookStore getBooksAction(), l'action creator
    // con i superpoteri che ritornava una funzione asincrona (e che si occupa di riempire il Redux Store)
    console.log("dispatch");
    console.log("user", user);
    // setProfilePersonal()
  }, []);

  let profile = user;
  console.log("user dopo fetch", profile);

  return (
    <Container fluid className="card position-relative pb-2 whiteBck mb-1">
      <div className="camera position-absolute">
        <img src={camera} alt="" style={{ height: "1em" }} className="filter-camera" />
      </div>

      <img src={sfondo} alt="" className="cover" />
      <Container>
        <div className="d-flex my-4 my-4Personal">
          <div className="otherBorder position-absolute">
            <div className="profile">
              {/* <img src={imgProfile} alt="" className="imgProfile" /> */}
              <img src={profile.image} alt="" className="imgProfile" />
            </div>
          </div>
          <div className="pen">
            <img src={pencil} alt="" style={{ height: "3.5em" }} className="intPen" />
          </div>
        </div>
        <div className="d-flex align-items-baseline">
          {/* <p className="fw-bold fs-3 nome">Nome Cognome</p> */}
          <p className="fw-bold fs-3 nome">
            {profile.name} {profile.surname}
          </p>
          <div className="dashed d-flex align-items-center mx-2">
            <img src={verified} alt="" style={{ height: "1.5em" }} className="verified" />
            <p className="fs-5 fw-bold my-0" style={{ color: "#0967c2" }}>
              Verifica ora
            </p>
          </div>
        </div>
        <p className="blu fs-5 margin">{profile.bio}</p>
        <div className="left d-flex">
          <p className="fs-5 d-inline">{profile.area}&nbsp; </p>
          <p className="fs-5 d-inline">&middot;</p>
          {/* <p className="fs-5 d-inline blu fw-bold informazioni">
            &nbsp; Informazioni di contatto
          </p> */}
          <p className="fs-5 d-inline blu fw-bold informazioni">&nbsp; {user.email}</p>
        </div>
        <div className="text-start fs-5 mb-4">
          <button className="me-2 btn-pr only-blu btn-profile fw-bold" style={{ color: "white" }}>
            Disponibile per
          </button>
          {/* <button className="me-2 btn-pr fw-bold btn-profileAlt1">
            Aggiungi sezione profilo
          </button> */}
          <button className="me-2 btn-pr fw-bold btn-profileAlt1">{profile.title}</button>
          <button className="btn-pr fw-bold btn-profileAlt2">Altro</button>
        </div>
      </Container>
    </Container>
  );
};
export default LeftSidebar;
