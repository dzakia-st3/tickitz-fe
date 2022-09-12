import React, { useState, useEffect } from "react";
import moment from 'moment';
import { useDispatch, useSelector, } from "react-redux/es/exports";
import { AddMovies, UpdateMovies } from "../../../../Redux/actions/Movies";
import { GetMovies } from "../../../../Redux/actions/Movies";
import { useSearchParams } from "react-router-dom";
import Swal from "sweetalert2";
import './style.css'


const DataMovie = () => {
    const { data, error, loading } = useSelector((state) => state.movies)
    const { data : dataCUD } = useSelector((state) => state.moviesCud)
    console.log (dataCUD, 'cel data CUD')
    console.log(data, 'cek isi movie di admin')

    const [query, setQuery] = useSearchParams()
    const [paginate, setPaginate] = useState({ page: query.get('page') ?? 1, limit: 5 })

    const { data: dataAuth } = useSelector((state) => state.auth)
    console.log(dataAuth, 'cek isi data auth')

    const [openForm, setOpenForm] = useState(false)
    const [openAddForm, setOpenAddForm] = useState(false)

    const token = dataAuth.token
    console.log(token, 'cek isi token')

    const [refetch, setRefetch] = useState(false)

    useEffect(() => {
        dispatch(GetMovies(paginate))
    }, [paginate])

    const dispatch = useDispatch()
    const [formUpdateData, setUpdateData] = useState({
        image: null,
        title: "",
        categories: "",
        release_date: "",
        directed_by: "",
        duration_hour: "",
        duration_minute: "",
        cast: "",
        synopsis: "",
    })
    console.log(formUpdateData, 'cekUpdateData')

    const release_date_modif_update = moment(formUpdateData.release_date).format('YYYY-MM-DD')

    const formDataUpdate = new FormData()
    formDataUpdate.append('image', formUpdateData.image);
    formDataUpdate.append('title', formUpdateData.title);
    formDataUpdate.append('categories', formUpdateData.categories);
    formDataUpdate.append('release_date', release_date_modif_update);
    formDataUpdate.append('duration_hour', formUpdateData.duration_hour);
    formDataUpdate.append('duration_minute', formUpdateData.duration_minute);
    formDataUpdate.append('cast', formUpdateData.cast);
    formDataUpdate.append('synopsis', formUpdateData.synopsis);


    const handleUpdateMovie = (e) => {
        e.preventDefault()
        dispatch(UpdateMovies(formDataUpdate, token, data.result[0].id))

        console.log(data.result[0].id, 'cek id di update')
        console.log(formUpdateData, 'cek isi data update di handle')
        setRefetch(!refetch)
    }

    const [formAddData, setAddData] = useState({
        image: null,
        title: "",
        categories: "",
        release_date: "",
        directed_by: "",
        duration_hour: "",
        duration_minute: "",
        cast: "",
        synopsis: "",
    })
    console.log(formAddData, 'cekAddData')

    const release_date_modif = moment(formAddData.release_date).format('YYYY-MM-DD')

    const formData = new FormData()
    formData.append('image', formAddData.image);
    formData.append('title', formAddData.title);
    formData.append('categories', formAddData.categories);
    formData.append('release_date', release_date_modif);
    formData.append('duration_hour', formAddData.duration_hour);
    formData.append('duration_minute', formAddData.duration_minute);
    formData.append('cast', formAddData.cast);
    formData.append('synopsis', formAddData.synopsis);


    const handleAddMovie = (e) => {
        e.preventDefault()
        dispatch(AddMovies(formData, token))

        console.log(formData, 'cek isi data add di handle')
        setRefetch(!refetch)
    }

    let totalPages = Array(data.totalPage).fill() ?? []
    console.log(totalPages, 'total Page')

    const handlePaginate = (page) => {
        setPaginate((prevState) => ({ ...prevState, page }))
        query.set('page', page)
        setQuery(query)
    }


    return (
        <div className="data-movie">
            <button className="btn-add" onClick={() => setOpenAddForm(true)}>Add New Movie</button>
            <div className="cards-movie">
                {data?.result?.map((item) => {
                    return (
                        <div className="card-movie" >
                            <h3>{`${item.title}`}</h3>
                            <img className="card-movie-list"
                                src={`https://starfish-app-2mjf6.ondigitalocean.app/uploads/${item.image}`} alt={item.title} title={item.title} />
                            <button className="btn-edit" onClick={() => setOpenForm(true)}>Edit</button>
                            <button className='btn-delete'>Delete</button>
                        </div>
                    )
                })}
            </div>
            {openForm ? (
                <div className="form-update">
                    <div className="form-update-inner">
                        <div className="form-top">
                            <p className="text-form-top">Form Movie</p>
                            <div className="close-button" onClick={() => setOpenForm(false)}>X</div>
                        </div>
                        <hr />
                        <form onSubmit={(e) => handleUpdateMovie(e)}>
                            <div className="modal-body">
                                <div className="mb-3">
                                    <label for="title" className="form-label">Title</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="title"
                                        onChange={(e) => {
                                            setUpdateData(prevState => ({
                                                ...prevState,
                                                title: e.target.value
                                            }))
                                        }} />
                                </div>
                                <div className="mb-3">
                                    <label for="image" className="form-label">image</label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        id="image"
                                        onChange={(e) => {
                                            setUpdateData(prevState => ({
                                                ...prevState,
                                                image: e.target.files[0]
                                            }))
                                        }} />
                                </div>
                                <div className="mb-3">
                                    <label for="release_date" className="form-label">Release Date</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="release_date"
                                        onChange={(e) => {
                                            setUpdateData(prevState => ({
                                                ...prevState,
                                                release_date: e.target.value
                                            }))
                                        }} />
                                </div>
                                <div className="mb-3">
                                    <label for="duration_hour" className="form-label">Duration Hour</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="duration_hour"
                                        onChange={(e) => {
                                            setUpdateData(prevState => ({
                                                ...prevState,
                                                duration_hour: e.target.value
                                            }))
                                        }} />
                                </div>
                                <div className="mb-3">
                                    <label for="duration_minute" className="form-label">Duration Minute</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="duration_minute"
                                        onChange={(e) => {
                                            setUpdateData(prevState => ({
                                                ...prevState,
                                                duration_minute: e.target.value
                                            }))
                                        }} />
                                </div>
                                <div className="mb-3">
                                    <label for="directed_by" className="form-label">Director</label>
                                    <input
                                        type="text"
                                        className="form-control" id="directed_by"
                                        onChange={(e) => {
                                            setUpdateData(prevState => ({
                                                ...prevState,
                                                directed_by: e.target.value
                                            }))
                                        }} />
                                </div>
                                <div className="mb-3">
                                    <label for="cast" className="form-label">Cast</label>
                                    <input
                                        type="text"
                                        className="form-control" id="cast"
                                        onChange={(e) => {
                                            setUpdateData(prevState => ({
                                                ...prevState,
                                                cast: e.target.value
                                            }))
                                        }} />
                                </div>
                                <div className="mb-3">
                                    <label for="categories" className="form-label">Categories</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="categories"
                                        onChange={(e) => {
                                            setUpdateData(prevState => ({
                                                ...prevState,
                                                categories: e.target.value
                                            }))
                                        }} />
                                </div>
                                <div className="mb-3">
                                    <label for="synopsis" className="form-label">Synopsis</label>
                                    <textarea
                                        rows={10}
                                        className="form-control"
                                        id="synopsis"
                                        onChange={(e) => {
                                            setUpdateData(prevState => ({
                                                ...prevState,
                                                synopsis: e.target.value
                                            }))
                                        }} />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn-save" onClick={handleUpdateMovie}>Save changes</button>
                            </div>
                        </form>
                    </div>
                </div>
            ) : ""}
            {/* Add Movie */}
            {openAddForm ? (
                <div className="form-update">
                    <div className="form-update-inner">
                        <div className="form-top">
                            <p className="text-form-top">Form Movie</p>
                            <div className="close-button" onClick={() => setOpenAddForm(false)}>X</div>
                        </div>
                        <hr />
                        <form onSubmit={(e) => handleAddMovie(e)}>
                            <div className="modal-body">
                                <div className="mb-3">
                                    <label for="title" className="form-label">Title</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="title"
                                        onChange={(e) => {
                                            setAddData(prevData => ({
                                                ...prevData,
                                                title: e.target.value
                                            }))
                                        }} />
                                </div>
                                <div className="mb-3">
                                    <label for="image" className="form-label">image</label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        id="image"
                                        onChange={(e) => {
                                            setAddData(prevData => ({
                                                ...prevData,
                                                image: e.target.files[0]
                                            }))
                                        }} />
                                </div>
                                <div className="mb-3">
                                    <label for="release_date" className="form-label">Release Date</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="release_date"
                                        onChange={(e) => {
                                            setAddData(prevData => ({
                                                ...prevData,
                                                release_date: e.target.value
                                            }))
                                        }} />
                                </div>
                                <div className="mb-3">
                                    <label for="duration_hour" className="form-label">Duration Hour</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="duration_hour"
                                        onChange={(e) => {
                                            setAddData(prevData => ({
                                                ...prevData,
                                                duration_hour: e.target.value
                                            }))
                                        }} />
                                </div>
                                <div className="mb-3">
                                    <label for="duration_minute" className="form-label">Duration Minute</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="duration_minute"
                                        onChange={(e) => {
                                            setAddData(prevData => ({
                                                ...prevData,
                                                duration_minute: e.target.value
                                            }))
                                        }} />
                                </div>
                                <div className="mb-3">
                                    <label for="directed_by" className="form-label">Director</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="directed_by"
                                        onChange={(e) => {
                                            setAddData(prevData => ({
                                                ...prevData,
                                                directed_by: e.target.value
                                            }))
                                        }} />
                                </div>
                                <div className="mb-3">
                                    <label for="cast" className="form-label">Cast</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="cast"
                                        onChange={(e) => {
                                            setAddData(prevData => ({
                                                ...prevData,
                                                cast: e.target.value
                                            }))
                                        }} />
                                </div>
                                <div className="mb-3">
                                    <label for="categories" className="form-label">Categories</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="categories"
                                        onChange={(e) => {
                                            setAddData(prevData => ({
                                                ...prevData,
                                                categories: e.target.value
                                            }))
                                        }} />
                                </div>
                                <div className="mb-3">
                                    <label for="synopsis" className="form-label">Synopsis</label>
                                    <textarea
                                        type="text"
                                        rows={10}
                                        className="form-control"
                                        id="esynopsis"
                                        onChange={(e) => {
                                            setAddData(prevData => ({
                                                ...prevData,
                                                synopsis: e.target.value
                                            }))
                                        }} />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn-save"
                                    onClick={handleAddMovie}>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            ) : ""}
            <div className='pagination'>
                {totalPages.map((item, index) => {
                    return <button className={`button-3 btn-page ${paginate.page === index + 1 ? `btn-before` : `btn-after`}`} onClick={() => handlePaginate(index + 1)}>{index + 1}</button>
                })}
            </div>
        </div>
    )
}

export default DataMovie


