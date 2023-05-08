import {Suspense, lazy} from 'react'
import {Route, Routes} from 'react-router-dom'

import Main from '@/layouts/Main'

import Loading from '@/components/Loading'

const Home = lazy(() => import('@/pages/Home'))
const NotFound = lazy(() => import('@/pages/NotFound'))

const App = () => {
  return (
    <Main>
      <Routes>
        <Route
          path='/'
          element={
            <Suspense fallback={<Loading />}>
              <Home />
            </Suspense>
          }
        />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Main>
  )
}

export default App
