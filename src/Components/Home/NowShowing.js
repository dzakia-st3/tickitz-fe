import React from 'react'
import { useEffect } from 'react'
import { GetMoviesNS } from '../../Redux/actions/Movies'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Loading, EmptyState } from '../../helper/WaitingState'
import './style.css'


const NowShowing = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(GetMoviesNS())
    }, [])

    const { data, error, loading } = useSelector((state) => state.movies)
    console.log(data, 'cek punya nya NS')

    if (loading) {
        return (<Loading />)
    }
    if (error) {
        return (<EmptyState />)
    }

    return (
        <>
            <section className='nowShowing'>
                <div className="top-ns">
                    <div className="top-left-ns">
                        <h3>Now Showing</h3>
                        <hr />
                    </div>
                    <div className="top-right-ns">
                        <Link to={'/movies'}>view all</Link>
                    </div>
                </div>
                {loading ? (<Loading />) : (
                    <div className="movie-ns">
                        {!data?.result?.length ? (
                            <EmptyState />
                        ) : data?.result?.map((item) => {
                            return (
                                <div className="card">
                                    <img className='' src={`${process.env.REACT_APP_URL_BE}/uploads/${item.image}`} alt={item.title} title={item.title} />
                                </div>
                            )
                        })}
                    </div>
                )}
            </section>
        </>
    )
}

export default NowShowing