
import React from "react";
import LikeButton from "./likeButton";
import DislikeButton from "./dislikeButton";
import "../assets/css/style.css"


var Likes = ({id, likes, dislikes}) => {
    return (
          <div className="buttons">
            <LikeButton id={id} likes={likes}/>
            <DislikeButton id={id} dislikes={dislikes}/>
          </div>
      );
}

export default Likes