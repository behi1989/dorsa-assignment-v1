import {useState, useEffect} from 'react'

const usePageWidth = () => {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    setWidth(window.innerWidth)

    window.addEventListener('resize', handleWindowSizeChange)

    return () => {
      window.removeEventListener('resize', handleWindowSizeChange)
    }
  }, [])

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth)
  }

  return width
}

export default usePageWidth
