import React from 'react'

const Loading = () => {
  return (
    <div className='bg-main w-full h-full absolute top-0 left-0 z-[999] flex items-center justify-center'>
        <img src="./assets/spinner-main.svg" alt="" />
    </div>
  )
}

export default Loading