import {FC, ReactElement} from 'react'
import usePageWidth from '../../hooks/usePageWidth'

interface IInput {
  name: string
  placeholder?: string
  shortPlaceholder?: string
  value?: string
  href?: string
  hasIcon?: boolean
  type?: 'text' | 'password' | 'email' | 'tel' | 'submit' | 'file' | undefined
  onChange?: Function
  onBlur?: Function
  onClickButton?: () => any
  hasButton?: boolean
  buttonText?: string
  extraClass?: string
  inputClass?: string
  svgIcon?: () => ReactElement
  style?: {}
  readOnly?: boolean
}

const Input: FC<IInput> = ({
  hasIcon = false,
  name,
  placeholder,
  shortPlaceholder,
  value,
  type = 'text',
  href,
  onChange,
  onBlur,
  hasButton = false,
  onClickButton,
  buttonText,
  extraClass = '',
  style,
  readOnly,
  svgIcon,
  inputClass,
}) => {
  const width = usePageWidth()

  return (
    <div
      className={`flex flex-row justify-start items-center mx-auto rounded-[3px] bg-transparent text-start relative ${extraClass}`}
    >
      {hasIcon && svgIcon && svgIcon()}
      <input
        type={type}
        onChange={(e) => onChange && onChange(e.target.value)}
        onBlur={() => onBlur && onBlur()}
        name={name}
        placeholder={width <= 486 ? shortPlaceholder : placeholder}
        value={value}
        style={style}
        className={`w-full h-[46px] px-3 rounded text-sm focus:outline-none border border-cBorder bg-white pr-10 ${inputClass}`}
        readOnly={readOnly}
      />
      {hasButton && (
        <>
          {href && href?.length > 0 ? (
            <a className='absolute px-3 top-0 bottom-0 m-1' href={href}>
              {buttonText}
            </a>
          ) : (
            <div className='absolute px-3 top-0 bottom-0 m-1' onClick={onClickButton ?? undefined}>
              {buttonText}
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default Input
