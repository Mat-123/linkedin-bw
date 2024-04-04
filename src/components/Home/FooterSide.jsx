import NavLink from "react-bootstrap/NavLink";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import Container from "react-bootstrap/Container";

const FooterSide = () => {
  return (
    <Container className="text-center">
      <Nav className="flex-column" style={{fontSize:'small'}}>
        <div className="d-flex justify-content-center">
          <div>
            <NavLink className="titoloFooter ftText" style={{paddingBottom:'0'}}>Informazioni</NavLink>
          </div>
          <div>
            <NavLink className="titoloFooter ftText" style={{paddingBottom:'0'}}>Accessibilità</NavLink>
          </div>
        </div>
        <Row>
          <Col>
            <span className="sottotitoloFooter ftText" style={{paddingBottom:'0'}}>Centro assistenza</span>
          </Col>
        </Row>
        <Row>
          <Col>
            <Dropdown className="btnFooter w-100" style={{height: '2.4em'}}>
              {/* <Dropdown.Toggle variant="success" id="dropdown-basic"> */}
              <Dropdown.Toggle id="persDrop2" style={{fontSize:'small', paddingBottom:'0'}}>Privacy e condizioni</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Informativa sulla privacy</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Contratto di licenza</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Bla Bla Bla</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>

        <Row>
          <Col>
            <div className="titoloFooter ftText" style={{paddingInline: 'none'}}>Opzioni per gli annunci pubblicitari</div>
          </Col>
        </Row>

        <div className="d-flex justify-content-center align-items-center">
          <div className="me-2">
            <NavLink className="titoloFooter ftText px-0">Pubblicità</NavLink>
          </div>
          <div>
            <Dropdown className="btnFooter w-100" style={{height: '2.4em'}}>
              {/* <Dropdown.Toggle variant="success" id="dropdown-basic"> */}
              <Dropdown.Toggle id="persDrop2" className="px-0" style={{fontSize:'small'}}>
                Servizi per le aziende
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Assumi su Linkedin</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Vendi con Linkedin</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Bla Bla Bla</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <div>
            <NavLink className="titoloFooter ftText" style={{paddingTop:'0'}}>Scarica l'app Linkedin</NavLink>
          </div>
          <div>
            <NavLink className="titoloFooter ftText" style={{paddingTop:'0'}}>Altro</NavLink>
          </div>
        </div>
      </Nav>
    </Container>
  );
};
export default FooterSide;
