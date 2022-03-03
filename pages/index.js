import React from 'react'
import Link from 'next/link'

const Home = () =>{
    return <>

    <div className='mx-auto bg-red-500 text-center shadow-md p-4'>
       
      <Link  href='/'>
        <a className='italic m-4'>Home</a>
      </Link>

      <Link href='/pedido'>
      <a className='italic' >Pedidos</a>
      </Link>
         
     </div>
          
     <div className='flex flex-start justify-center opacity-100'>
     
     <div className='bg-green-300 w-48 h-48 m-4'> <img src='file.jpg'></img>  </div>
     <div className='bg-blue-300 w-48 h-48 m-4'> <img  src='sushi.jpg'></img> </div>
     <div className='bg-violet-700 w-48 h-48 m-4'>  <img  src='vege.jpg'></img> </div>
     <div className='bg-yellow-500 w-48 h-48 m-4'>  <img src='suco.jpg'></img> </div>
   </div>
       
    
    </>
}


export default Home