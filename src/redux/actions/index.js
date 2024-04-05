export const FETCH_PROFILE = "FETCH_PROFILE";
export const FETCH_OTHER_PROFILE = "FETCH_OTHER_PROFILE";
export const SAVE_PROFILE = "SAVE_PROFILE";

export const getProfile = () => {
  return (dispatch, getState) => {
    fetch("https://striveschool-api.herokuapp.com/api/profile/me", {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBlYzVmYjEzZGYwYTAwMTk0OWY1OGIiLCJpYXQiOjE3MTIyNDQyMTksImV4cCI6MTcxMzQ1MzgxOX0.rFL8x1EdBXk5cXLx5V1jW6V2YTHy_0lLODn5-0_z7KE",
      },
    })
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("Errore nel recupero libri");
        }
      })
      .then((fetchProfile) => {
        console.log("GETSTATE, SECONDO PARAMETRO DELLA FUNZIONE ASINCRONA", getState());
        //   setBooks(fetchedBooks) // non setto più uno stato locale!
        // ma dispatcho un'azione trasportando i libri ottenuti
        let image = fetchProfile.image || "ghost_person.png";
        let fetchProfileCopy = { ...fetchProfile, image: image };
        dispatch({
          type: FETCH_PROFILE,
          payload: fetchProfileCopy, // l'oggetto del profilo ottenuto
          // questo per invocare il reducer senza incertezze, in modo da svincolarlo da possibilità di fallimento!
        });
        console.log("dati fetch", fetchProfile);
      })
      .catch((error) => {
        console.log("ERRORE", error);
      });
  };
};

export const getOtherProfile = (parametro) => {
  return (dispatch, getState) => {
    let url = "https://striveschool-api.herokuapp.com/api/profile/";
    let userdId = parametro;
    let urlCompleta = url + userdId;
    console.log('parametro', parametro)
    console.log('url completa', urlCompleta)
    if(userdId === undefined){
      urlCompleta = url
      console.log('url', urlCompleta)
    }
    fetch(urlCompleta, {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBiYzRlZGEyODFkODAwMTlhM2VjNTIiLCJpYXQiOjE3MTIwNDczNDEsImV4cCI6MTcxMzI1Njk0MX0._hbN8joRmo0ilM2j3j5Be52RH2nTsa2Ys4TZJvVoaUw",
      },
    })
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("Errore nel recupero libri");
        }
      })
      .then((fetchProfile) => {
        console.log("GETSTATE, SECONDO PARAMETRO DELLA FUNZIONE ASINCRONA", getState());
        //   setBooks(fetchedBooks) // non setto più uno stato locale!
        // ma dispatcho un'azione trasportando i libri ottenuti
        dispatch({
          type: FETCH_OTHER_PROFILE,
          payload: fetchProfile, // l'array del profilo ottenuto
          // questo per invocare il reducer senza incertezze, in modo da svincolarlo da possibilità di fallimento!
        });
        console.log("dati fetch", fetchProfile);
      })
      .catch((error) => {
        console.log("ERRORE", error);
      });
  };
};

export const saveProfile = (formData) => {
  return (dispatch) => {
    fetch("https://striveschool-api.herokuapp.com/api/profile/", {
      method: "PUT",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBlYzVmYjEzZGYwYTAwMTk0OWY1OGIiLCJpYXQiOjE3MTIyNDQyMTksImV4cCI6MTcxMzQ1MzgxOX0.rFL8x1EdBXk5cXLx5V1jW6V2YTHy_0lLODn5-0_z7KE",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((resp) => {
        if (resp.ok) {
          let image = formData.image || "ghost_person.png";
          let formDataCopy = { ...formData, image: image };
          // Invia l'azione per aggiornare lo stato locale con i nuovi dati del profilo
          dispatch({
            type: SAVE_PROFILE,
            payload: formDataCopy,
          });
          console.log("Profile saved successfully");
        } else {
          throw new Error("Error saving profile");
        }
      })
      .catch((error) => {
        console.log("ERROR", error);
      });
  };
};
