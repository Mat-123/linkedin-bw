import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import MyNav from "./components/MyNav";

function App() {
  return (
    <div className="App">
      <MyNav />
      <Container fluid="xl">
        <Row>
          <Col xs="12" md="7" lg="9">
            {/* profilo */}
            {/* Consigliato */}
          </Col>
          <Col xs="12" md="5" lg="3">
            {/* sidebar */}
          </Col>
          {/* Footer */}
        </Row>
      </Container>
    </div>
  );
}

export default App;
