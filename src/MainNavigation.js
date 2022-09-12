import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { Login, Register, Home, Movies, MovieDetails, ManageMoviePage } from './Pages'

const MainNavigation = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/' element={<Home/>}/>
            <Route path='/movies' element={<Movies/>}/>
            <Route path='/details' element={<MovieDetails/>}/>
            <Route path='/manage-movie' element={<ManageMoviePage/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default MainNavigation