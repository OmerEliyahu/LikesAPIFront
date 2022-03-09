import React, { useState } from "react";
import likeIcon from '../assets/like.png'
import "../assets/css/style.css"
import axios from 'axios';


var LikeButton = ({id, likes}) => {
  const [likesCount, setLikesCount] = useState(likes);

  const updateCount =  () => {
    axios.post(`http://127.0.0.1:8000/like/${id}/`)
        .then(response => setLikesCount(response.data))
        .catch(error => {
            console.error('There was an error!', error);
        });
  }

  return (
    <div className="disLike">
            <h3>Likes:{likesCount}</h3>
          <button onClick={updateCount} className='like_button'><img className="likes_img" src={likeIcon} alt="Dislike button"/></button>
    </div>
)}

export default LikeButton