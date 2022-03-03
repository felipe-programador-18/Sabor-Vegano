import React from "react"
import Link from "next/link"

const Sobre = () =>{
     
   return <>
    <div className="mx-auto text-center bg-green-400 opacity-75">
      <Link href='/'>
      <img id="icone" src="icon.jpg.jpg"></img>
      </Link>
        <h1 className="bold text-lg">Sabor Vegano</h1>
         
    </div> 
    
    <div className="mx-auto text-center pt-4 px-8">
      <div className="bg-blue-100 text-center">
        <p className="capitalize">O Restaurante Sabor Vegano, foi criado com a ideia de satisfazer e apaixonar o povo vegano.
         Com diversas receitas, elaboramos algumas com gosto peculiares.</p>
         <p className="capitalize">A ideia surgiu em 2019, onde no ínicio era apenas um sonho. Hoje em 2022 Estamos realizando um sonho, Afinal demoro né? Antes tarde do que nunca haha.</p>
         <p>Esperamos que vocês gostem.</p>
      </div>

                
        
    </div>
    
     <div className="mx text-center">
     <p id="super" className="text-center capitalize m-4">Super Vegano</p>
      <img className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ..." id="prato" src="prato.jpg"></img>
    
      <div className="mx-auto">
      <p className="text-center capitalize m-4">
       Ingredientes:Arroz, feixe-cru e verduras.
       </p>
      </div>
       
      
      <img className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ..." id="prato" src="prato.jpg" src="ham.jpg"></img>
      <div className="mx-auto">
      <p className="text-center capitalize m-4">
       Ingredientes:Arroz, feixe-cru e verduras.
       </p>
      </div>


      <img className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ..." id="prato" src="prato.jpg" src="ham.jpg" src="fran.jpg"></img>
      <div className="mx-auto">
      <p className="text-center capitalize m-4">
       Ingredientes:Arroz, feixe-cru e verduras.
       </p>
      </div>

    
      </div>
    
   </> 

}

export default Sobre