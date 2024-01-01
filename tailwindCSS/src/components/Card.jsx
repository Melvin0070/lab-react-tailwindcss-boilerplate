import React from 'react'

function Card() {
  return (
    <div>
      <div className=" max-w-sm mx-auto my-7">
      <img
        className="w-full"
        src="https://kalvium.com/wp-content/uploads/2022/07/Logo-nav.png"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl">Kalvium store</div>
        <p className="text-gray-500 text-sm mt-2">You have a new course</p>
      </div>
    </div>
    </div>
  )
}

export default Card