import {Link} from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='w-full h-[calc(100vh-64px)] flex justify-center items-center'>
      <div className='w-3/4 min-h-[400px] h-auto xs:min-h-[300px] dark:bg-lighterText bg-lightGray shadow-md rounded-lg flex flex-col justify-center items-center'>
        <div className='text-base font-medium bg-transparent dark:text-white/50 text-lightText leading-6 text-center '>
          متاسفانه چیزی یافت نشد!
        </div>
        <Link to='/' className='bg-transparent'>
          <button className='w-[160px] h-10 bg-lightPurple text-white font-medium leading-6 mt-5 rounded-lg'>
            صفحه اصلی
          </button>
        </Link>
      </div>
    </div>
  )
}

export default NotFound
