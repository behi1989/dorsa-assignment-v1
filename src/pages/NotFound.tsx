import {Link} from 'react-router-dom'
import {useTranslation} from 'react-i18next'

const NotFound = () => {
  const {t} = useTranslation()
  return (
    <div className='w-full h-[calc(100vh-60px)] flex justify-center items-center'>
      <div className='w-2/4 min-h-[400px] h-auto xs:min-h-[300px] dark:bg-lighterText bg-lightGray shadow-md rounded-lg flex flex-col justify-center items-center'>
        <div className='text-base font-medium bg-transparent dark:text-white/50 text-lightText leading-6 text-center '>
          {t('notFound')}
        </div>
        <Link to='/' className='bg-transparent'>
          <button className='w-[160px] h-10 bg-lightBlue text-white font-medium leading-6 mt-5 rounded-lg'>
            {t('mainPage')}
          </button>
        </Link>
      </div>
    </div>
  )
}

export default NotFound
