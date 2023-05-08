import {FC} from 'react'

import {IResponse} from '@/types/response'

import StarIcon from '@/assets/icons/star.svg'

const Card: FC<{data: IResponse; loading: boolean}> = ({data, loading}) => {
  if (loading)
    return <span className='w-full text-center text-xs text-grayText font-normal'>Loading</span>
  return (
    <div className='w-full h-auto rounded-lg flex flex-col justify-end items-end'>
      <img
        src={data.reviewsThumbnailUrl}
        alt={data.reviewsTitle}
        className='w-full h-[280px] object-cover rounded-lg'
      />
      <span className='w-full text-xs text-darkText font-bold line-clamp-1 text-right mt-2'>
        {data.reviewsTitle}
      </span>
      <div className='flex justify-start items-center my-2'>
        <span className='text-xs text-darkText font-semibold mr-1'>{data.reviewsRate}</span>
        <img src={StarIcon} alt='star' />
      </div>
    </div>
  )
}

export default Card
