import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux";
import AddExperiences from "./AddExperiences";
import { Link } from "react-router-dom";
import AllExperiences from "./AllExperiences";

function Experiences() {
  const user = useSelector((state) => state.user.available);
  const userId = user._id;
  const [experiences, setExperiences] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [totalExperiences, setTotalExperiences] = useState(0);

  useEffect(() => {
    fetchData();
  }, [userId]);

  const fetchData = async () => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`, {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBlYzVmYjEzZGYwYTAwMTk0OWY1OGIiLCJpYXQiOjE3MTIyNDQyMTksImV4cCI6MTcxMzQ1MzgxOX0.rFL8x1EdBXk5cXLx5V1jW6V2YTHy_0lLODn5-0_z7KE",
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const data = await response.json();
        setExperiences(data);
        setTotalExperiences(data.length);
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const limitedExperiences = experiences.slice(0, 2);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const updateExperiences = () => {
    fetchData(); // Aggiorna le esperienze richiamando l'API
  };

  return (
    <>
      <Card style={{ width: "100%" }} className="p-0 whiteBck ">
        <Card.Body>
          <div className="d-flex justify-content-between">
            <Card.Title>Esperienze</Card.Title>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="#191919"
                className="bi bi-plus-lg me-3"
                viewBox="0 0 16 16"
                onClick={handleOpenModal}
                style={{ cursor: "pointer" }}
              >
                <path
                  fillRule="evenodd"
                  d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
                />
              </svg>
              <Link to={`/me/all-experiences/${userId}`}>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 16 16"
                  fill="#191919"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ cursor: "pointer" }}
                >
                  <path
                    d="M12.1465 0.146447C12.3417 -0.0488155 12.6583 -0.0488155 12.8536 0.146447L15.8536 3.14645C16.0488 3.34171 16.0488 3.65829 15.8536 3.85355L5.85357 13.8536C5.80569 13.9014 5.74858 13.9391 5.68571 13.9642L0.68571 15.9642C0.500001 16.0385 0.287892 15.995 0.146461 15.8536C0.00502989 15.7121 -0.0385071 15.5 0.0357762 15.3143L2.03578 10.3143C2.06092 10.2514 2.09858 10.1943 2.14646 10.1464L12.1465 0.146447ZM11.2071 2.5L13.5 4.79289L14.7929 3.5L12.5 1.20711L11.2071 2.5ZM12.7929 5.5L10.5 3.20711L4.00001 9.70711V10H4.50001C4.77616 10 5.00001 10.2239 5.00001 10.5V11H5.50001C5.77616 11 6.00001 11.2239 6.00001 11.5V12H6.29291L12.7929 5.5ZM3.03167 10.6755L2.92614 10.781L1.39754 14.6025L5.21903 13.0739L5.32456 12.9683C5.13496 12.8973 5.00001 12.7144 5.00001 12.5V12H4.50001C4.22387 12 4.00001 11.7761 4.00001 11.5V11H3.50001C3.28561 11 3.10272 10.865 3.03167 10.6755Z"
                    fillRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <div>
            <Row>
              {limitedExperiences.map((experience, index) => (
                <Col xs={12} key={experience._id}>
                  <div>
                    <Card
                      style={{ width: "100%" }}
                      className="m-1 h-100 border-start-0 border-end-0 border-bottom-0 rounded-0"
                    >
                      <div className="d-flex flex-row">
                        <div>
                          <img src={experience.image} alt="" className="me-2" style={{ width: "80px" }} />
                        </div>
                        <div>
                          <h6>{experience.role}</h6>
                          <Card.Subtitle className="mb-2 text-muted">{experience.company}</Card.Subtitle>
                          <Card.Text>
                            {experience.startDate.split("-")[0]} -{" "}
                            {experience.endDate ? experience.endDate.split("-")[0] : "Presente"}
                          </Card.Text>
                        </div>
                      </div>
                    </Card>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </Card.Body>

        {experiences.length > 2 && (
          <Card.Footer className="text-center text-decoration-none" style={{ cursor: "pointer" }}>
            <Link to={`/me/all-experiences/${userId}`}>Mostra tutte le Esperienze ({totalExperiences}) →</Link>
          </Card.Footer>
        )}
      </Card>

      <AddExperiences
        userId={userId}
        show={showModal}
        handleClose={handleCloseModal}
        updateExperiences={updateExperiences}
      />
    </>
  );
}

export default Experiences;
