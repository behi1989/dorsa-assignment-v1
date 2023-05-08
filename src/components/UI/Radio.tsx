import {FC} from 'react'

interface IRadio {
  label: string
  name: string
  disable: boolean
  id: string
  value: string
  defaultChecked: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Radio: FC<Partial<IRadio>> = ({
  label,
  name,
  disable = false,
  id,
  value,
  defaultChecked,
  onChange,
  ...rest
}) => {
  return (
    <label htmlFor={id} className='radio'>
      <input
        id={id}
        type='radio'
        name={name}
        disabled={disable}
        value={value}
        defaultChecked={defaultChecked}
        {...rest}
        onChange={onChange}
      />
      {label}
      <span className='checkmark'></span>
    </label>
  )
}

export default Radio
