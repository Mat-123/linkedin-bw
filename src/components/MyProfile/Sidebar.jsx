import Button from "react-bootstrap/Button";
import "../../assets/css/Sidebar.css";
import badge from "../../assets/img/sidebar-hiring-badge.png";

import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

const Sidebar = () => {
  const [profiles, setProfiles] = useState([]);
  const getSliceProfiles = () => {
    fetch("https://striveschool-api.herokuapp.com/api/profile/", {
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
          throw new Error("Errore nel recupero libri");
        }
      })
      .then((fetchProfiles) => {
        //   setBooks(fetchedBooks) // non setto più uno stato locale!
        // ma dispatcho un'azione trasportando i libri ottenuti

        console.log("dati fetch", fetchProfiles);
        setProfiles(fetchProfiles);
      })
      .catch((error) => {
        console.log("ERRORE", error);
      });
  };

  return (
    <div className="sidebar mx-3">
      {/* ---------FIRST SECTION -------- */}
      <div className="sidebar-first-section text-start border border-1 mb-1 whiteBck">
        <div className="pb-3  border-bottom">
          <div className="d-flex align-content-center gap-5">
            <h3>Lingua del profilo</h3>
            <div className="pen-svg ms-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="#404040"
                className="bi bi-pencil ms-5"
                viewBox="0 0 16 16"
              >
                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
              </svg>
            </div>
          </div>
          <p className="sidebar-gray-text ">Italiano</p>
        </div>
        <div className="mt-3">
          <div className="d-flex ">
            <h3>Profilo pubblico e URL</h3>
            <div className="pen-svg ms-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="#404040"
                className="bi bi-pencil ms-5"
                viewBox="0 0 16 16"
              >
                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
              </svg>
            </div>
          </div>
          <p className="sidebar-gray-text ">www.linkedin.com/in/</p>
        </div>
      </div>

      {/* ----------SIDEBAR IMG----------- */}
      <div className="sidebar-img border border-1 my-1">
        <img className="d-flex w-100 rounded" src={badge} alt="badge" />
      </div>

      {/* ------------SECOND SECTION------------- */}
      <div className="second-section border border-1">
        <div className="sidebar-second-section text-start d-flex flex-column align-content-center   mt-2">
          <div className="mb-3">
            <h4>Persone che potresti conoscere</h4>
            <p className="sidebar-gray-text fs-6 ">Dalla tua scuola o università</p>
          </div>

          <div className="d-flex ms-4 mb-4">
            <img
              className="sidebar-circle-image"
              src="https://media.licdn.com/dms/image/D5603AQHcB4-iaFeZTg/profile-displayphoto-shrink_100_100/0/1684614972603?e=1717632000&v=beta&t=Op3xnKPz56DH0A22Qca_AgN2cG9bXTvvkvx2e1aM5a4"
              alt=""
            />

            {/* da generare 5  */}
            <div className="sidebar-text-profile text-start ms-2">
              <h4 className="fs-6">Stefano Bisignano</h4>
              <p className="sidebar-gray-text">Coordinatore Tax Credit</p>
              <p className="sidebar-gray-text">Cinema e Audiovisivo - DGCA...</p>
              <Button className="sidebar-btn py-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-person-plus-fill mb-1 me-1"
                  viewBox="0 0 16 16"
                >
                  <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                  <path
                    fillRule="evenodd"
                    d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5"
                  />
                </svg>{" "}
                Collegati
              </Button>{" "}
            </div>
          </div>
          <hr className="mx-3" />
          <div className="d-flex ms-4 mb-4">
            <img
              className="sidebar-circle-image"
              src="https://media.licdn.com/dms/image/D4E03AQHDlzK_B0uZUw/profile-displayphoto-shrink_100_100/0/1704888903640?e=1717632000&v=beta&t=bcLkGdS0YkdA7h02WfnRo37253WvEKEraTOxKLc-4XU"
              alt=""
            />

            <div className="sidebar-text-profile text-start ms-2 ">
              <h4 className="fs-6">Ilaria Labate</h4>
              <p className="sidebar-gray-text">Master’s Degree Student in </p>
              <p className="sidebar-gray-text">Management Engineering</p>
              <Button className="sidebar-btn py-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-person-plus-fill mb-1 me-1"
                  viewBox="0 0 16 16"
                >
                  <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                  <path
                    fillRule="evenodd"
                    d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5"
                  />
                </svg>{" "}
                Collegati
              </Button>{" "}
            </div>
          </div>

          <hr className="mx-3" />
          <div className="d-flex ms-4 mb-4">
            <img
              className="sidebar-circle-image"
              src="https://media.licdn.com/dms/image/D5603AQHsmoXwvhetxA/profile-displayphoto-shrink_100_100/0/1681213929415?e=1717632000&v=beta&t=TD_DuZCyQgStvq5RDjrYQTwVY6sUzH_LvGg6D_grejQ"
              alt=""
            />
            <div className="sidebar-text-profile text-start ms-2">
              <h4 className="fs-6">Anna Maria Middea</h4>
              <p className="sidebar-gray-text">Facilities Coordinator presso CBR</p>
              <Button className="sidebar-btn  py-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-person-plus-fill mb-1 me-1"
                  viewBox="0 0 16 16"
                >
                  <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                  <path
                    fillRule="evenodd"
                    d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5"
                  />
                </svg>{" "}
                Collegati
              </Button>{" "}
            </div>
          </div>
          <hr className="mx-3" />
          <div className="d-flex ms-4 mb-4">
            <img
              className="sidebar-circle-image"
              src="https://media.licdn.com/dms/image/D4D03AQHgdt3DlCHo7g/profile-displayphoto-shrink_100_100/0/1698226873728?e=1717632000&v=beta&t=pW1dR6xOnJy9m4OBARdjogBI9hN4HeppysAdZSxfnX0"
              alt=""
            />
            <div className="sidebar-text-profile text-start ms-2">
              <h4 className="fs-6">Andrea Pugliese</h4>
              <p className="sidebar-gray-text">Professore associato presso</p>
              <p className="sidebar-gray-text">Università della Calabria</p>
              <Button className="sidebar-btn py-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-person-plus-fill mb-1 me-1"
                  viewBox="0 0 16 16"
                >
                  <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                  <path
                    fillRule="evenodd"
                    d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5"
                  />
                </svg>{" "}
                Collegati
              </Button>{" "}
            </div>
          </div>
          <hr className="mx-3" />
          <div className="d-flex ms-4 mb-4">
            <img
              className="sidebar-circle-image"
              src="https://media.licdn.com/dms/image/D4D03AQF0qoKzKQ7ooQ/profile-displayphoto-shrink_100_100/0/1708171579295?e=1717632000&v=beta&t=COLOPN4W9vfhBA7SD3y4MpVdCiAd61NzUcprIjwTKk8"
              alt=""
            />
            <div className="sidebar-text-profile text-start ms-2">
              <h4 className="fs-6">Daniele Tempesta</h4>
              <p className="sidebar-gray-text">Hanno frequentato Università d...</p>
              <Button className="sidebar-btn py-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-person-plus-fill mb-1 me-1"
                  viewBox="0 0 16 16"
                >
                  <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                  <path
                    fillRule="evenodd"
                    d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5"
                  />
                </svg>{" "}
                Collegati
              </Button>
            </div>
          </div>
        </div>
        <div className="sidebar-mostra-tutto d-flex justify-content-center align-items-center border-top  rounded-bottom ">
          <p className="fw-semibold mt-2">Mostra tutto</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
