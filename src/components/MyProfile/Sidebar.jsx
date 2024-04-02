import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "../../assets/css/Sidebar.css";
import badge from "../../assets/img/sidebar-hiring-badge.png";

const Sidebar = () => {
  return (
    <div className="sidebar d-flex mx-3">
      <Col lg={3}>
        <div className="sidebar-first-section text-start border border-1 rounded">
          <div className="d-flex gap-5 mt-3">
            <h3 className="fs-5 ms-4">Lingua del profilo</h3>{" "}
            <svg
              className="ms-5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="#404040"
              class="bi bi-pencil"
              viewBox="0 0 16 16"
            >
              <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
            </svg>
          </div>
          <p className="sidebar-gray-text ms-4">Italiano</p>
          <hr className="mx-3" />
          <div className="d-flex">
            <h3 className="fs-5 ms-4">Profilo pubblico e URL</h3>
            <svg
              className="ms-5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="#404040"
              class="bi bi-pencil"
              viewBox="0 0 16 16"
            >
              <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
            </svg>
          </div>
          <p className="sidebar-gray-text ms-4">www.linkedin.com/in/</p>
        </div>

        <div className="sidebar-img border border-1 rounded mt-4">
          <img className="d-flex w-100 rounded" src={badge} alt="badge" />
        </div>

        <div className="sidebar-second-section text-start border border-1 rounded mt-4">
          <h4 className="fs-6 mt-3 ms-4">Persone che potresti conoscere</h4>
          <p className="sidebar-gray-text fs-6 ms-4">Dalla tua scuola o università</p>

          <div className="d-flex ms-4">
            <img
              className="sidebar-circle-image"
              src="https://media.licdn.com/dms/image/D5603AQHcB4-iaFeZTg/profile-displayphoto-shrink_100_100/0/1684614972603?e=1717632000&v=beta&t=Op3xnKPz56DH0A22Qca_AgN2cG9bXTvvkvx2e1aM5a4"
              alt=""
            />
            <div className="sidebar-text-profile text-start ms-2">
              <h4 className="fs-6">Stefano Bisignano</h4>
              <p className="sidebar-gray-text">Coordinatore Tax Credit</p>
              <p className="sidebar-gray-text">Cinema e Audiovisivo - DGCA...</p>
              <Button className="sidebar-btn py-1">
                <svg
                  className="mb-1 me-1"
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
                </svg>{" "}
                Collegati
              </Button>{" "}
            </div>
          </div>
          <hr className="mx-3" />
          <div className="d-flex ms-4 mt-4">
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
                  className="mb-1 me-1"
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
                </svg>{" "}
                Collegati
              </Button>{" "}
            </div>
          </div>
          <hr className="mx-3" />
          <div className="d-flex ms-4 mt-4">
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
                  className="mb-1 me-1"
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
                </svg>{" "}
                Collegati
              </Button>{" "}
            </div>
          </div>
          <hr className="mx-3" />
          <div className="d-flex ms-4 mt-4">
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
                  className="mb-1 me-1"
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
                </svg>{" "}
                Collegati
              </Button>{" "}
            </div>
          </div>
          <hr className="mx-3" />
          <div className="d-flex ms-4 mt-4">
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
                  className="mb-1 me-1"
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
                </svg>{" "}
                Collegati
              </Button>
            </div>
          </div>
          <div class="sidebar-mostra-tutto d-flex justify-content-center align-items-center border border-1 rounded-bottom mt-3">
            <p className="fw-semibold mt-2">Mostra tutto</p>
          </div>
        </div>
      </Col>
    </div>
  );
};

export default Sidebar;
