import React from "react";

const Card = (props) => {
  let { name, email, id } = props;

  //let url = "https://robohash.org/YOUR-TEXT.png";
  let url = `https://robohash.org/${id}.png?size=200x200`;
  //   let url = `https://api.adorable.io/avatars/200/${props.email}.png`;

  return (
    <div className="tc bg-blue dib br3 pa3 ma2 bw2 shadow-5 grow">
      <img src={url} alt="robo-image" />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
