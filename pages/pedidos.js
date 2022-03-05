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
     //here select food 
     const [seleciona, setseleciona] = useState('')
     
     const save = async() =>{
         const form ={
             Nome:'aaa',
             Email:'bbb',
             whatshap:'434324234'
         }
     
      try{   
     const response = await fetch('/api/save', {
             method:'POST',
             body: JSON.stringify(form)
         })
         const data = await response.json()
         console.log(data)
        }catch(err){
            
        }
     } 

    return <>
    
    <Head>
     <title>Pedidos</title>
     </Head> 
 
    
    <div className="mx-auto text-center bg-blue-400 opacity-75">
       <Link href='/'>
           <img id="icone" src="icon.jpg.jpg"></img>
      </Link>
          <h1 className="font-bold text-center">Sabor Vegano</h1>
       
    </div> 
       

    
       <div className="w-48 mx-auto py-4">
       <h1 className="font-bold">Pedidos</h1>

        <form  method="get" action="formulario">
        <label className="font-bold text-center">Seu Nome</label>
        <input className="bg-blue-100 p-4 rounded-lg block py-4 m-3" type='text' placeholder="Nome"  name='Nome' ></input>
        
        <label className="font-bold text-center">E-mail</label>
        <input className="bg-blue-100 p-4 rounded-lg block py-4 m-3" type='email' placeholder="Email"   name='Email'></input>
        
        <label className="font-bold text-center">Whatsaap</label>
        <input className="bg-blue-100 p-4 rounded-lg block py-4 m-3" type='number' placeholder="Celular"  name='Celular' ></input>
       
        <label className="font-bold text-center">Endereço</label>
        <input className="bg-blue-100 p-4 rounded-lg block py-4 m-3" type='text' placeholder="Endereço"   name='Endereço'></input>
        </form>   

         
         <h1 className="font-bold">Selecione Pedido:</h1>
        <select className="m-4" one={seleciona} onChange={e=>setseleciona(e.target.value)}>
         <Option  menu='Super Vegano: R$:35.90 ' />
         <Option  menu='Hamburger Vegano:  R$:45.90 ' />
         <Option  menu='Picadão Vegano: R$:65.90 ' />
         
         </select>
        

           <p className="font-bold">Voce selecionou:{seleciona} </p>
            
            
            <button onClick={save} className='bg-blue-400 px-12 py-4 ml-12 m-4 font-white rounded-lg hover:shadow hover:bg-red-500 ' >Comprar</button>
       </div>
       

                   <div className=" bg-black h-20  mx-auto text-center m-4 mt-24"> 
                     <footer>
                         <h1 id='footer'>Desenvolvido por: Felipe Martins </h1>
                         <h1 id='footer' >Github: <a href="https://github.com/felipe-programador-18">Fe-Prog-18 </a> </h1>
                         <h1 id='footer' >Linkedln: <a href="https://www.linkedin.com/in/felipe-martins-programador/"> Felipe Martins</a> </h1>
                      </footer>
                     </div>
    
       
       
       </>
}





export default Pedidos