import React from "react";
import { Button } from "react-bootstrap";

function sidebarProfileCard({ id, image, name, surname, bio }) {
  return (
    <div>
      <img
        className="sidebar-circle-image"
        src="https://media.licdn.com/dms/image/D4E03AQHDlzK_B0uZUw/profile-displayphoto-shrink_100_100/0/1704888903640?e=1717632000&v=beta&t=bcLkGdS0YkdA7h02WfnRo37253WvEKEraTOxKLc-4XU"
        alt=""
      />
      <div className="sidebar-text-profile text-start ms-2 ">
        <h4 className="fs-6">
          {name} {surname}
        </h4>
        <p className="sidebar-gray-text">{bio}</p>
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
  );
}

export default sidebarProfileCard;
