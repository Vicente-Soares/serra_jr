import React from "react";
export default function Card(props){
    return(
        <div class='carta'>
            <div class='titulo_carta'>{ props.titulo }</div>
            <p> Idade: { props.idade } </p>
            <p> Time: { props.time } </p>
            <p> Sobrenome: { props.sobrenome } </p>
        </div >
    )
}