import Button from "react-bootstrap/Button";
import "../../assets/css/Sidebar.css";
import badge from "../../assets/img/sidebar-hiring-badge.png";

import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

import ProfileCard from "./ProfileCard";

import { useParams } from "react-router-dom";

const Sidebar = () => {
  const params = useParams();
  console.log("PARAMS dentro hero component", params.utente);

  const [profiles, setProfiles] = useState([]);
  const getSliceProfiles = () => {
    fetch("https://striveschool-api.herokuapp.com/api/profile/", {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBlYzVmYjEzZGYwYTAwMTk0OWY1OGIiLCJpYXQiOjE3MTIyNDQyMTksImV4cCI6MTcxMzQ1MzgxOX0.rFL8x1EdBXk5cXLx5V1jW6V2YTHy_0lLODn5-0_z7KE",
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
        let arrProfile = fetchProfiles;
        let arrSlice = arrProfile.slice(0, 5);
        setProfiles(arrSlice);
      })
      .catch((error) => {
        console.log("ERRORE", error);
      });
  };

  useEffect(() => {
    getSliceProfiles();
  }, []);

  return (
    <div className="sidebar mx-3">
      {/* ---------FIRST SECTION -------- */}
      {params.utente ? (
        <div></div>
      ) : (
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
      )}

      {/* ----------SIDEBAR IMG----------- */}
      <div className="sidebar-img border border-1 my-3">
        <img className="d-flex w-100 rounded" src={badge} alt="badge" />
      </div>

      {/* ------------SECOND SECTION------------- */}
      <div className="second-section border border-1">
        <div className="sidebar-second-section text-start d-flex flex-column align-content-center   mt-2">
          <div className="mb-3">
            <h4>Persone che potresti conoscere</h4>
            <p className="sidebar-gray-text fs-6 ">Dalla tua scuola o università</p>
          </div>

          {/* dove fare map */}
          {profiles.map((profilo, i) => {
            return <ProfileCard key={i} profile={profilo} />;
          })}
        </div>
        <div className="sidebar-mostra-tutto d-flex justify-content-center align-items-center border-top  rounded-bottom ">
          <p className="fw-semibold mt-2 p-1">Mostra tutto</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
