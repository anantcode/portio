import React from "react";
import Card from "./Card";

const Cardlist = ({ people }) => {
  const cards = people.map((user) => {
    return (
      <Card key={user.id} id={user.id} name={user.name} email={user.email} />
    );
  });
  return <div>{cards}</div>;
};

export default Cardlist;
