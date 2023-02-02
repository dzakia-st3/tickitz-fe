import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { AuthLogout } from '../../Redux/actions/Auth'
import './style.css'
import Swal from 'sweetalert2'
import SearchBar from './Search'
import MainLogoPurple from '../img/Tickitz 1.png'
import logoUser from "../img/user.png"
import logout from "../img/logout.png"
import profile from '../img/1658089852664.jpg'

const Navbar = () => {
  const { data, error, loading, isLogin } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [open, setOpen] = useState(false)

  return (
    <div className='nav-before'>
      <div className='nav-left'>
        {data?.role === 'admin' ? (
          <>
            <Link to={'/'}><img src={MainLogoPurple} /></Link>
            <div className='nav-left-text-admin'>
              <Link to={'#'}>Dashboard</Link>
              <Link to={'/manage-movie'}>Manage Movie</Link>
              <Link to={'#'}>Manage Schedule</Link>
            </div>
          </>
        ) : (
          <>
            <Link to={'/'}><img src={MainLogoPurple} /></Link>
            <div className='nav-left-text'>
              <Link to={'/'}>Home</Link>
              <Link to={'/movies'}>List Movie</Link>
            </div>
          </>
        )}
      </div>
      <div className='nav-right'>
        {isLogin ? (
          <>
            <SearchBar />
            <div className='profile'>
              <div>
                <img src={profile} onClick={() => setOpen(true)} />
              </div>
              <div className='dropdown-menu'>
                {open ? (
                  <ul onClick={() => setOpen(false)}>
                    <li>
                      <Link to={'/movies'}>
                        <img src={logoUser}></img>
                        Profile</Link></li>
                    <hr />
                    <li onClick={() => {
                      dispatch(AuthLogout())
                      Swal.fire({
                        icon: 'success',
                        title: '',
                        text: 'Logout Success',
                      })
                      navigate('/')
                    }}><Link to={'/movies'}>
                        <img src={logout}></img>
                        Logout</Link></li>
                  </ul>)
                  : ''}
              </div>
            </div>
          </>
        ) : (
          <button className='btn1'><Link to={'/login'}>Sign Up</Link></button>
        )}
      </div>
      <div for="nav-check" className="nav-toggler">
        <input type="checkbox" />
        <span></span>
        <span className="mid"></span>
        <span></span>
      </div>
    </div>
  )
}

export default Navbar