import { Col, Container, Row } from "react-bootstrap";
import Recommended from "./components/Recommended";
import Analyses from "./components/Analyses";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import Sidebar from "./components/MyProfile/Sidebar";
import MyNav from "./components/MyNav";
import HeroComponent from "./components/MyProfile/HeroComponent";

function App() {
  return (
    <div className="App">
      <MyNav />
      <Container fluid="xl" className="mt-4">
        <Row>
          <Col xs="12" md="7" lg="8">
            <HeroComponent />
            <Recommended />
            <Analyses />
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
