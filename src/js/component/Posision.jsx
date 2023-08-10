import React from "react";

function Posision(props) {

  return (
    <div>
    </div>
  );

  function ClickPosision (props){
    props.updateBoard(props.loc, props.turn);
    
  }
}

export default Posision;