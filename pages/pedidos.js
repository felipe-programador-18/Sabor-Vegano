import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";


const Option = (props) =>{
    return(
        <option>
        {props.menu}
        </option>
        )
}


const Pedidos = () => {
    
    const [seleciona, setseleciona] = useState('')
    return <>
    
    <Head>
     <title>Pedidos</title>
     </Head> 
 
    
    <div className="mx-auto text-center bg-blue-400 opacity-75">
       <Link href='/'>
           <img id="icone" src="icon.jpg.jpg"></img>
      </Link>
          <h1 className="bold text-lg">Sabor Vegano</h1>
       
    </div> 
       

    
       <div className="w-48 mx-auto py-4">
       <h1 className="font-bold">Pedidos</h1>

        <form  method="get" action="formulario">
        <label className="font-bold text-center">Seu Nome</label>
        <input className="bg-blue-100 p-4 rounded-lg block py-4 m-3" type='text' placeholder="nome"></input>
        
        <label className="font-bold text-center">E-mail</label>
        <input className="bg-blue-100 p-4 rounded-lg block py-4 m-3" type='email' placeholder="e-mail"></input>
        
        <label className="font-bold text-center">Whatsaap</label>
        <input className="bg-blue-100 p-4 rounded-lg block py-4 m-3" type='number' placeholder="Celular"></input>
       
        <label className="font-bold text-center">Endereço</label>
        <input className="bg-blue-100 p-4 rounded-lg block py-4 m-3" type='text' placeholder="Endereço"></input>
        </form>   

         
         <h1 className="font-bold">Selecione Pedido:</h1>
        <select className="m-4" one={seleciona} onChange={e=>setseleciona(e.target.value)}>
         <Option  menu='Super Vegano: R$:35.90 ' />
         <Option  menu='Hamburger Vegano:  R$:45.90 ' />
         <Option  menu='Picadão Vegano: R$:65.90 ' />
         
         </select>
        

           <p className="font-bold">Voce selecionou:{seleciona} </p>

       </div>
       
    
       
       
       </>
}





export default Pedidos