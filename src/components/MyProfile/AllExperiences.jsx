import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom"; // Importa useParams

function AllExperiences() {
  const { userId } = useParams(); // Estrae userId dall'URL

  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`, {
          method: "GET",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBiYzRlZGEyODFkODAwMTlhM2VjNTIiLCJpYXQiOjE3MTIwNDczNDEsImV4cCI6MTcxMzI1Njk0MX0._hbN8joRmo0ilM2j3j5Be52RH2nTsa2Ys4TZJvVoaUw",
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          const data = await response.json();
          setExperiences(data);
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [userId]); // Aggiorna useEffect per dipendere da userId

  return (
    <Card style={{ width: "100%" }}>
      <Card.Body>
        <div className="d-flex justify-content-between">
          <Card.Title>Tutte le Esperienze</Card.Title>
        </div>
        <div>
          <Row>
            {experiences && experiences.length > 0 ? (
              experiences.map((experience) => (
                <Col xs={12} key={experience._id}>
                  <Card
                    style={{ width: "100%" }}
                    className="m-1 h-100 border-start-0 border-end-0 border-top-0 rounded-0"
                  >
                    <div>
                      <h6>{experience.role}</h6>
                      <Card.Subtitle className="mb-2 text-muted">{experience.company}</Card.Subtitle>
                      <Card.Text>
                        {experience.startDate.split("-")[0]} -{" "}
                        {experience.endDate ? experience.endDate.split("-")[0] : "Presente"}
                      </Card.Text>
                    </div>
                  </Card>
                </Col>
              ))
            ) : (
              <p>Nessuna esperienza disponibile</p>
            )}
          </Row>
        </div>
      </Card.Body>
    </Card>
  );
}

export default AllExperiences;
