import React from "react"
///import ReactDom from "react-dom"
import Header from "./Header"
import Footer from "./Footer"
import Note from "./Note"
import notes from "../notes"
function App() {
  return (
    <div>
    <Header/>
      {notes.map((pop)=>{
        return(
          <Note
            key = {pop.id}
            title={pop.title}
            content={pop.content}
          />
        );
      })}
    <Footer/>
    </div>
  );
}

 export default App
