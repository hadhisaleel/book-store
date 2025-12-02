import React from 'react'

function Purchase() {
  return (
    <div className='p-10 my-20 mx-5 shadow rounded'>
        {/* book div duplicate */}
        <div className="bg-gray-400 p-5">
           <div className="md:grid grid-cols-[3fr_1fr]">
            <div>
                <h2 className="font-semibold text-2xl">Title</h2>
                                <h3 className=" text-1xl">Author</h3>
                <h4 className=" text-lg text-red-500">$ 400</h4>
                <p className='text-justify'> Abstract Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, aut temporibus minima nihil quibusdam, quia quasi possimus ipsam incidunt laborum assumenda quae facilis officia odit dolor enim, commodi quam dolorum.</p>
                <div className="flex mt-5">
                    {/* purchase */}
                    <img width={'130px'}  src="https://static.vecteezy.com/system/resources/previews/023/629/698/non_2x/web-button-icon-purchase-button-free-png.png" alt="" />
               
                </div>


            </div>
            <div className='px-4 mt-4 md:mt-0'>
                <img className='w-50' src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQvcj1QfY_Ym84t_TrC5W0fbdYmLm6t1b71g6KAEA78UnVdDeXl_-TdSbAo5sLsRGYAvEwK3FAb4o9uqZqkSmKx6JevNZgN7goHU8S8Dt0" alt="book" />
           
            </div>
           </div>

        </div>
    </div>
  )
}

export default Purchase