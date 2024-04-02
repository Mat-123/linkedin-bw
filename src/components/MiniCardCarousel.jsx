import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import React from "react";
import Slider from "react-slick";

// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return <div className={className} style={{ ...style, background: "#717171" }} onClick={onClick} />;
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return <div className={className} style={{ ...style, background: "#717171" }} onClick={onClick} />;
// }

function MiniCardCarousel() {
  const settings = {
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="pe-1">
          <Card style={{ width: "auto" }} className="customCard">
            <Card.Body>
              <Card.Title>Dove lavori attualmente?</Card.Title>
              <Card.Text>
                Gli utenti che includono almeno una posizione lavorativa ricevono fino a 3,5 volte più visualizzazioni
                del profilo.
              </Card.Text>
              <Button variant="outline-secondary" className="rounded-pill">
                Go somewhere
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div className="pe-1">
          <Card style={{ width: "auto" }} className="customCard">
            <Card.Body>
              <Card.Title>Dove lavori attualmente?</Card.Title>
              <Card.Text>
                Gli utenti che includono almeno una posizione lavorativa ricevono fino a 3,5 volte più visualizzazioni
                del profilo.
              </Card.Text>
              <Button variant="outline-secondary" className="rounded-pill">
                Go somewhere
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: "auto" }} className="customCard">
            <Card.Body>
              <Card.Title>Dove lavori attualmente?</Card.Title>
              <Card.Text>
                Gli utenti che includono almeno una posizione lavorativa ricevono fino a 3,5 volte più visualizzazioni
                del profilo.
              </Card.Text>
              <Button variant="outline-secondary" className="rounded-pill">
                Go somewhere
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: "auto" }} className="customCard">
            <Card.Body>
              <Card.Title>Dove lavori attualmente?</Card.Title>
              <Card.Text>
                Gli utenti che includono almeno una posizione lavorativa ricevono fino a 3,5 volte più visualizzazioni
                del profilo.
              </Card.Text>
              <Button variant="outline-secondary" className="rounded-pill">
                Go somewhere
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: "auto" }} className="customCard">
            <Card.Body>
              <Card.Title>Dove lavori attualmente?</Card.Title>
              <Card.Text>
                Gli utenti che includono almeno una posizione lavorativa ricevono fino a 3,5 volte più visualizzazioni
                del profilo.
              </Card.Text>
              <Button variant="outline-secondary" className="rounded-pill">
                Go somewhere
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: "auto" }} className="customCard">
            <Card.Body>
              <Card.Title>Dove lavori attualmente?</Card.Title>
              <Card.Text>
                Gli utenti che includono almeno una posizione lavorativa ricevono fino a 3,5 volte più visualizzazioni
                del profilo.
              </Card.Text>
              <Button variant="outline-secondary" className="rounded-pill">
                Go somewhere
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: "auto" }} className="customCard">
            <Card.Body>
              <Card.Title>Dove lavori attualmente?</Card.Title>
              <Card.Text>
                Gli utenti che includono almeno una posizione lavorativa ricevono fino a 3,5 volte più visualizzazioni
                del profilo.
              </Card.Text>
              <Button variant="outline-secondary" className="rounded-pill">
                Go somewhere
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: "auto" }} className="customCard">
            <Card.Body>
              <Card.Title>Dove lavori attualmente?</Card.Title>
              <Card.Text>
                Gli utenti che includono almeno una posizione lavorativa ricevono fino a 3,5 volte più visualizzazioni
                del profilo.
              </Card.Text>
              <Button variant="outline-secondary" className="rounded-pill">
                Go somewhere
              </Button>
            </Card.Body>
          </Card>
        </div>
      </Slider>
    </div>
  );
}

export default MiniCardCarousel;
