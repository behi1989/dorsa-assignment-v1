import {useNavigate} from 'react-router-dom'
import ArrowBackIcon from '@/assets/icons/arrow_right.svg'

const Header = () => {
  const navigate = useNavigate()

  return (
    <header className='w-full sticky top-0 left-0 right-0 z-10 flex flex-col justify-center items-end bg-white px-4'>
      <div
        className='h-16 flex justify-start items-center cursor-pointer'
        onClick={() => navigate(-1)}
      >
        <span className='text-sm font-medium text-grayText mr-2'>بازگشت</span>
        <img src={ArrowBackIcon} alt='back' />
      </div>
    </header>
  )
}

export default Header
