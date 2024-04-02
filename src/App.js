import Recommended from "./components/Recommended";
import Analyses from "./components/Analyses";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col xs={8}>
            <Recommended />
            <Analyses />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
