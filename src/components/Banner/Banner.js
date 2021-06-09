import React, {useEffect, useState} from 'react'
import './Banner.css'
import axios from '../../axios'
import {API_KEY,imageUrl} from '../../constants/constants'

function Banner() {
    const [movie, setMovie] = useState()
    useEffect(() => {
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
        setMovie(response.data.results[Math.floor(Math.random() * response.data.results.length)])
        })
    }, [])
    return (
        <div 
        style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ""})`}}
        className="banner">
            <div className="content">
                <h1 className="title"> {movie ? movie.title : ""}</h1>
                <div className="banner-buttons">
                    <button className="button-play"> <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMyAyMnYtMjBsMTggMTAtMTggMTB6Ii8+PC9zdmc+" className="play" alt="Play" /> PLAY </button>
                    <button className="button-list"> <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptLTEuOTU5IDE3bC00LjUtNC4zMTkgMS4zOTUtMS40MzUgMy4wOCAyLjkzNyA3LjAyMS03LjE4MyAxLjQyMiAxLjQwOS04LjQxOCA4LjU5MXoiLz48L3N2Zz4=" className="list" alt="List"></img> MY LIST</button>
                </div>
                <h1 className="description"> {movie ? movie.overview : ""} </h1>
            </div>
            
        </div>
    )
}

export default Banner

//https://iconmonstr.com/ ICONS