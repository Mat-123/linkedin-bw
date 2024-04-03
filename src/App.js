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
import AddPost from "./components/Home/AddPost.jsx";
import Experiences from "./components/MyProfile/Experiences.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNav />
        <Container fluid="xl" className="mt-4">
          <Row>
            <Routes>
              <Route
                path="/home"
                element={
                  <>
                    <Col xs="12" md="5" lg="2">
                      <LeftSidebar />
                    </Col>
                    <Col xs="12" md="7">
                      <AddPost />
                    </Col>
                    <Col className="d-xs-none" lg="3"></Col>
                  </>
                }
              />
              <Route
                path="/me"
                element={
                  <>
                    <Col xs="12" md="7" lg="8">
                      <HeroComponent />
                      <Recommended />
                      <Analyses />
                      <Experiences />
                    </Col>
                    <Col xs="12" md="5" lg="4">
                      <Sidebar />
                    </Col>
                  </>
                }
              />
            </Routes>
            <FooterComponent />
          </Row>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
