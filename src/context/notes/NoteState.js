import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) =>{

    const notesInitial = [
        {
          "_id": "663c76e2adef8ecd28d76026",
          "user": "663b1d416762314e7c374ca7",
          "title": "My First note",
          "description": "This is my first note description",
          "tag": "firstnote",
          "date": "2024-05-09T07:10:26.288Z",
          "__v": 0
        },
        {
          "_id": "663c76f0adef8ecd28d76028",
          "user": "663b1d416762314e7c374ca7",
          "title": "My second note",
          "description": "This is my second note description",
          "tag": "secondnote",
          "date": "2024-05-09T07:10:40.069Z",
          "__v": 0
        }
      ];

     const [notes, setNotes] = useState(notesInitial)

    return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;