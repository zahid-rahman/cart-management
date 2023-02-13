/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

function FirstOne({ info }: any) {
    return (
        <div className="w-60 bg-white drop-shadow-md rounded-lg hover:shadow-2xl transition hover:duration-700">
            <div className="relative">
                {info.status === "stock-out" ? <>
                    <div className="absolute bg-red-600 right-0 top-0 rounded-tr px-1 text-white text-sm">Stock out</div>

                </> : null}

                {info.status === "limited" ? <>
                    <div className="absolute bg-yellow-400 right-0 top-0 rounded-tr px-1 text-black text-sm">Stock limited</div>

                </> : null}

                {info.status === "featured" ? <>
                    <div className="absolute bg-green-600 right-0 top-0 rounded-tr px-1 text-white text-sm">Featured</div>

                </> : null}

                <img className="object-cover rounded-tl-lg rounded-tr-lg" src="https://www.kindacode.com/wp-content/uploads/2022/06/computer-example.jpg" />
            </div>

            <div className="px-5 py-3 space-y-2">
                <h3 className="text-lg">Super Computer 9064GB RAM</h3>
                <div className="space-x-2">
                    <div className="flex items-center">
                        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        <svg className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        <span>3.9</span>
                        <span title="Add to Favorites" className="text-2xl text-gray-300 hover:text-red-500 duration-300 ml-auto">♥</span>
                    </div>


                </div>
                <p className="space-x-2">
                    <span className="text-2xl font-semibold">$600</span>
                    <span className="text-sm line-through text-gray-500">$1000</span>
                    <span className="text-sm text-red-700">40% off</span>

                </p>
                <div className="flex justify-between items-center">
                    <a href="#" className="w-full px-4 py-2 bg-pink-600 hover:bg-pink-800 text-center text-sm text-white rounded duration-300">
                        Add to Cart</a>
                </div>
            </div>
        </div>

    )
}

const products = [
    {
        status: "stock-out"
    },
    {
        status: "stock-out"
    },
    {
        status: "featured"
    },
    {
        status: "featured"
    },
    {
        status: "limited"
    },
    {
        status: "featured"
    },
    {
        status: "limited"
    }
]


const Test = () => {
    return (
        <div className="grid grid-cols-7 gap-2 flex flex-1 justify-center">
            {products.map((item) => (<FirstOne info={item} />))}
        </div>
    )
}

export default Test;