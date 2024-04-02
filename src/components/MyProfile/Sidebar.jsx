import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "../MyProfile/Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Col lg={3}>
        <div className="sidebar-first-section text-start">
          <h3>Lingua del profilo</h3>{" "}
          {/* <svg
            className="sidebar-edit"
            role="img"
            aria-hidden="false"
            aria-label="Modifica lingua del profilo"
            class="pv-profile-info-section__edit-button"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            data-test-icon="edit-medium"
          >
            <use href="#edit-medium" width="24" height="24"></use>
          </svg> */}
          <p>Italiano</p>
          <hr />
          <h3>Profilo pubblico e URL</h3>
          <p>www.linkedin.com/in/</p>
        </div>

        <div className="sidebar-img">
          <img src="src\assets\img\sidebar-hiring-badge.png" alt="badge" />
        </div>

        <div className="sidebar-second-section text-start">
          <h4>Persone che potresti conoscere</h4>
          <p>Dalla tua scuola o università</p>

          <div className="d-flex">
            <img
              className="sidebar-circle-image"
              src="https://media.licdn.com/dms/image/D5603AQHcB4-iaFeZTg/profile-displayphoto-shrink_100_100/0/1684614972603?e=1717632000&v=beta&t=Op3xnKPz56DH0A22Qca_AgN2cG9bXTvvkvx2e1aM5a4"
              alt=""
            />
            <div className="sidebar-text-profile text-start ms-2">
              <h4>Stefano Bisignano</h4>
              <p>Coordinatore Tax Credit</p>
              <p>Cinema e Audiovisivo - DGCA...</p>
              <Button className="sidebar-btn rounded-pill">Collegati</Button>{" "}
            </div>
          </div>
          <div className="d-flex">
            <img
              className="sidebar-circle-image"
              src="https://media.licdn.com/dms/image/D4E03AQHDlzK_B0uZUw/profile-displayphoto-shrink_100_100/0/1704888903640?e=1717632000&v=beta&t=bcLkGdS0YkdA7h02WfnRo37253WvEKEraTOxKLc-4XU"
              alt=""
            />
            <div className="sidebar-text-profile text-start ms-2">
              <h4>Ilaria Labate</h4>
              <p>Master’s Degree Student...</p>
              <Button className="sidebar-btn w-50 rounded-pill">Collegati</Button>{" "}
            </div>
          </div>
          <div className="d-flex">
            <img
              className="sidebar-circle-image"
              src="https://media.licdn.com/dms/image/D5603AQHsmoXwvhetxA/profile-displayphoto-shrink_100_100/0/1681213929415?e=1717632000&v=beta&t=TD_DuZCyQgStvq5RDjrYQTwVY6sUzH_LvGg6D_grejQ"
              alt=""
            />
            <div className="sidebar-text-profile text-start ms-2">
              <h4>Anna Maria Middea</h4>
              <p>Facilities Coordinator presso CBR</p>
              <Button className="sidebar-btn w-50 rounded-pill">Collegati</Button>{" "}
            </div>
          </div>
          <div className="d-flex">
            <img
              className="sidebar-circle-image"
              src="https://media.licdn.com/dms/image/D4D03AQHgdt3DlCHo7g/profile-displayphoto-shrink_100_100/0/1698226873728?e=1717632000&v=beta&t=pW1dR6xOnJy9m4OBARdjogBI9hN4HeppysAdZSxfnX0"
              alt=""
            />
            <div className="sidebar-text-profile text-start ms-2">
              <h4>Andrea Pugliese</h4>
              <p>Professore associato presso Univ...</p>
              <Button className="sidebar-btn w-50 rounded-pill">Collegati</Button>{" "}
            </div>
          </div>
          <div className="d-flex">
            <img
              className="sidebar-circle-image"
              src="https://media.licdn.com/dms/image/D4D03AQF0qoKzKQ7ooQ/profile-displayphoto-shrink_100_100/0/1708171579295?e=1717632000&v=beta&t=COLOPN4W9vfhBA7SD3y4MpVdCiAd61NzUcprIjwTKk8"
              alt=""
            />
            <div className="sidebar-text-profile text-start ms-2">
              <h4>Daniele Tempesta</h4>
              <p>Hanno frequentato Università d...</p>
              <Button className="sidebar-btn w-50 rounded-pill">Collegati</Button>{" "}
            </div>
          </div>
        </div>
      </Col>
    </div>
  );
};

export default Sidebar;
