import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { GetMoviesbyId } from '../../Redux/actions/Movies'
import './style.css'

const Details = () => {
    let { id } = useParams()

    const dispatch = useDispatch()

    const { data } = useSelector((state) => state.movies)

    const dataMovie = data?.data?.data[0]

    useEffect(() => {
        dispatch(GetMoviesbyId(id))
    }, [])


    return (
        <div className='details'>
            <div className="card3">
                <img className='' src={`${process.env.REACT_APP_URL_BE}/uploads/${dataMovie?.image}`} alt={dataMovie?.title} title={dataMovie?.title} />
            </div>
            <div className='card4'>
                <div>
                    <div>
                        <h2>{dataMovie?.title}</h2>
                        <h3>{dataMovie?.categories}</h3>
                    </div>
                    <div className='text2'>
                        <div>
                            <div>
                                <h5>Release date</h5>
                                <h4>{dataMovie?.release_date.slice(0, 10)}</h4>
                            </div>
                            <div style={{
                                marginTop: 50
                            }}>
                                <h5>Duration</h5>
                                <h4>{`${dataMovie?.duration_hour} hours ${dataMovie?.duration_minute} minutes`}</h4>
                            </div>
                        </div>
                        <div style={{
                            marginLeft: 50
                        }}>
                            <div>
                                <h5>Directed by</h5>
                                <h4>{dataMovie?.directed_by}</h4>
                            </div>
                            <div style={{
                                marginTop: 50
                            }}>
                                <h5>Casts</h5>
                                <h4>{`${dataMovie?.cast}, ...`}</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div>{dataMovie?.synopsis}</div>
            </div>

        </div>
    )
}

export default Details
