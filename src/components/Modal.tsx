import {Dispatch, FC, ReactElement, SetStateAction} from 'react'
import ReactDom from 'react-dom'

interface IModal {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
  position: 'top' | 'bottom'
  children: ReactElement
  title: string
}

const Modal: FC<Partial<IModal>> = ({
  children,
  isOpen,
  setIsOpen,
  position = 'bottom',
  title = '',
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
        <div
          className={`w-full max-w-[480px] h-auto min-h-[200px] mx-auto flex flex-col bg-white shadow-sm fixed ${
            position === 'top' ? 'top-0 rounded-b-3xl' : 'bottom-0 rounded-t-3xl'
          } left-0 right-0`}
        >
          <span className='w-16 mx-auto mt-3 border-b-2 border-solid border-lightBorder'></span>
          <span className='text-lg text-darkText font-semibold px-4 py-5 text-right'>{title}</span>
          <div className='w-full px-4 pb-4 text-right'>{children}</div>
        </div>
      </div>
    </>,
    document.getElementById('portal')!
  )
}

export default Modal
