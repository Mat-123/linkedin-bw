import React, { useState } from "react";
import "../../assets/css/Sidebar.css";

const RightSidebar = () => {
  const [showSecondNews, setShowSecondNews] = useState(false);
  const [showLessDetails, setShowLessDetails] = useState(false);

  const toggleSecondNews = () => {
    setShowSecondNews(!showSecondNews);
    setShowLessDetails(false);
  };

  const toggleLessDetails = () => {
    setShowSecondNews(false);
    setShowLessDetails(true);
  };

  return (
    <div className="sidebar-first-section text-start border border-1 mb-1 whiteBck">
      {/* <div className="pb-3"> */}
      <div>
        <div className="d-flex align-content-center gap-5">
          <h3 className="ms-1 fs-6">LinkedIn Notizie</h3>
          <div className="ms-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-info-square-fill info mb-2"
              viewBox="0 0 16 16"
            >
              <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm8.93 4.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
            </svg>
          </div>
        </div>
        <div className="first-news mt-0">
          <ul className="fw-semibold lh-md p-4 sidebar-list mb-0 pb-1">
            <li>
              Quali confini tra vita e lavoro <p className="sidebar-dx mb-2">Notizie principali</p>
            </li>

            <li>
              Lamborghini ritocca il logo <p className="sidebar-dx mb-2">1 giorno fa</p>
            </li>

            <li>
              Canva ci aggiunge Affinity <p className="sidebar-dx mb-2">7 giorni fa</p>
            </li>

            <li>
              Worldpay integra Satispay <p className="sidebar-dx mb-2">20 ore fa</p>
            </li>

            <li>
              Private equity in frenata <p className="sidebar-dx mb-2">4 giorni fa</p>
            </li>
            {!showSecondNews && (
              <button className="btn-vedi-altro fw-semibold" onClick={toggleSecondNews}>
                Vedi altro
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  className="bi bi-caret-down-fill ms-1"
                  viewBox="0 0 16 16"
                >
                  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                </svg>
              </button>
            )}
          </ul>
        </div>

        {showSecondNews && (
          <div className="second-news mt-0">
            <ul className="fw-semibold lh-md p-4 sidebar-list mb-0 mt-0 pt-0">
              <li>
                Più sfide per la cybersicurezza <p className="sidebar-dx mb-2">4 giorni fa</p>
              </li>

              <li>
                L'età dell'oro della discografia <p className="sidebar-dx mb-2">4 giorni fa</p>
              </li>

              <li>
                Chi è il nuovo ceo di NTT Data <p className="sidebar-dx mb-2">3 ore fa</p>
              </li>

              <li>
                Giri di poltrona fra maison di moda<p className="sidebar-dx mb-2">5 giorni fa</p>
              </li>

              <li>
                Azimut avrà la sua banca digitale <p className="sidebar-dx mb-2">4 giorni fa</p>
              </li>
              {showSecondNews && (
                <button className="btn-vedi-altro fw-semibold" onClick={toggleLessDetails}>
                  Meno dettagli
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    className="bi bi-caret-up-fill ms-1 mb-1"
                    viewBox="0 0 16 16"
                  >
                    <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                  </svg>
                </button>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default RightSidebar;
