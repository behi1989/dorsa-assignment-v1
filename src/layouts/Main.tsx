import {FC, ReactElement} from 'react'
import Header from './Header'

const Main: FC<{children: ReactElement | ReactElement[]}> = ({children}) => {
  return (
    <>
      <main className='w-full h-screen mx-auto bg-lightWhite'>
        <div className='container max-w-[480px] min-h-screen bg-white shadow-sm'>
          <Header />
          {children}
        </div>
      </main>
    </>
  )
}

export default Main
