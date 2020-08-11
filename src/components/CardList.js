import React from "react";
import Card from "./Card";

const CardList = ({ notes }) => {
  return (
    <div>
      {notes.map((note, i) => {
        return (
          <Card
            key={i}
            id={notes[i].id}
            category={notes[i].category}
            name={notes[i].name}
            tag={notes[i].tag}
            example={notes[i].example}
            description={notes[i].description}
          />
        );
      })}
    </div>
  );
};

export default CardList;
