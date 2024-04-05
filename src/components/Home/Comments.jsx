import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOtherProfile } from "../../redux/actions";
import { useState, useEffect } from "react";

const Comments = (props) => {
  const [users, setUsers] =useState([])
  const dispatch = useDispatch();
  // useEffect(()=>{
  //     dispatch(getOtherProfile());
  //     console.log("dispatch per cercare utenti");
  // },[])

  // const otherUser = useSelector((state) => state.otherProfile.other); // l'utenti nel Redux Store
  // console.log("altri utenti", otherUser);
  // const foundUser = otherUser.find(
  //   (element) => element.username === props.array.author
  // );
  // console.log('utente trovato', foundUser)
  // console.log('commento autore', props.array.author)





  let data = props.array.createdAt.slice(11);
  // console.log('data slice', data)
  // vera ora
  let ora = data.slice(0, 5);
  // console.log('ora slice', ora)
  let provadata = props.array.createdAt.slice(0, 10);
  return (
    <>
      <div className="profile-icon">
        {/* Icona circolare del profilo */}
        {/* <Link to={"/utente/" + foundUser._id}> */}
        {/* <img
          src={
            foundUser.image
                ? foundUser.image
                : 
            
            ``
          }
          alt="Profile Icon"
        /> */}
        {/* </Link> */}
      </div>
      <div className="bordComment py-2 pe-1">
        <div className="d-flex">
        <p className="fs14 nome roboto-medium">{props.array.author}</p>
        <p className="fs12 ms-auto" style={{ color: "#666666" }}>
          {ora} {provadata}
        </p>
        </div>
        
        {/* <p className="fs12" style={{ color: "#666666" }}>
          {foundUser.bio ? foundUser.bio : ""}
        </p> */}
        <p className="fs14 nome">{props.array.comment}</p>
        <p className="fs12" style={{ color: "#666666" }}>
          {props.array.rate}
        </p>
      </div>
    </>
  );
};
export default Comments;
