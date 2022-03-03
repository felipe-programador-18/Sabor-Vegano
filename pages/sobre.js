import React from "react"
import Link from "next/link"

const Sobre = () =>{
     
   return <>
    <div className="mx-auto text-center bg-green-400 opacity-75">
      <Link href='/'>
      <img id="icone" src="icon.jpg.jpg"></img>
      </Link>
        <h1 className="italic text-lg">Sabor Vegano</h1>
         
    </div> 
    
    <div className="mx-auto text-center pt-4 px-8">
      <div className="bg-blue-100 text-center">
        <p>O Restaurante Sabor Vegano, foi criado com a ideia de satisfazer e apaixonar o povo vegano.
         Com diversas receitas, elaboramos algumas com gosto péculiares</p>
      </div>
    </div>
    
    
   </> 

}

export default Sobre