import Post from "./Post";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getPosts } from "../../redux/actions";

const Posts = () => {
  const [raccoltaPost, setRaccoltaPost] = useState([]);
  const [userPosts, setUserPosts] = useState([]);
  const [postChangedIndex, setPostChangedIndex] = useState(null);

  let [onlyUserPostsVisible, setUserPostsVisible] = useState(false);
  const user = useSelector((state) => state.user.available); // l'utente personale nel Redux Store
  const toggleUserPosts = () => {
    setUserPostsVisible(!onlyUserPostsVisible);
  };

  useEffect(() => {
    console.log("use effect posts");
    getPosts().then((posts) => {
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
    });
  }, [postChangedIndex]);

  return (
    <>
      <button className="w-100 bg-none border-0 fs12 btn_filtra_post" onClick={toggleUserPosts}>
        {!onlyUserPostsVisible ? "Mostra solo i miei post" : "Mostra tutti i post"}
      </button>
      {(!onlyUserPostsVisible ? raccoltaPost : userPosts).map((post, i) => {
        return (
          <Post
            key={i}
            infoPost={post}
            editable={user._id === post.user._id}
            postIndex={i}
            setPostChangedIndex={setPostChangedIndex}
          />
        );
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
