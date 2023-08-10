import React from "react";

function Posision() {

  function ClickPosision (props){
    props.updateBoard(props.loc, props.turn);
  }
  return (
    <div className={"Posición" + this.props.loc} onClick={()=>this.ClickPosision(this.props)}>
        <p>{this.props.value}</p>
        
        
    </div>
  );

};

export default Posision;