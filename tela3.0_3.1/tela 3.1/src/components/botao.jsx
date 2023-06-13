import React from "react";
function action_botao() {
  var x = document.getElementById("card");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
export default function Botao(props){
    return(
        <button className='botao' onClick={() => {action_botao()}} >{props.Titulo}</button> 
    )
}