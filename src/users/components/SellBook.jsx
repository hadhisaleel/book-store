import React from 'react'

function SellBook() {
  return (
    <div>
        <div className="p-10 my-20 mx-5 bg-gray-200">
            <h1 className="text-center text-3xl font-bold">Book Details</h1>
            <div className="md:grid grid-cols-2 mt-10 w-full">
                <div className="px-3">
                    <div className="mb-3">
                        <input type="text" placeholder='Book Title' className="p-2 bg-white w-full rounded" />
                    </div>
                    <div className="mb-3">
                        <input type="text" placeholder='Author' className="p-2 bg-white w-full rounded" />
                    </div>
                    <div className="mb-3">
                        <input type="text" placeholder='No.of Pages' className="p-2 bg-white w-full rounded" />
                    </div>
                    <div className="mb-3">
                        <input type="text" placeholder='Img URL' className="p-2 bg-white w-full rounded" />
                    </div>
                    <div className="mb-3">
                        <input type="text" placeholder='Price' className="p-2 bg-white w-full rounded" />
                    </div>
                    <div className="mb-3">
                        <input type="text" placeholder='Discount Price' className="p-2 bg-white w-full rounded" />
                    </div>
                     <div className="mb-3">
                        <textarea rows={5} type="text" placeholder='Book Abstract'className="p-2 bg-white w-full rounded" />
                    </div>
                </div>
                <div className="px-3">
                    <div className="mb-3">
                        <input type="text" placeholder='Language' className="p-2 bg-white w-full rounded" />
                    </div>
                     <div className="mb-3">
                        <input type="text" placeholder='Publisher' className="p-2 bg-white w-full rounded" />
                    </div>
                     <div className="mb-3">
                        <input type="text" placeholder='ISBN' className="p-2 bg-white w-full rounded" />
                    </div>
                     <div className="mb-3">
                        <input type="text" placeholder='Catogery' className="p-2 bg-white w-full rounded" />
                    </div>
                    <div className="mb-3 flex justify-center items-center">
                        <label htmlFor='uploadImg'>
                            
                            <input type="file" name="" id="uploadImg" hidden/>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCka4FwusmLbLaS_GPxWiNCse8FAWEDsdIMA&s" alt="" />
                        </label>
                    </div>
                </div>
            </div>
            <div className="flex justify-end">
                <button className='bg-gray-400 text-white p-2 rounded me-5 hover:bg-white hover:text-gray-400'>RESET</button>
                <button  className='bg-blue-400 text-white p-2 rounded me-5 hover:bg-white hover:text-blue-400'>SUBMIT</button>
            </div>
        </div>
    </div>
  )
}

export default SellBook