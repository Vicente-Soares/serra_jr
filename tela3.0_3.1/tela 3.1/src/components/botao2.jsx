import React from "react";
function action_botao() {
  var x = document.getElementById("tela 3.0");
 
}
export default function Botao(props){
    return(
        <button className='botao' onClick={() => {action_botao()}} >{props.Titulo}</button> 
    )
}