import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import verifica from "./hero-section/icona-verifica.svg";
import imgProfile from "./hero-section/due.svg";
import sfondo from "../MyProfile/hero-section/uno.svg";
import pencil from "../MyProfile/hero-section/pencil.svg";
import verified from "../MyProfile/hero-section/verified-protection-svgrepo-com.svg";
import camera from "../MyProfile/hero-section/camera-fill.svg";

const HeroComponent = () => {
  return (
    <Container fluid className="position-relative">
      <div className="camera position-absolute">
        <img src={camera} alt="" style={{ height: "2.5em" }} className="filter-camera"/>
      </div>

      <img src={sfondo} alt="" className="cover"/>
      <Container>
        <div className="d-flex my-4">
          <div className="otherBorder position-absolute">
            <div className="profile">
              <img src={imgProfile} alt="" className="imgProfile" />
            </div>
          </div>
          <div className="pen">
          <img src={pencil} alt="" style={{ height: "4em" }}  className="intPen"/>
          </div>
          
        </div>
        <div className="d-flex align-items-baseline">
          <p className="fw-bold fs-1 nome">Nome Cognome</p>
          <div className="dashed d-flex align-items-center mx-2">
            <img src={verified} alt="" style={{ height: "1.5em" }} />
            <p className="fs-4 fw-bold my-0">Verifica ora</p>
          </div>
        </div>
        <p className="blu fs-1">--</p>
        <div className="left d-flex">
          <p class="fs-3 d-inline">Italia&nbsp; </p>
          <p class="fs-3 d-inline">&middot;</p>
          <p class="fs-3 d-inline blu fw-bold informazioni">
            &nbsp; Informazioni di contatto
          </p>
        </div>
        <div className="text-start fs-2 my-4">
          <button
            className="me-3 btn-pr only-blu btn-profile fw-bold"
            style={{ color: "white" }}
          >
            Disponibile per
          </button>
          <button className="me-3 btn-pr fw-bold btn-profileAlt1">
            Aggiungi sezione profilo
          </button>
          <button className="me-3 btn-pr fw-bold btn-profileAlt2">Altro</button>
        </div>
      </Container>
    </Container>
  );
};
export default HeroComponent;
