import React from "react"

function Note(pop){

    return(

      <div className ="note">
        <h1>{pop.title}</h1>
        <p>{pop.content}</p>
      </div>

    );

}
export default Note;
