import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import Sidebar from "./components/MyProfile/Sidebar";
import MyNav from "./components/MyNav";

function App() {
  return (
    <div className="App">
      <MyNav />
      <Container fluid="xl" className="mt-4">
        <Row>
          <Col xs="12" md="7" lg="8">
            {/* profilo */}
            {/* Consigliato */}
          </Col>
          <Col xs="12" md="5" lg="4">
            <Sidebar />
          </Col>
          {/* Footer */}
        </Row>
      </Container>
    </div>
  );
}

export default App;
