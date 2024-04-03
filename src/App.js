import { Col, Container, Row } from "react-bootstrap";
import Recommended from "./components/Recommended";
import Analyses from "./components/Analyses";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import Sidebar from "./components/MyProfile/Sidebar";
import MyNav from "./components/MyProfile/MyNav";
import HeroComponent from "./components/MyProfile/HeroComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FooterComponent from "./components/MyProfile/FooterComponent";
import LeftSidebar from "./components/Home/LeftSidebar";
import RightSidebar from "./components/Home/RightSidebar";

import { useParams } from "react-router-dom";

function App() {
  const params = useParams();
  console.log("PARAMS", params);
  console.log("PARAMS utente", params.utente);

  return (
    <div className="App">
      <BrowserRouter>
        <MyNav />
        <Container fluid="xl" className="mt-4">
          <Routes>
            <Route
              path="/home"
              element={
                <>
                  <Row>
                    <Col xs="12" md="5" lg="2">
                      <LeftSidebar />
                    </Col>
                    <Col xs="12" md="7"></Col>
                    <Col className="d-xs-none" lg="3">
                      <RightSidebar />
                    </Col>
                  </Row>
                </>
              }
            />
            <Route
              path="/me"
              element={
                <>
                  <Row>
                    <Col xs="12" md="7" lg="8">
                      <HeroComponent />
                      <Recommended />
                      <Analyses />
                    </Col>
                    <Col xs="12" md="5" lg="4">
                      <Sidebar />
                    </Col>
                  </Row>
                  <FooterComponent />
                </>
              }
            />
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
