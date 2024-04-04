import Container from "react-bootstrap/Container";
import sfondo from "../MyProfile/hero-section/uno.svg";
import pencil from "../MyProfile/hero-section/pencil.svg";
import verified from "../MyProfile/hero-section/verified-protection-svgrepo-com.svg";
import camera from "../MyProfile/hero-section/camera-fill.svg";

import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { getProfile } from "../../redux/actions";

import { getOtherProfile } from "../../redux/actions";

import { useParams } from "react-router-dom";
import ModifyProfile from "./ModifyProfile";

const HeroComponent = () => {
  const params = useParams();
  console.log("PARAMS dentro hero component", params.utente);

  const user = useSelector((state) => state.user.available); // l'utente personale nel Redux Store
  const otherUser = useSelector((state) => state.otherProfile.other); // l'utente personale nel Redux Store
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [profilePersonal, setProfilePersonal] = useState({});

  useEffect(() => {
    if (params && params.utente) {
      dispatch(getOtherProfile(params.utente));
      console.log("dispatch fatto con altro user id");
    } else {
      dispatch(getProfile()); // dispatcho da BookStore getBooksAction(), l'action creator
      // con i superpoteri che ritornava una funzione asincrona (e che si occupa di riempire il Redux Store)
      console.log("dispatch fatto profilo personale");
      console.log("user", user);
    }
  }, [params.utente]);

  let profile = user;
  console.log("user PERSONALE dopo fetch", profile);
  let otherProfile = otherUser;
  console.log("user ALTRO dopo fetch", otherProfile);

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <div className="card px-0 pt-0 position-relative overflow-hidden whiteBck mb-1">
      {params.utente ? (
        <div></div>
      ) : (
        <div className="camera position-absolute personal">
          <img src={camera} alt="" style={{ height: "1em" }} className="filter-camera" />
        </div>
      )}
      <img src={sfondo} alt="" className="cover" />
      {/* INIZIO MODIFICA --------------------------------------------------------- */}
      {params.utente ? (
        <div className="mt-5">
          <div className="mt-5 px-4">
            <div className="d-flex px-4 my-4 Personal">
              {params.utente ? (
                <div className="otherBorder position-absolute">
                  <div className="profile">
                    {params.utente ? (
                      <img src={otherProfile.image} alt="" className="imgProfile" />
                    ) : (
                      <img src={profile.image} alt="" className="imgProfile" />
                    )}
                  </div>
                </div>
              ) : (
                <div className="otherBorder position-absolute personal">
                  <div className="profile">
                    {params.utente ? (
                      <img src={otherProfile.image} alt="" className="imgProfile" />
                    ) : (
                      <img src={profile.image} alt="" className="imgProfile" />
                    )}
                    {/* <img src={profile.image} alt="" className="imgProfile" /> */}
                  </div>
                </div>
              )}

              <div className="pen">
                {params.utente ? (
                  <div></div>
                ) : (
                  <img src={pencil} alt="" style={{ height: "3.5em" }} className="intPen" />
                )}
              </div>
            </div>
            <div className="d-flex align-items-baseline">
              {params.utente ? (
                <p className="fw-bold fs-4 nome">
                  {otherProfile.name} {otherProfile.surname}
                </p>
              ) : (
                <p className="fw-bold fs-4 nome">
                  {profile.name} {profile.surname}
                </p>
              )}
              {params.utente ? (
                <div></div>
              ) : (
                <div className="dashed d-flex align-items-center mx-2">
                  <img src={verified} alt="" style={{ height: "1.5em" }} className="verified" />
                  <p className="fs-5 fw-bold my-0" style={{ color: "#0967c2" }}>
                    Verifica ora
                  </p>
                </div>
              )}
            </div>
            {params.utente ? (
              <p className="blu fs-5 margin">{otherProfile.bio}</p>
            ) : (
              <p className="blu fs-5 margin">{profile.bio}</p>
            )}
            {/* <p className="blu fs-5 margin">{profile.bio}</p> */}
            <div className="left d-flex">
              {params.utente ? (
                <p className="d-inline">{otherProfile.area}&nbsp; </p>
              ) : (
                <p className="d-inline">{profile.area}&nbsp; </p>
              )}
              {/* <p className="fs-5 d-inline">{profile.area}&nbsp; </p> */}
              <p className="d-inline">&middot;</p>
              {/* <p className="fs-5 d-inline blu fw-bold informazioni">
            &nbsp; Informazioni di contatto
          </p> */}
              {params.utente ? (
                <p className="d-inline blu fw-bold informazioni">&nbsp; {otherProfile.email}</p>
              ) : (
                <p className="d-inline blu fw-bold informazioni">&nbsp; {profile.email}</p>
              )}
            </div>
            <div className="text-start fs-5 my-4">
              <button className="me-2 btn-pr only-blu btn-profile fw-bold btn" style={{ color: "white" }}>
                Disponibile per
              </button>
              {params.utente ? (
                <button className="me-2 btn-pr fw-bold btn-profileAlt1 btn">
                  {/* {otherProfile.title} */}
                  {otherProfile.title ? otherProfile.title : `Non disponibile`}
                </button>
              ) : (
                <button className="me-2 btn-pr fw-bold btn-profileAlt1 btn">{profile.title}</button>
              )}

              <button className="btn-pr fw-bold btn-profileAlt2 btn">Altro</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="px-4">
          <div className="d-flex my-4 my-4Personal">
            {params.utente ? (
              <div className="otherBorder position-absolute">
                <div className="profile">
                  {params.utente ? (
                    <img src={otherProfile.image} alt="" className="imgProfile" />
                  ) : (
                    <img src={profile.image} alt="" className="imgProfile" />
                  )}
                </div>
              </div>
            ) : (
              <div className="otherBorder position-absolute personal">
                <div className="profile">
                  {params.utente ? (
                    <img src={otherProfile.image} alt="" className="imgProfile" />
                  ) : (
                    <img src={profile.image} alt="" className="imgProfile" />
                  )}
                  {/* <img src={profile.image} alt="" className="imgProfile" /> */}
                </div>
              </div>
            )}

            <div className="pen">
              {params.utente ? (
                <div></div>
              ) : (
                <img src={pencil} alt="" style={{ height: "3.5em" }} className="intPen" onClick={handleModalOpen} />
              )}
              <ModifyProfile show={showModal} handleClose={handleModalClose} />
              {/* <img
              src={pencil}
              alt=""
              style={{ height: "3.5em" }}
              className="intPen"
            /> */}
            </div>
          </div>
          <div className="d-flex align-items-baseline">
            {params.utente ? (
              <p className="fw-bold fs-4 nome">
                {otherProfile.name} {otherProfile.surname}
              </p>
            ) : (
              <p className="fw-bold fs-4 nome">
                {profile.name} {profile.surname}
              </p>
            )}
            {params.utente ? (
              <div></div>
            ) : (
              <div className="dashed d-flex align-items-center mx-2">
                <img src={verified} alt="" style={{ height: "1.5em" }} className="verified" />
                <p className="fs-5 fw-bold my-0" style={{ color: "#0967c2" }}>
                  Verifica ora
                </p>
              </div>
            )}
          </div>
          {params.utente ? (
            <p className="blu fs-5 margin">{otherProfile.bio}</p>
          ) : (
            <p className="blu fs-5 margin">{profile.bio}</p>
          )}
          {/* <p className="blu fs-5 margin">{profile.bio}</p> */}
          <div className="left d-flex">
            {params.utente ? (
              <p className="d-inline">{otherProfile.area}&nbsp; </p>
            ) : (
              <p className="d-inline">{profile.area}&nbsp; </p>
            )}
            {/* <p className="fs-5 d-inline">{profile.area}&nbsp; </p> */}
            <p className="d-inline">&middot;</p>
            {/* <p className="fs-5 d-inline blu fw-bold informazioni">
            &nbsp; Informazioni di contatto
          </p> */}
            {params.utente ? (
              <p className="d-inline blu fw-bold informazioni">&nbsp; {otherProfile.email}</p>
            ) : (
              <p className="d-inline blu fw-bold informazioni">&nbsp; {profile.email}</p>
            )}
          </div>
          <div className="text-start fs-5 my-4">
            <button className="me-2 btn-pr only-blu btn-profile fw-bold btn" style={{ color: "white" }}>
              Disponibile per
            </button>
            {params.utente ? (
              <button className="me-2 btn-pr fw-bold btn-profileAlt1 btn">{otherProfile.title}</button>
            ) : (
              <button className="me-2 btn-pr fw-bold btn-profileAlt1 btn">{profile.title}</button>
            )}

            <button className="btn-pr fw-bold btn-profileAlt2 btn">Altro</button>
          </div>
        </div>
      )}
    </div>
  );
};
export default HeroComponent;
