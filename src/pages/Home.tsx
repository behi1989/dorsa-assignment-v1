import {FC, useState, useEffect, useCallback, lazy} from 'react'
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
import Toast from '@/components/Toast'

import {IResponse} from '@/types/response'

const NotFound = lazy(() => import('./NotFound'))

const Home: FC = () => {
  const [allReview, setAllReview] = useState<IResponse[]>([])
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [orderBy, setOrderBy] = useState<string>('newest')
  const [page, setPage] = useState<number>(1)
  const [maxPageCount, setMaxPageCount] = useState<number>(1)
  const [hasMore, setHasMore] = useState<boolean>(true)

  const {data: reviews, isLoading, error: reviewsError} = useGetReviewsQuery()
  const [sortBy, {data: sortedData, error: sortedDataError}] = useSortByMutation()
  const [getByPage, {data: dataByPaginate, error: dataByPaginateError}] = useGetByPageMutation()

  useEffect(() => {
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
    if (page === maxPageCount && maxPageCount > 1) {
      setHasMore(false)
    }
    setPage((page) => page + 1)
  }, [page])

  if (reviewsError || sortedDataError || dataByPaginateError) {
    return <NotFound />
  }

  return (
    <>
      <Filters filterBy={() => setIsOpen(true)} />
      <div className='w-full relative'>
        <InfiniteScroll
          dataLength={allReview.length}
          hasMore={hasMore}
          next={fetchMoreData}
          loader={<Toast text='در حال دریافت داده‌ها' mode='dark' />}
          endMessage={<Toast text='به انتهای لیست رسیدی!' mode='dark' />}
          className='w-full px-4 grid grid-cols-2 gap-4'
        >
          {allReview?.map((review, index) => (
            <Card key={`$${index}-${review.id}`} data={review} loading={isLoading} />
          ))}
        </InfiniteScroll>

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
      </div>
    </>
  )
}

export default Home
