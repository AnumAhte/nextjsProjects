import Link from 'next/link'
function Home(){
  return(
   <>
    <h1 className='p-2 bg-green-500' style={{textAlign:'center', margin:'10px',fontSize:'2rem'}}>Home Page</h1><br/>
    <p>I'm excited to dive into my first Next.js project! This powerful framework offers a great blend of server-side rendering and static site generation, making it perfect for creating fast, dynamic web applications. I'll be exploring features like routing, API routes, and optimized performance. It's a fantastic opportunity to enhance my skills and build something innovative. Can't wait to see where this journey takes me!</p>
    <h3>To go on about page click the link below</h3><br/>
    <Link className='p-2 bg-yellow-200' href={'/about'}> about page link</Link><br/><br/>
    <h3>To go on navbar click the link below</h3><br/>
    <Link className='p-2 bg-yellow-200' href={'/navbar'}> navbar page link</Link><br/><br/>
    <h3>To go on contact page click the link below</h3><br/>
    <Link className='p-2 bg-yellow-200' href={'/contact'}> contact page link</Link><br/><br/>
    <h3>To go on footer page click the link below</h3><br/>
    <Link className='p-2 bg-yellow-200' href={'/footer'}> footer page link</Link><br/>
    </>
  )


}
export default Home