import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function ProfileCard(props) {
  return (
    <>
      <div className="d-flex ms-1 mb-2">
        <img className="sidebar-circle-image" src={props.profile.image} alt="" />
        <div className="sidebar-text-profile text-start ms-2 ">
          <h4 className="fs16">
            {props.profile.name} {props.profile.surname}
          </h4>
          <p className="sidebar-gray-text fs14">{props.profile.bio}</p>
          <Link to={"/utente/" + props.profile._id}>
            <Button className="sidebar-btn py-1 fs16">
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
          </Link>
        </div>
      </div>
      <hr className="mx-3" />
    </>
  );
}

export default ProfileCard;
