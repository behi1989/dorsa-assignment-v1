import {FC, useState, useEffect, useCallback} from 'react'
import {motion} from 'framer-motion'
import InfiniteScroll from 'react-infinite-scroll-component'

import {
  useGetByPageMutation,
  useGetReviewsQuery,
  useSortByMutation,
} from '@/store/slices/reviewsSlice'

import {Radio} from '@/components/UI'
import Card from '@/components/Card'
import Modal from '@/components/Modal'
import Filters from '@/components/Filters'

import {IResponse} from '@/types/response'

const Home: FC = () => {
  const [allReview, setAllReview] = useState<IResponse[]>([])
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [orderBy, setOrderBy] = useState<string>('newest')
  const [page, setPage] = useState<number>(1)
  const [maxPageCount, setMaxPageCount] = useState<number>(0)
  const [hasMore, setHasMore] = useState<boolean>(true)

  const {data: reviews, isLoading, error} = useGetReviewsQuery()
  const [sortBy, {data: sortedData}] = useSortByMutation()
  const [getByPage, {data: dataByPaginate, isSuccess}] = useGetByPageMutation()

  useEffect(() => {
    console.log('review')
    if (reviews?.data) {
      setAllReview(reviews?.data)
      setMaxPageCount(reviews?.max_num_pages)
    }

    if (sortedData?.data) {
      setAllReview(sortedData?.data)
      setMaxPageCount(sortedData?.max_num_pages)
    }
  }, [reviews, sortedData])

  useEffect(() => {
    console.log('page')
    getByPage(page)
    dataByPaginate?.data && setAllReview(allReview.concat(dataByPaginate?.data))
  }, [page])

  const handleOrderByFilter = (e: any) => {
    setOrderBy(e.target.value)
    sortBy(e.target.value)
    setIsOpen(false)
    setPage(1)
  }

  const fetchMoreData = useCallback(() => {
    if (page === maxPageCount) {
      setHasMore(false)
    }
    setPage((page) => page + 1)
  }, [page])

  return (
    <>
      <Filters filterBy={() => setIsOpen(true)} />
      <div className='w-full relative'>
        <InfiniteScroll
          dataLength={allReview.length}
          hasMore={hasMore}
          next={fetchMoreData}
          loader={
            <p className='fixed bottom-0 left-0 right-0 bg-[rgba(255,255,255,0.5)] p-4 text-sm text-darkText font-semibold text-center'>
              در حال دریافت اطلاعات
            </p>
          }
          endMessage={
            <p className='text-sm text-darkText font-semibold text-center'>به انتهای لیست رسیدی!</p>
          }
          className='w-full my-4 px-4 grid grid-cols-2 gap-4'
        >
          {allReview?.map((review, index) => (
            <Card key={`$${index}-${review.id}`} data={review} loading={isLoading} />
          ))}
        </InfiniteScroll>

        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{
            duration: 5,
            ease: 'easeOut',
          }}
          exit={{opacity: 0}}
        >
          {isOpen && (
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} title='مرتب‌سازی بر اساس'>
              <div className='w-full flex flex-col justify-start items-start gap-2 pb-4'>
                <Radio
                  label='بیشترین امتیاز'
                  name='sortFilter'
                  value='rate'
                  onChange={handleOrderByFilter}
                  defaultChecked={orderBy === 'rate'}
                />
                <Radio
                  label='بیشترین بازدید'
                  name='sortFilter'
                  value='view'
                  onChange={handleOrderByFilter}
                  defaultChecked={orderBy === 'view'}
                />
                <Radio
                  label='جدیدترین'
                  name='sortFilter'
                  value='newest'
                  onChange={handleOrderByFilter}
                  defaultChecked={orderBy === 'newest'}
                />
              </div>
            </Modal>
          )}
        </motion.div>
      </div>
    </>
  )
}

export default Home
