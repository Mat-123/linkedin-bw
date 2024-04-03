import sfondo from "../MyProfile/hero-section/uno.svg";
import "./leftSideBar.css";

import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { getProfile } from "../../redux/actions";
import { Button } from "react-bootstrap";

const LeftSidebar = () => {
  const user = useSelector((state) => state.user.available); // l'utente personale nel Redux Store
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfile());
    console.log("dispatch");
    console.log("user", user);
  }, []);

  console.log("user dopo fetch", user);

  return (
    <>
      <div className="leftsidebar bg-white rounded-top overflow-hidden">
        <div className="leftsidebar_header mb-4">
          <div className="bg-image">
            <img src={sfondo} alt="" className="object-fit-cover" />
          </div>
          <div className="sidebarleft_imgProfile">
            <img src={user.image} alt="" />
          </div>
        </div>

        <div className="info text-center ">
          <h4 className="mb-2">
            {user.name} {user.surname}
          </h4>

          <p className="leftsidebar_bio text-black-50">{user.bio}</p>
        </div>
        {/* ------------MOSTRA DI PIU ------------ */}
      </div>
      <div className="hidden_dettagli leftsidebar bg-white rounded-bottom overflow-hidden">
        <hr className="text-black-50" />
        <div className="collegamenti fw-bold ps-3">
          <div className=" d-flex align-items-center">
            <p className="me-3 text-black-50  ">Collegamenti</p>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-person-plus-fill"
                viewBox="0 0 16 16"
              >
                <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                <path
                  fill-rule="evenodd"
                  d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5"
                />
              </svg>
            </div>
          </div>
          <p className="me-3 text-muted ">Espandi la tua rete</p>
        </div>
        <hr className="text-black-50" />
        <div className="premium ps-3">
          <p className="leftsidebar_bio text-black-50">Accedi a strumenti e informazioni in esclusiva</p>
          <p className="me-3 text-muted fw-bold">Prova premium per 0 EUR</p>
        </div>
        <hr className="text-black-50" />

        <div className="ps-3 pb-3 d-flex align-items-center">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="gray"
              class="bi bi-bookmark-fill"
              viewBox="0 0 16 16"
            >
              <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2" />
            </svg>
          </div>
          <p className="me-3 text-muted fw-bold ps-1">I miei elementi</p>
        </div>
      </div>
      <div className="leftsidebar bg-white rounded mt-2 py-3">
        <p className="me-3 text-primary fw-bold ps-3 pb-3">Gruppi</p>
        <p className="me-3 text-primary fw-bold ps-3 pb-3">Eventi</p>
        <p className="me-3 text-primary fw-bold ps-3 pb-3">Hashtag seguiti</p>
        <hr className="text-black-50" />
        <div className="text-center">
          <h3 className="text-black-50">Scopri di più</h3>
        </div>
      </div>
      <Button className="btn-hidden-area text-black-50">Meno dettagli</Button>
    </>
  );
};
export default LeftSidebar;
