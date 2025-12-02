import React from 'react'
import Header from '../components/Header';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

function Home() {
  return (
    <>
    <Header/>
    <div>
      {/* landing part */}
     <div style={{height:"500px"}} className='flex justify-center items-center flex-col bg-[url(/bg2.jpg)] bg-cover bg-center text-white'>
     <div style={{height:"500px",backgroundColor:'rgba(0,0,1,10,20)'}} className=' w-full flex justify-center items-center flex-col  '>
<h1 className='text-5xl font-bold mb-2'> Wonderful Gifts</h1>
<p>Gift your family and freinds a book</p>
{/* search */}
<div className="mt-9 flex items-center">
  <input type="text" className="bg-white rounded-3xl text-black w-100 placeholder-grey-500 p-2" placeholder='Search Books here' />
  <button style={{marginLeft:'-40px'}} className="text-grey-500"> <FaSearch/></button>
</div>
      </div> 
      </div>
      {/* new arroval */}
      <section className='md:px-40 p-5 my-5 flex flex-col justify-center items-center'>
        <h1 className="text-3xl font-bold">NEW ARRIVAL</h1>
        <h2 className="text-2xl">Explore Our Latest Collection</h2>
<div className="md:grid grid-cols-4 w-full mt-10">
  {/* dublicate book card div */}
  <div className="shadow rounded p-3 mx-4">
    <img width={'300px'} height={'300px'} src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf.webp?ts=1734004864" alt="" />
    <div className="flex justify-center items-center flex-col mt-4">
      <h3 className="text-blue-600 font-bold text-lg">Author</h3>
      <h4 className="text-lg">title</h4>
      <h4>$price</h4>
    </div>
  </div>
  <div className="shadow rounded p-3 mx-4">
    <img width={'300px'} height={'300px'} src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf.webp?ts=1734004864" alt="" />
    <div className="flex justify-center items-center flex-col mt-4">
      <h3 className="text-blue-600 font-bold text-lg">Author</h3>
      <h4 className="text-lg">title</h4>
      <h4>$price</h4>
    </div>
  </div>
  <div className="shadow rounded p-3 mx-4">
    <img width={'300px'} height={'300px'} src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf.webp?ts=1734004864" alt="" />
    <div className="flex justify-center items-center flex-col mt-4">
      <h3 className="text-blue-600 font-bold text-lg">Author</h3>
      <h4 className="text-lg">title</h4>
      <h4>$price</h4>
    </div>
  </div>
  <div className="shadow rounded p-3 mx-4">
    <img width={'300px'} height={'300px'} src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf.webp?ts=1734004864" alt="" />
    <div className="flex justify-center items-center flex-col mt-4">
      <h3 className="text-blue-600 font-bold text-lg">Author</h3>
      <h4 className="text-lg">title</h4>
      <h4>$price</h4>
    </div>
  </div>
</div>
{/* all book link */}
<Link to={'/books'} className='p-3 bg-black text-white'>Explore More</Link>

      </section>

      {/* author */}
      <section className='md:px-40 p-5 my-5 md:grid grid-cols-2 items-center gap-10'>
        {/* author content */}
        <div className="text-center">
          <h1 className="text-2xl font-bold">FEATURED AUTHORS</h1>
          <h2 className="text-xl">Captivates With Every World</h2>

          <p className='text-justify mt-9'> Johnathan Miles is an internationally acclaimed author known for his captivating storytelling and deep emotional insight. With over a decade of writing experience, he has published multiple bestselling novels that explore themes of love, loss, self-discovery, and the human spirit. His writing style blends poetic language with realistic characters, making every story feel personal and unforgettable.</p>
                    <p className='text-justify mt-5'>Johnathan believes that books have the power to change lives, inspire minds, and connect people across the world. When he isn’t writing, he spends his time traveling, teaching young writers, and researching new cultures to add depth to his stories. Through every page he writes, his mission remains the same — to touch hearts and remind readers that everyone has their own unique story worth telling.</p>

        </div>
        {/* author image */}
     <div className="p-5 flex justify-center items-center">
      <img src="https://online.maryville.edu/wp-content/uploads/sites/97/2023/09/author-brainstorms-idea.jpg" alt="" className="w-full" />
     </div>
      </section>
      {/* testimonial */}
      <section className='md:px-40 p-5 my-5 flex flex-col justify-center items-center'>
        <h1 className="text-3xl font-bold">TESTIMONIALS</h1>
        <h2 className="text-2xl">See What Other Are Saying</h2>
        <div className="my-5 flex justify-center items-center flex-col">
          {/* user image */}
          <img width={'200px'} height={'200px'} style={{borderRadius:'50%'}} src="https://cdn-dlmfn.nitrocdn.com/WjhRAZnhnJlaJhMwVcEPYwfxtpYISNzb/assets/images/optimized/rev-afac40e/booksloveme.com/wp-content/uploads/2020/08/09-10-2022-20-14-18.webp" alt="" />
          {/* feedback */}
          <p className="mt-5">Lucas Alexander</p>
          <p className="text-justify mt-4">
            <span className="font-bold me-2">This website has completely transformed my reading experience.</span>
            The book recommendations are thoughtful, meaningful, and perfectly suited to my interests. Every review feels honest and deeply researched, making it easier to discover books that truly resonate with me. I can confidently say that this is the best platform for passionate readers who want to explore new stories and connect with literature on a deeper level.
          </p>
        </div>


      </section>
    </div>
    <Footer/>
</>
  )
}

export default Home