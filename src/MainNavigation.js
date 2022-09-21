import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { Login, Register, Home, Movies, MovieDetails, ManageMoviePage, BookingPage, CheckoutPage, ProfilePage, TicketPage } from './Pages'

const MainNavigation = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/' element={<Home/>}/>
            <Route path='/movies' element={<Movies/>}/>
            <Route path='/details/:id' element={<MovieDetails/>}/>
            <Route path='/manage-movie' element={<ManageMoviePage/>}/>
            <Route path='/booking' element={<BookingPage/>}/>
            <Route path='/checkout' element={<CheckoutPage/>}/>
            <Route path='/profile' element={<ProfilePage/>}/>
            <Route path='/ticket' element={<TicketPage/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default MainNavigation