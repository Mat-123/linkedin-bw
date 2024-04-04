import React from "react";
import "./AddPost.css";
import { useSelector } from "react-redux";
import AddPostModal from "./AddPostModal";

const Card = () => {
  const user = useSelector((state) => state.user.available); // l'utente personale nel Redux Store

  let profile = user;

  return (
    <div className="card">
      <div className="card-top">
        <div className="profile-icon">
          {/* Icona circolare del profilo */}
          <img src={profile.image} alt="Profile Icon" />
        </div>
        <input type="text" placeholder="Avvia un post" className="rounded-pill" />
      </div>
      <div className="card-bottom">
        <button className="action-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#378FE9"
            className="bi bi-image me-1"
            viewBox="0 0 16 16"
          >
            <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
            <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1z" />
          </svg>
          Contenuti Multimediali
        </button>
        <button className="action-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#C37D16"
            className="bi bi-calendar me-1"
            viewBox="0 0 16 16"
          >
            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
          </svg>
          Aggiungi Evento
        </button>
        <AddPostModal />
      </div>
    </div>
  );
};

export default Card;
