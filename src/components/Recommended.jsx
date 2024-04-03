import Card from "react-bootstrap/Card";
import MiniCardCarousel from "./MiniCardCarousel";

function Recommended() {
  return (
    <Card className='whiteBck mb-1'>
      <Card.Body>
        <Card.Title className="text-start">Consigliato per te</Card.Title>
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
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </Card.Text>
        <div className='text-start w-100'>
          <h5>Principiante</h5>
          <div className="d-flex align-items-center">
            <progress value={30} max={70} className="w-100" color="dark" />
            <span className="ms-1">3/7</span>
          </div>
          <p>Completa 1 passaggio per raggiungere il livello Intermedio</p>
        </div>
        <MiniCardCarousel />
      </Card.Body>
    </Card>
  );
}

export default Recommended;
