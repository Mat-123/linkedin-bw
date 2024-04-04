import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { Cursor } from "react-bootstrap-icons";

function Analyses() {
  return (
    <Card style={{ width: "auto" }} className="whiteBck mb-1 p-0">
      <Card.Body>
        <Card.Title className="mb-2 text-muted text-start">Analisi</Card.Title>
        <Card.Subtitle className="mb-2 text-muted text-start">
          <div className="d-flex align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              data-supported-dps="16x16"
              fill="currentColor"
              className="mercado-match"
              width="16"
              height="16"
              focusable="false"
            >
              <path d="M8 3a8.59 8.59 0 00-8 5 8.54 8.54 0 008 5 8.55 8.55 0 008-5 8.55 8.55 0 00-8-5zm0 8a3 3 0 113-3 3 3 0 01-3 3zm2-3a2 2 0 11-2-2 2 2 0 012 2z"></path>
            </svg>
            <span className="ms-2"> Solo per te</span>
          </div>
        </Card.Subtitle>
        <div>
          <Row>
            <Col xs={4}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                className="mercado-match"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
              </svg>
            </Col>
            <Col xs={4}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                className="mercado-match"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M23 20v1H1v-1zM8 9H2v10h6zm7-6H9v16h6zm7 11h-6v5h6z"></path>
              </svg>
            </Col>
          </Row>
        </div>
      </Card.Body>
      <Card.Footer className="text-center">
        <a href="/" className="text-decoration-none" style={{ cursor: "pointer" }}>
          Mostra tutte le analisi →
        </a>
      </Card.Footer>
    </Card>
  );
}

export default Analyses;
