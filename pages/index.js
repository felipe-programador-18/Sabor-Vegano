import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import useSWR from 'swr'

const fetcher = (...args)=> fetch(...args).then(res => res.json())


const Home = () =>{
  const {data, error} = useSWR('/api/get-promo', fetcher)
  return <>
    <Head>
     <title>Home</title>
    </Head>

    <div className='mx-auto bg-red-500 text-center opacity-75'>
           
        <div>
           <Link href='/'>
             <a><img id="icone" src="icon.jpg.jpg"></img> </a>
           </Link>
        </div>
        
      
      <Link  href='/'>
        <a className='italic m-4'>Home</a>
      </Link>

      <Link href='/pedidos'>
      <a className='italic' >Pedidos</a>
      </Link>

      <Link href='/sobre'>
       <a className='italic m-4'>Sobre</a>
      </Link>
         
     </div>
          
     <div className='flex flex-start justify-center opacity-100'>
     
     <div className='bg-green-300 w-48 h-48 m-4 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...'> <img src='file.jpg'></img> 
     
     </div>
     <div className='bg-blue-300 w-48 h-48 m-4 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...'> <img  src='sushi.jpg'></img> </div>
     <div className='bg-violet-700 w-48 h-48 m-4 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...'>  <img  src='vege.jpg'></img> </div>
     <div className='bg-yellow-500 w-48 h-48 m-4 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...'>  <img src='suco.jpg'></img> </div>
   </div>
       
       
          

               
          
               <div className='xl-auto text-center'>
                     
               <video className='mx-auto mb-8 opacity-75 mt-8 '  controls>
                 <source src='movie.mp4.mp4' type='video/mp4'></source>
               </video>
                           
               <Link href='/sobre'>
                 <a className='bg-blue-400 px-12 py-4 m-2 font-bold rounded-lg shadow-lg hover:shadow '>Sobre</a>
               </Link>
               
               </div>

               {!data && <pre><p>Carregando...</p></pre>}
               {data && data.showCoupon &&
                <p className='font-bold text-center mt-8'> {data.mensagem} </p>
                }
    </>
}


export default Home