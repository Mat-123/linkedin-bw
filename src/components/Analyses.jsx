import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";

function Analyses() {
  return (
    <Card style={{ width: "auto" }} className="customCard">
      <Card.Body>
        <Card.Title>Analisi</Card.Title>
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
        <Card.Text>
          Gli utenti che includono almeno una posizione lavorativa ricevono fino a 3,5 volte più visualizzazioni del
          profilo.
        </Card.Text>
        <Button class="btn btn-outline-dark rounded-pill">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Analyses;
