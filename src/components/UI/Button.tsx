import {FC, ReactElement} from 'react'

export interface ButtonProps {
  text: string
  onClick?: (e?: any) => void
  extraClass?: string
  disabled?: boolean
  isLoading?: boolean
  // spinerColor?: 'blue' | 'white' | 'black' | 'green' | 'gray'
  spinerText?: string
  icon?: () => ReactElement
  direction?: 'ltr' | 'rtl'
  id?: string
  type?: 'submit' | 'button'
}

const Button: FC<ButtonProps> = ({
  text,
  disabled = false,
  onClick,
  extraClass = '',
  // spinerColor = 'white',
  spinerText,
  isLoading = false,
  direction = 'ltr',
  icon,
  id,
  type = 'button',
}) => {
  const handelOnClick = () => {
    if (typeof onClick !== 'undefined') {
      if (typeof isLoading !== 'undefined' && !isLoading) {
        onClick()
      }
    }
  }
  return (
    <button
      type={type}
      className={`w-max p-2 h-10 rounded focus:outline-none border-none cursor-pointer flex ${
        direction === 'ltr' ? 'flex-row' : 'flex-row-reverse'
      } bg-bluePurple text-white text-sm font-normal ${extraClass}`}
      onClick={handelOnClick}
      disabled={disabled}
      id={id}
    >
      {icon && icon()}
      {isLoading ? (
        <div className=''>
          <span>{spinerText}</span>
          {/* <Spinner color={spinerColor} /> */}
        </div>
      ) : (
        <span className='text-inherit bg-transparent'>{text}</span>
      )}
    </button>
  )
}

export default Button
