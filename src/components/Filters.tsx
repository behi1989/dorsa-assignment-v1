import {FC} from 'react'

import SortIcon from '@/assets/icons/sort.svg'

interface IFilters {
  title: string
  filterBy: () => void
}

const Filters: FC<Partial<IFilters>> = ({title = 'مرتب سازی', filterBy}) => {
  return (
    <div className='w-full sticky top-16 left-0 right-0 z-10 bg-white flex justify-between items-center px-4'>
      <div className='flex justify-start items-center cursor-pointer' onClick={filterBy}>
        <span className='text-sm text-grayText font-medium mr-2'>{title}</span>
        <img src={SortIcon} alt='sortBy' />
      </div>
      <div className='flex flex-col justify-center items-end'>
        <span className='text-sm text-darkText font-bold'>چیا ببینه؟</span>
        <span className='text-sm text-grayText font-medium'>مناسب برای 3 تا 7 سال</span>
      </div>
    </div>
  )
}

export default Filters
