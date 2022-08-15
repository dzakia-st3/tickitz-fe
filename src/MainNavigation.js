import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home, Movies, MovieDetails } from './Pages'

const MainNavigation = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/movies' element={<Movies/>}/>
            <Route path='/details' element={<MovieDetails/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default MainNavigation