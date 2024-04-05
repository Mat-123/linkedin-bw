import { Form } from "react-bootstrap";
import { CiFaceSmile } from "react-icons/ci";
import Button from 'react-bootstrap/Button'

import { useState, useEffect } from "react";

const initialSearch = {
  text: "",
};

const AddComment = () => {

  const [commento, setCommento]=useState('')

const sendComment = ()=>{
  fetch("https://striveschool-api.herokuapp.com/api/comments/", {
    method: "POST",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBlYzVmYjEzZGYwYTAwMTk0OWY1OGIiLCJpYXQiOjE3MTIyNDQyMTksImV4cCI6MTcxMzQ1MzgxOX0.rFL8x1EdBXk5cXLx5V1jW6V2YTHy_0lLODn5-0_z7KE",
    },
  })
    .then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error("Errore nell invio del commento");
      }
    })
    .then((fetchProfile) => {
     
    })
    .catch((error) => {
      console.log("ERRORE", error);
    });
}


  return (
    <div className="add-comment d-flex mt-2">
      <img
        className="mb-3"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX///8AAADl5eWZmZk0NDTBwcFCQkJUVFT7+/sWFhbx8fFHR0f4+PhNTU0/Pz+AgIChoaE6OjqTk5NlZWVXV1fq6uq9vb15eXnOzs6pqamxsbHU1NQLCwsRERFxcXHd3d0iIiJnZ2csLCx0dHSJiYl8rjlGAAACuUlEQVR4nO3bjXKiMBSGYYKiglgU/NmqVbfu/V/jFtdpdQUJIc5JmPe5gvNNYkJOYhAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACgg9U6z85Fcc4GUSJdywtEG3Vrn/2SrsiqyVw9it+ly7LnvSLfZSDX0pXZEb7VBPwy7sMPMqrPV9pJ19fZ9nlApSLpCjtqDOh7xF1zQKVC6So7mMQ6CRfSZXaQ6QRUai5dp7GVXkClvN0zNIdQqYF0pYYmugHVXrpUQw17/S1P933tSertNB3pJzxI12pGP6AaStdqpkXCWLpWMy0SfkjXaqb/s3Sqn9DTlab/u0X/d/xUP6F0qaY2zdG8nqRBEOom9Pb0pLvWeDuEX+enD52Anm6G//S+E6XVTfT9iqb3HeEgWPd7BEvhsD7f1N994k7V7eHFVroya9J8/xgv9rcRXGn9+y7e/uD/CvMgPW4Hh2K8LDbzbTiRruZFkiQJj6skSaULeYF0Nz+Mfm6ihst8vZKuyaJwUNnQ+Dz35LcYzer3wzj3f0Pcftbnu8j8nq3RqSFf6Y90leaSQiOf8vjlUMM3961CulYj2n2oUuzfMThdtAmo/DsnJjpLzD2/niqGWi2o/+TSVbewqjgs9Spi2rTL1/Flok6ePCht4MlyczAO6EnvVKNFWs+H/rf2dUy1TLr+Zi3utis5f1naaY6WXJ+nLe596zi+ZeTdE7p95a3/4PIJpwextn/fhtNPwEw+uB85/GWjdeXbzOETf4tXUE+52xO3FNDdW7ejrYTOPuSr+59he9JJ6mi2RzW42ge3FtDZ/cJeQkffgVlbaJTaSGep1uLFbJOZdJZq9pZSdZLOUs3KZ/eVdJZqNs6GbiccnIZXi29v30ZX06vZrfGPZWkqnQUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMBxfwF/lR5vieyHDgAAAABJRU5ErkJggg=="
        alt=""
        style={{
          width: "46px",
          height: "46px",
          borderRadius: "50%",
          border: "1px solid #c1c1c1",
        }}
      />
      <Form style={{ width: "440px" }}>
        <Form.Group className="ms-2 mt-1" controlId="exampleForm.ControlInput1">
          <div style={{ position: "relative" }}>
            <Form.Control
              className="rounded-pill h-75"
              type="text"
              placeholder="Aggiungi un commento..."
              onChange={(e) => {
                setCommento({
                  ...commento,
                  text: e.target.value,
                });
                console.log("campo di testo", commento.text);
              }}/>
            {/* Aggiungi l'icona SVG come componente React */}
           
            <CiFaceSmile
              className="fs-5 me-1"
              style={{
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            />
          </div>
        </Form.Group>
      </Form>
      <Button variant="primary" size="sm" type='submit' onClick={()=>{

      }}>Pubblica</Button>
    </div>
  );
};

export default AddComment;


