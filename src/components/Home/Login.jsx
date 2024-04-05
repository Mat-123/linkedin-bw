import { useState } from "react";
import { Container, Row, Col, Alert, Navbar } from "react-bootstrap";
import loginImg from "../../assets/img/hero_loginPage.svg";
import { useNavigate } from "react-router-dom";
import FooterComponent from "../MyProfile/FooterComponent";
import logo from "../../assets/icons/linkedin.svg";

const Login = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      (email === "frank@mail.com" && password === "12345") ||
      (email === "luljeta@mail.com" && password === "12345") ||
      (email === "matteo@mail.com" && password === "12345")
    ) {
      setLoggedIn(true);
    } else {
      setError("Le credenziali inserite non sono corrette.");
    }

    if (!email || !password) {
      setError("Email e password sono obbligatori.");
      return;
    }

    if (loggedIn) {
      navigate("/");
    }

    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <Container>
      <img src={logo} alt="" className="ms-2" />{" "}
      <Row>
        <Col xs={12} md={5}>
          <h1 className="mt-5 ms-3 fw-light" style={{ color: "#B24020" }}>
            Ti diamo il benvenuto <br /> nella tua community professionale
          </h1>

          <form onSubmit={handleSubmit}>
            <div className="my-4 ms-3">
              <label htmlFor="exampleFormControlInput1" className="form-label ms-1">
                Email address
              </label>
              <input
                type="email"
                className="form-control w-75 my-1"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="my-4 ms-3">
              <label htmlFor="inputPassword5" className="form-label ms-1">
                Password
              </label>
              <input
                type="password"
                id="inputPassword5"
                className="form-control w-75 my-1"
                aria-describedby="passwordHelpBlock"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {error && (
              <Alert className="w-75 ms-3" variant="danger">
                {error}
              </Alert>
            )}

            <div className="my-3">
              <button type="submit" className="btn btn-primary rounded-pill w-75 ms-2">
                Accedi
              </button>
            </div>
          </form>
        </Col>
        <Col xs={12} md={7}>
          <img src={loginImg} alt="" style={{ width: "100%", maxWidth: "750px" }} className="d-xs-none" />
        </Col>
      </Row>
      <FooterComponent />
    </Container>
  );
};

export default Login;
