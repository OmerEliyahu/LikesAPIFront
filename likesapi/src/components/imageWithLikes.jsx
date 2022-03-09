import Likes from "./likes";
import "../assets/css/style.css"


var ImageWithLikes = ({image}) => {
    const {url, id, likes, dislikes} = image
    return (
        <div className="img_with_likes">
            <img src={url} alt="pic"/>
            <Likes id={id} likes={likes} dislikes={dislikes}/>
        </div>
    )
}

export default ImageWithLikes;