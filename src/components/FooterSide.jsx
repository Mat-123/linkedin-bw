import NavLink from "react-bootstrap/NavLink";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";

import {
  CaretDownFill,
  GearFill,
  QuestionCircleFill,
  ShieldShaded,
} from "react-bootstrap-icons";

const FooterSide = () => {
  return (
    <Nav className="flex-column ">
      <Row>
        <Col>
          <NavLink className="titoloFooter ftText">Informazioni</NavLink>
        </Col>
        <Col>
          <NavLink className="titoloFooter ftText">Accessibilità</NavLink>
        </Col>
      </Row>
      <Row>
        <Col>
          <span className="sottotitoloFooter ftText">Centro assistenza</span>
        </Col>
      </Row>
      <Row>
        <Col>
          <Dropdown className="btnFooter w-100">
            {/* <Dropdown.Toggle variant="success" id="dropdown-basic"> */}
            <Dropdown.Toggle id="persDrop2">
              Privacy e condizioni
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">
                Informativa sulla privacy
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">
                Contratto di licenza
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3">Bla Bla Bla</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>

      <Row>
        <Col>
          <NavLink className="titoloFooter ftText">
            Opzioni per gli annunci pubblicitari
          </NavLink>
        </Col>
      </Row>

      <Row>
        <Col>
          <NavLink className="titoloFooter ftText">Pubblicità</NavLink>
        </Col>
        <Col>
          <Dropdown className="btnFooter w-100">
            {/* <Dropdown.Toggle variant="success" id="dropdown-basic"> */}
            <Dropdown.Toggle id="persDrop2">
              Servizi per le aziende
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">
                Assumi su Linkedin
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">
                Vendi con Linkedin
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3">Bla Bla Bla</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>

      <Row>
        <Col>
          <NavLink className="titoloFooter ftText">
            Scarica l'app Linkedin
          </NavLink>
        </Col>
        <Col>
          <NavLink className="titoloFooter ftText">Altro</NavLink>
        </Col>
      </Row>
    </Nav>
  );
};
export default FooterSide;
