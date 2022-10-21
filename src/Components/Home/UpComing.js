import React from 'react'
import { useEffect } from 'react'
import { GetMoviesUC } from '../../Redux/actions/Movies'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Loading, EmptyState } from '../../helper/WaitingState'
import './style.css'


const Upcoming = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(GetMoviesUC())
    }, [])

    const { data, error, loading } = useSelector((state) => state.movies)

    if (loading) {
        return (<Loading />)
    }
    if (error) {
        return (<EmptyState />)
    }

    return (
        <>
            <section className='upcoming'>
                <div className="top-upcomings">
                    <div className="top-left-upcoming">
                        <h3>Upcoming Movies</h3>
                    </div>
                    <div className="top-right-upcoming">
                        <Link to='/movies'>view all</Link>
                    </div>
                </div>
                <div className="month">
                    <div className="box">September</div>
                    <div className="box">October</div>
                    <div className="box">November</div>
                    <div className="box">December</div>
                    <div className="box">January</div>
                    <div className="box">February</div>
                    <div className="box">March</div>
                    <div className="box">April</div>
                    <div className="box">May</div>
                    <div className="box">June</div>
                    <div className="box">July</div>
                    <div className="box">August</div>
                </div>
                {loading ? (<Loading />) : (
                    <div className="movie-upcoming">
                        {!data?.result?.length ? (
                            <EmptyState />
                        ) : data?.result?.map((item) => {
                            return (
                                <div className="card2">
                                    <img className='' src={`${process.env.REACT_APP_URL_BE}/uploads/${item.image}`} alt={item.title} title={item.title} />
                                    <h3>{`${item.title}`}</h3>
                                    <h4>{`${item.categories}`}</h4>
                                    <button className='btn-upcoming'><Link to={`/details/${item.id}`}>Details</Link></button>
                                </div>
                            )
                        })}
                    </div>
                )}
            </section>
        </>
    )
}

export default Upcoming