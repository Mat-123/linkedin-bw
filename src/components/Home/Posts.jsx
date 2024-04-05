import Post from "./Post";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Posts = () => {
  const [raccoltaPost, setRaccoltaPost] = useState([]);
  const [userPosts, setUserPosts] = useState([]);
  let [onlyUserPostsVisible, setUserPostsVisible] = useState(false);
  const user = useSelector((state) => state.user.available); // l'utente personale nel Redux Store
  const toggleUserPosts = () => {
    setUserPostsVisible(!onlyUserPostsVisible);
  };

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
        let ultimoNumero = posts.length - 70;
        let lunghezza = posts.length;
        let postSelezionati = posts.slice(ultimoNumero, lunghezza);
        // console.log('lunghezza',lunghezza )
        // console.log('ultimo raccolto',ultimoNumero )
        let sortArr = postSelezionati.toReversed();
        // console.log('raccolti',sortArr )
        // console.log('lung tutti raccolti', )
        setRaccoltaPost(sortArr);
        setUserPosts(sortArr.filter((post) => user._id === post.user._id));
      })
      .catch((error) => {
        console.log("ERRORE", error);
      });
  };
  useEffect(() => {
    console.log("use effect posts");
    getPosts();
  }, []);

  return (
    <>
      <button className="w-100 bg-none border-0 fs12 btn_filtra_post" onClick={toggleUserPosts}>
        {!onlyUserPostsVisible ? "Mostra solo i miei post" : "Mostra tutti i post"}
      </button>
      {(!onlyUserPostsVisible ? raccoltaPost : userPosts).map((post, i) => {
        return <Post key={i} infoPost={post} editable={user._id === post.user._id} />;
      })}
    </>
  );
};
export default Posts;

// TRACCIA D3
// - GET https://striveschool-api.herokuapp.com/api/posts/ // Ritorna una lista di post esistenti
// - POST https://striveschool-api.herokuapp.com/api/posts/ // Crea un nuovo post. NOTA: ogni utente ha il permesso di modificare solo i propri post
// - GET https://striveschool-api.herokuapp.com/api/posts/{postId} // Ritorna uno specifico post
// - PUT https://striveschool-api.herokuapp.com/api/posts/{postId} // Modifica uno specifico post
// - DELETE https://striveschool-api.herokuapp.com/api/posts/{postId} // Cancella uno specifico post:
