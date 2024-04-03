export const FETCH_PROFILE = "FETCH_PROFILE";
export const FETCH_OTHER_PROFILE = "FETCH_OTHER_PROFILE";
export const SAVE_PROFILE = "SAVE_PROFILE";

export const getProfile = () => {
  return (dispatch, getState) => {
    fetch("https://striveschool-api.herokuapp.com/api/profile/me", {
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
          type: FETCH_PROFILE,
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

export const getOtherProfile = (parametro) => {
  return (dispatch, getState) => {
    let url = "https://striveschool-api.herokuapp.com/api/profile/";
    let userdId = parametro;
    let urlCompleta = url + userdId;
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
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBiYzRlZGEyODFkODAwMTlhM2VjNTIiLCJpYXQiOjE3MTIwNDczNDEsImV4cCI6MTcxMzI1Njk0MX0._hbN8joRmo0ilM2j3j5Be52RH2nTsa2Ys4TZJvVoaUw",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((resp) => {
        if (resp.ok) {
          // Invia l'azione per aggiornare lo stato locale con i nuovi dati del profilo
          dispatch({
            type: SAVE_PROFILE,
            payload: formData,
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
