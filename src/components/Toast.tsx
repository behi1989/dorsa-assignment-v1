import {FC} from 'react'

interface IToast {
  text: string
  position: 'top' | 'bottom'
  mode: 'light' | 'dark'
  extraClass: string
}

const Toast: FC<Partial<IToast>> = ({text, position = 'bottom', mode = 'light', extraClass}) => {
  return (
    <>
      <div
        className={`fixed ${
          position === 'bottom' ? 'bottom-2' : 'top-2'
        } left-1/2 -translate-x-1/2 ${
          mode === 'light'
            ? 'bg-[rgba(255,255,255,0.7)] text-darkText'
            : 'bg-[rgba(0,0,0,0.7)] text-lightWhite'
        } text-sm text-darkText font-semibold text-center px-6 py-2 rounded-full ${extraClass}`}
      >
        {text}
      </div>
    </>
  )
}

export default Toast
