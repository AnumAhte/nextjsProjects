'use client'
import { useRouter } from 'next/navigation'

function Contact(){
   const route= useRouter()
    return(
     <>
       <h1 className='p-4 bg-purple-500' style={{textAlign:'center', margin:'10px',fontSize:'2rem'}}>Contact</h1>
      <h2 className='p-1 bg-purple-200'style={{margin:'10px'}}>To go on footer page click below button</h2>
    <button className='p-4 bg-blue-300'style={{margin:'10px'}} onClick={()=>route.push('/footer')}>Footer Button</button><br/>
    <button className='p-4 bg-purple-300'style={{margin:'10px'}} onClick={()=>route.push('/')}>Go back to home page</button>
      </>
    )
  
  
  }
  export default Contact