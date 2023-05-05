import usePageWidth from '../hooks/usePageWidth'

const ErrorReporter = () => {
  const width = usePageWidth()

  const reloadApp = () => {
    if ('caches' in window) {
      caches.keys().then((names) => {
        // Delete all the cache files
        names.forEach((name) => {
          caches.delete(name)
        })
      })
    }
    window.location.reload()
  }
  return (
    <div className='w-screen h-screen bg-[rgb(20,23,28)] flex justify-center items-center'>
      <div
        className={`${
          width > 576 ? 'w-[60%]' : 'w-[90%]'
        } min-h-[400px] h-auto xs:min-h-[300px] bg-[rgba(0,0,0,0.2)] rounded-lg flex flex-col justify-center items-center`}
      >
        <div className='text-base font-medium bg-transparent text-white leading-6 text-center '>
          مشکلی در سیستم بوجود آمده است لطفا مجدد تلاش نمایید
        </div>
        <button
          className='w-[160px] h-10 bg-lightBlue text-white font-medium leading-6 mt-5 rounded-lg'
          onClick={reloadApp}
        >
          دوباره تلاش کن
        </button>
      </div>
    </div>
  )
}

export default ErrorReporter
