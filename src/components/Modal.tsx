import {Dispatch, FC, ReactElement, SetStateAction} from 'react'
import {motion} from 'framer-motion'
import ReactDom from 'react-dom'

interface IModal {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
  position: 'top' | 'bottom'
  children: ReactElement
  title: string
  style: object
}

const dropIn = {
  hidden: {
    y: '200vh',
    opacity: 0,
  },
  visible: {
    y: '100vh',
    opacity: 1,
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: '200vh',
    opacity: 0,
  },
}

const Modal: FC<Partial<IModal>> = ({
  children,
  isOpen,
  setIsOpen,
  position = 'bottom',
  title = '',
  style,
}) => {
  if (!isOpen) return null

  const overlayHandler = (e: any) => {
    if (e.target.id === 'modalWrapper') {
      setIsOpen && setIsOpen(false)
    }
  }

  return ReactDom.createPortal(
    <>
      <div
        id='modalWrapper'
        className='w-full max-w-[480px] mx-auto fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm z-50'
        onClick={overlayHandler}
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          className='modal'
          variants={dropIn}
          initial='hidden'
          animate='visible'
          exit='exit'
          style={style}
        >
          <div
            className={`w-full max-w-[480px] h-auto min-h-[200px] mx-auto flex flex-col bg-white shadow-sm fixed ${
              position === 'top' ? 'top-0 rounded-b-3xl' : 'bottom-0 rounded-t-3xl'
            } left-0 right-0`}
          >
            <span className='w-16 mx-auto mt-3 border-b-2 border-solid border-lightBorder'></span>
            <span className='text-lg text-darkText font-semibold px-4 py-5 text-right'>
              {title}
            </span>
            <div className='w-full px-4 pb-4 text-right'>{children}</div>
          </div>
        </motion.div>
      </div>
    </>,
    document.getElementById('portal')!
  )
}

export default Modal
