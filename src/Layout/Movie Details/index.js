import React from "react";
import Layout from '../../Components/Layout global/Layout'
import { Detail, Showtime } from "../../Components/Movie Details";

const MovieDetails = () => {
    return (
        <Layout>
            <Detail />
            <div style={{ 
                backgroundColor: '#e3e5e9',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
                }}>
                <Showtime />
            </div>
        </Layout>
    )
}

export default MovieDetails