import React from 'react'

const Loading = () => {
  return (
    <div className='w-full w-max-[480px] h-[calc(100vh-60px)] flex justify-center items-center'>
      <div className='loading'>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Loading
