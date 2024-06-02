import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePages from './pages/HomePages'
import HotelsIdPage from './pages/HotelsIdPage'
import RegisterPages from './pages/RegisterPages'
import LoginPage from './pages/LoginPage'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getHotelsThunk } from './store/states/hotels.slice'
import PrincipalHeader from './components/shared/PrincipalHeader'
import ReservationsPage from './pages/ReservationsPage'
import ProtectedRoutes from './pages/ProtectedRoutes'

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    const url = 'https://booking-app-rtjk.onrender.com/hotels'
    dispatch(getHotelsThunk(url))
  }, [])


  return (
    <div className='app'>
      <PrincipalHeader />
      <Routes>
        <Route path='/' element={<HomePages />} />
        <Route path='/hotels/:id' element={<HotelsIdPage />} />
        <Route path='/register' element={<RegisterPages />} />
        <Route path='/login' element={<LoginPage />} />
        <Route element={<ProtectedRoutes />}>
          <Route path='/reservations' element={<ReservationsPage />}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
