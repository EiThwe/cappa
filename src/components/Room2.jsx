import React from 'react'
import "./Room.css"

const Room2 = ({id,name,price,time,img}) => {
  return (
    <div className=''>
        {/* background image  */}
      <div className="backgroundImg w-[95%]  relative  overflow-hidden  " >
        <img src={img} className='w-full h-full hover:bg-black   hover:opacity-60  hover:scale-125 transition-all  duration-1000' alt="" />
            <div className="absolute flex flex-col gap-3 bottom-5 left-5 text-white ">
            <h6 className='text-[15px] uppercase tracking-[4px] font-semibold'>{price}$ / {time}</h6>
            <h2 className='text-[27px] font-gilda font-medium' >{name}</h2>
            <div className="underLine2"></div>
            </div>
      </div>
    </div>
  )
}

export default Room2
