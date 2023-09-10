import React from "react";

const Card = (props) => {
  // console.log(props.details);
  const { name, last_updated_at, location, gender } = props.details;
  return (
    <div className="flex flex-col w-full shadow-md p-3 rounded-md border">
      <h1 className="font-bold">{name}</h1>
      <div className="flex flex-row gap-2">
        <img src="./images/logo.png" alt="" />
        <p>{last_updated_at}</p>
      </div>
      <div className="flex flex-row gap-2">
        <img src="./images/logo.png" alt="" />
        <p>{location}</p>
      </div>
      <div className="flex flex-row gap-2">
        <img src="./images/logo.png" alt="" />
        <p>{gender}</p>
      </div>
    </div>
  );
};

export default Card;
