import { Container, Row, Col, Nav, NavLink } from "react-bootstrap";
import { CaretDownFill, GearFill, QuestionCircleFill, ShieldShaded } from "react-bootstrap-icons";
import Dropdown from "react-bootstrap/Dropdown";
import { useParams } from "react-router-dom";
import { useState } from "react";

const FooterComponent = () => {
  const params = useParams();
  // let azione = ''
  const [azione, setAzione] = useState("");

  return (
    <Container fluid>
      <div className="footer text-white mt-5">
        <Container>
          <Row>
            <Col xs={6} md={2}>
              <Nav className="flex-column ">
                <NavLink className="titoloFooter ftText">Informazioni</NavLink>
                <NavLink className="titoloFooter ftText">Linee guida della community</NavLink>
                <NavLink className="titoloFooter ftText">
                  Privacy e condizioni <CaretDownFill className="colorIcon" />
                </NavLink>
                <NavLink className="titoloFooter ftText">Sales Solutions</NavLink>
                <NavLink className="titoloFooter ftText">Centro sicurezza</NavLink>
              </Nav>
            </Col>

            <Col xs={6} md={2}>
              <Nav className="flex-column ">
                <NavLink className="titoloFooter ftText">Accessibilità</NavLink>
                <NavLink className="titoloFooter ftText">Carriera</NavLink>
                <NavLink className="titoloFooter ftText">Opzioni per gli annunci pubblicitari</NavLink>
                <NavLink className="titoloFooter ftText">Mobile</NavLink>
              </Nav>
            </Col>

            <Col xs={6} md={2}>
              <Nav className="flex-column ">
                <NavLink className="titoloFooter ftText">Talent Solutions</NavLink>
                <NavLink className="titoloFooter ftText">Soluzioni di marketing</NavLink>
                <NavLink className="titoloFooter ftText">Pubblicità</NavLink>
                <NavLink className="titoloFooter ftText">Piccole imprese</NavLink>
              </Nav>
            </Col>

            <Col xs={6} md={3}>
              <Nav className="flex-column ">
                <NavLink>
                  <div className="d-flex align-items-start">
                    <QuestionCircleFill className="mt-1 me-1 colorIcon" />
                    <div className="d-flex flex-column">
                      <span className="titoloFooter ftText">Domande?</span>
                      <span className="sottotitoloFooter ftText">Visita il nostro Centro assistenza</span>
                    </div>
                  </div>
                </NavLink>
                <NavLink>
                  <div className="d-flex align-items-start">
                    <GearFill className="mt-1 me-1 colorIcon" />
                    <div className="d-flex flex-column">
                      <span className="titoloFooter ftText">Gestisci il tuo account e la tua privacy</span>
                      <span className="sottotitoloFooter ftText">Vai alle impostazioni</span>
                    </div>
                  </div>
                </NavLink>
                <NavLink>
                  <div className="d-flex align-items-start">
                    <ShieldShaded className="mt-1 me-1 colorIcon" />
                    <div className="d-flex flex-column">
                      <span className="titoloFooter ftText">Trasparenza sui contenuti consigliati</span>
                      <span className="sottotitoloFooter ftText">Scopri di più sui contenuti consigliati.</span>
                    </div>
                  </div>
                </NavLink>
              </Nav>
            </Col>
            <Col xs={12} md={3}>
              <div className="d-flex flex-column align-items-start">
                <span className="sottotitoloFooter ftText">Seleziona lingua</span>
                {/* <button className="btnFooter w-100">
                  Italiano (Italiano) <CaretDownFill />
                </button> */}
                <Dropdown className="btnFooter w-100">
                  {/* <Dropdown.Toggle variant="success" id="dropdown-basic"> */}
                  <Dropdown.Toggle id="persDrop">{azione ? azione : "seleziona lingua"}</Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item
                      href="#/action-1"
                      onClick={() => {
                        setAzione("Italiano");
                      }}
                    >
                      Italiano
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-2"
                      onClick={() => {
                        setAzione("Inglese");
                      }}
                    >
                      Inglese
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-3"
                      onClick={() => {
                        setAzione("Francese");
                      }}
                    >
                      Francese
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="py-3 copyRightLinkedin">Linkedin Corporation © 2024</Col>
          </Row>
        </Container>
      </div>
    </Container>
  );
};
export default FooterComponent;
