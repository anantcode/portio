import React from "react";
import Card from "./Card";
import { people } from "./people";

const Cardlist = () => {
  const cards = people.map((user) => {
    return <Card id={user.id} name={user.name} email={user.email} />;
  });

  console.log("HEHE " + cards);

  return <div>{cards}</div>;
};

export default Cardlist;
