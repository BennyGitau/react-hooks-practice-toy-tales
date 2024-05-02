import React from "react";

function ToyCard({toy}) {
  const {name, image, likes} = toy

  if(!toy){
    return <h1>Loading...</h1>
  }
  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={toy}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn">Like {"<3"}</button>
      <button className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
