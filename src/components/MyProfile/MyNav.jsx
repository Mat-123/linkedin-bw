import React, { useState, useEffect } from "react";
import logo from "../../assets/icons/linkedin.svg";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/navbar.css";
import { Container, Dropdown, DropdownButton } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Display } from "react-bootstrap-icons";

import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../redux/actions";

function MyNav() {
  const user = useSelector((state) => state.user.available); // l'utente personale nel Redux Store

  const dispatch = useDispatch();

  const [isActive, setActive] = useState(false);
  const toggleDisplay = () => {
    setActive(!isActive);
  };

  useEffect(() => {
    dispatch(getProfile()); // dispatcho da BookStore getBooksAction(), l'action creator
    // con i superpoteri che ritornava una funzione asincrona (e che si occupa di riempire il Redux Store)
    console.log("dispatch fatto profilo personale");
    console.log("user", user);
  }, []);

  return (
    <header>
      <Container fluid="xl">
        <div className="navbar_div pt-1 d-flex">
          {/* LOGO */}
          <div className="nav_left d-flex">
            <Link style={{ textDecoration: "none" }} className="" to={"/"}>
              <img src={logo} alt="linkedin" />
            </Link>
            {/* SEARCH */}
            <div className="nav_search">
              <div className="search_icon d-flex align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  fill="gray"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
              </div>
              <input type="search" />

              {/* <p style={{ display: "none" }}>Cerca</p> */}
            </div>
            <div className="search_collapse iconNav" onClick={toggleDisplay}>
              <div className="search_icon d-flex justify-content-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  fill="gray"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
              </div>
              <p className="textNav">Cerca</p>
            </div>
          </div>
          {/* ICONS RIGHT */}
          <div className="d-flex">
            <div className="nav_right d-flex">
              <Link style={{ textDecoration: "none" }} className="nav_links" to={"/"}>
                <div className="home_icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    data-supported-dps="24x24"
                    className="mercado-match"
                    width="24"
                    height="24"
                    focusable="false"
                  >
                    <path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7z"></path>
                  </svg>
                </div>
                <p>Home</p>
              </Link>
              <Link style={{ textDecoration: "none" }} className="nav_links" to={"/network"}>
                <div className="network_icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    data-supported-dps="24x24"
                    className="mercado-match"
                    width="24"
                    height="24"
                    focusable="false"
                  >
                    <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
                  </svg>
                </div>
                <p>Rete</p>
              </Link>
              <Link style={{ textDecoration: "none" }} className="nav_links" to={"/jobs"}>
                <div className="jobs_icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    data-supported-dps="24x24"
                    className="mercado-match"
                    width="24"
                    height="24"
                    focusable="false"
                  >
                    <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path>
                  </svg>
                </div>
                <p>Lavoro</p>
              </Link>
              <Link style={{ textDecoration: "none" }} className="nav_links" to={"/messages"}>
                <div className="messages_icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    data-supported-dps="24x24"
                    className="mercado-match"
                    width="24"
                    height="24"
                    focusable="false"
                  >
                    <path d="M16 4H8a7 7 0 000 14h4v4l8.16-5.39A6.78 6.78 0 0023 11a7 7 0 00-7-7zm-8 8.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zm4 0A1.25 1.25 0 1113.25 11 1.25 1.25 0 0112 12.25zm4 0A1.25 1.25 0 1117.25 11 1.25 1.25 0 0116 12.25z"></path>
                  </svg>
                </div>
                <p>Messaggistica</p>
              </Link>
              <Link style={{ textDecoration: "none" }} className="nav_links" to={"/notifications"}>
                <div className="notifications_icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    data-supported-dps="24x24"
                    className="mercado-match"
                    width="24"
                    height="24"
                    focusable="false"
                  >
                    <path d="M22 19h-8.28a2 2 0 11-3.44 0H2v-1a4.52 4.52 0 011.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0122 18zM18.21 7.44A6.27 6.27 0 0012 2a6.27 6.27 0 00-6.21 5.44L5 13h14z"></path>
                  </svg>
                </div>
                <p>Notifiche</p>
              </Link>
              <div>
                <div className="utente">
                  <div className="profile_pic">
                    <div className="user_pic_div">
                      <img alt="avatar" src={user.image} className="avatar_dropdown" />
                    </div>
                    {/* <div className="svg_div">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 128 128"
                        id="person-accent-4"
                        style={{
                          width: 24,
                          height: 24,
                        }}
                      >
                        <path fill="#e7e2dc" d="M0 0h128v128H0z" />
                        <path d="M88.41 84.67a32 32 0 10-48.82 0 66.13 66.13 0 0148.82 0z" fill="#788fa5" />
                        <path
                          d="M88.41 84.67a32 32 0 01-48.82 0A66.79 66.79 0 000 128h128a66.79 66.79 0 00-39.59-43.33z"
                          fill="#9db3c8"
                        />
                        <path
                          d="M64 96a31.93 31.93 0 0024.41-11.33 66.13 66.13 0 00-48.82 0A31.93 31.93 0 0064 96z"
                          fill="#56687a"
                        />
                      </svg>
                    </div> */}
                  </div>
                </div>
                <DropdownButton align="end" title="Me" id="dropdown-menu-align-end">
                  <div className="inner-dropdown ">
                    <Dropdown.Item eventKey="3" className="d-flex">
                      <Link style={{ textDecoration: "none" }} className="w-100 d-flex align-items-center" to={"/me"}>
                        <div className="profile_pic_dd">
                          <img src={user.image} alt="avatar" className="avatar_dd" />
                        </div>
                        <div>
                          {/* <h6 className="text-muted">Il mio nome</h6> */}
                          <h3 className="text-muted">
                            {user.name} {user.surname}
                          </h3>
                          {/* <p>Istruzione o impiego attuale</p> */}
                          <p>{user.title}</p>
                        </div>
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="1">
                      <h6>Account</h6>
                    </Dropdown.Item>

                    <Dropdown.Item eventKey="2">
                      <div className="premium">
                        <p>Prova Premium per 0 EUR</p>
                      </div>
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="3">Impostazioni e privacy</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Guida</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Lingua</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="1">
                      <h6>Gestisci</h6>
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="4">Post e attività</Dropdown.Item>
                    <Dropdown.Item eventKey="4">Account per la pubblicazione di offerte</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4">Esci</Dropdown.Item>
                  </div>
                </DropdownButton>
              </div>
            </div>
            <div className="dd_aziende ">
              <div className="svg_dd_aziende">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  className="mercado-match"
                  width="24"
                  height="24"
                  focusable="false"
                >
                  <path d="M3 3h4v4H3zm7 4h4V3h-4zm7-4v4h4V3zM3 14h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4zM3 21h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4z"></path>
                </svg>
              </div>
              <p>Aziende</p>
            </div>
            <span className="nav_premium">Prova Premium per 0 EUR</span>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default MyNav;
