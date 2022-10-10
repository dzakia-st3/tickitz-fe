import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { GetMovies } from '../../Redux/actions/Movies'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { Loading, EmptyState } from '../../helper/WaitingState'

const Movies = () => {
    const dispatch = useDispatch()
    const [query, setQuery] = useSearchParams()
    const [paginate, setPaginate] = useState({ page: query.get('page') ?? 1, limit: 5 })

    useEffect(() => {
        dispatch(GetMovies(paginate))
    }, [paginate])

    const { data, error, loading } = useSelector((state) => state.movies)
    let totalPages = Array(data.totalPage).fill() ?? []
    if (loading) {
        return (<Loading />)
    }
    if (error) {
        return (<EmptyState />)////
    }

    const handlePaginate = (page) => {
        setPaginate((prevState) => ({ ...prevState, page }))
        query.set('page', page)
        setQuery(query)
    }

    return (
        <>
            <section className="view-all">
                <div className="top-upcoming">
                    <div className="top-left-upcoming">
                        <h3>List Movies</h3>
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
                {data.loading ? (<Loading />) : (
                    <div className="viewAll">
                        {!data?.result?.length ? (
                            <EmptyState />
                        ) : data?.result?.map((item) => {
                            return (
                                <div className="cardVA" >
                                    <img className='' src={`${process.env.REACT_APP_URL_BE}/uploads/${item.image}`} alt={item.title} title={item.title} />
                                    <h3>{`${item.title}`}</h3>
                                    <h4>{`${item.categories}`}</h4>
                                    <button className='btn-upcoming'><Link to={`/details/${item.id}`}>Details</Link></button>
                                </div>
                            )
                        })}
                    </div>
                )}
                <div className='pagination'>
                    {totalPages.map((item, index) => {
                        return <button className={`button-3 btn-page ${paginate.page === index + 1 ? `btn-before` : `btn-after`}`} onClick={() => handlePaginate(index + 1)}>{index + 1}</button>
                    })}
                </div>
            </section>
        </>
    )
}

export default Movies


