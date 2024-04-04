import Post from "./Post";
import { useState, useEffect } from "react";

const Posts = () => {
  const [raccoltaPost, setRaccoltaPost] = useState([]);
  const getPosts = () => {
    fetch("https://striveschool-api.herokuapp.com/api/posts/", {
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
      .then((posts) => {
        // console.log("dati fetch POSTS", posts);
        // let numRandom1= Math.floor(Math.random() * 1240)
        
        // console.log('numero casuale 1', numRandom1)
        // let numSlice = numRandom1 + 20
        let ultimoNumero = posts.length - 70
        let lunghezza = posts.length
        let postSelezionati = posts.slice(ultimoNumero, lunghezza)
        // console.log('lunghezza',lunghezza )
        // console.log('ultimo raccolto',ultimoNumero )
        let sortArr = postSelezionati.toReversed()
        // console.log('raccolti',sortArr )
        // console.log('lung tutti raccolti', )
        setRaccoltaPost(sortArr);
      })
      .catch((error) => {
        console.log("ERRORE", error);
      });
  };
  useEffect(() => {
    console.log("use effect posts");
    getPosts();
  }, []);

  return raccoltaPost.map((post, i) => {
    return <Post key={i} infoPost={post} />;
  });
};
export default Posts;
