import React from "react";
import Link from "next/link";

const Pedidos = () => {
    return <>
       <div className="mx-auto text-center inline">
       <h1>Pedidos</h1>

        <form  method="get" action="formulario">
        <input className="block" type='text' placeholder="nome"></input>
        <input className="inline" type='email' placeholder="e-mail"></input>
        <input className="inline" type='number' placeholder="Digite seu cpf"></input>
        <input className="inline" type='number' placeholder="Celular"></input>
        <input className="inline" type='text' placeholder="Endereço"></input>
        </form>   

       </div>
       </>
}





export default Pedidos