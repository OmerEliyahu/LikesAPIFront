import React, { useState } from "react";
import dislikeIcon from '../assets/dislike.png'
import "../assets/css/style.css"
import axios from 'axios';


var DislikeButton = ({id, dislikes}) => {
  const [dislikesCount, setDislikesCount] = useState(dislikes);

  const updateCount =  () => {
    axios.post(`http://127.0.0.1:8000/dislike/${id}/`)
        .then(response => setDislikesCount(response.data))
        .catch(error => {
            console.error('There was an error!', error);
        });
  }

  return (
    <div className="disLike">
            <h3>Dislikes:{dislikesCount}</h3>
          <button onClick={updateCount} className='like_button'><img className="likes_img" src={dislikeIcon} alt="Dislike button"/></button>
    </div>
)}

export default DislikeButton