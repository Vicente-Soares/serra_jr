import React from "react";
function action_botao2() {
  var x = document.getElementById("tela 3.0");
 
}
export default function Botao2(props){
    return(
        <button className='botao' onClick={() => {action_botao2()}} >{props.Titulo}</button> 
    )
}