import React from 'react'
import './Navbar.css'

function Navbar() {
    return (
        <div className="navbar">
            <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix Logo" srcset="" />
            <ul>
                <li> Home </li>
                <li> TV Shows </li>
                <li> Movies </li>
                <li> News & Popular </li>
                <li> My List </li>
            </ul>
            <img className="search" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjMuODA5IDIxLjY0NmwtNi4yMDUtNi4yMDVjMS4xNjctMS42MDUgMS44NTctMy41NzkgMS44NTctNS43MTEgMC01LjM2NS00LjM2NS05LjczLTkuNzMxLTkuNzMtNS4zNjUgMC05LjczIDQuMzY1LTkuNzMgOS43MyAwIDUuMzY2IDQuMzY1IDkuNzMgOS43MyA5LjczIDIuMDM0IDAgMy45MjMtLjYyNyA1LjQ4Ny0xLjY5OGw2LjIzOCA2LjIzOCAyLjM1NC0yLjM1NHptLTIwLjk1NS0xMS45MTZjMC0zLjc5MiAzLjA4NS02Ljg3NyA2Ljg3Ny02Ljg3N3M2Ljg3NyAzLjA4NSA2Ljg3NyA2Ljg3Ny0zLjA4NSA2Ljg3Ny02Ljg3NyA2Ljg3N2MtMy43OTMgMC02Ljg3Ny0zLjA4NS02Ljg3Ny02Ljg3N3oiLz48L3N2Zz4=" alt="Search" />
            <img className="bell" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTUuMTM3IDMuOTQ1Yy0uNjQ0LS4zNzQtMS4wNDItMS4wNy0xLjA0MS0xLjgydi0uMDAzYy4wMDEtMS4xNzItLjkzOC0yLjEyMi0yLjA5Ni0yLjEyMnMtMi4wOTcuOTUtMi4wOTcgMi4xMjJ2LjAwM2MuMDAxLjc1MS0uMzk2IDEuNDQ2LTEuMDQxIDEuODItNC42NjcgMi43MTItMS45ODUgMTEuNzE1LTYuODYyIDEzLjMwNnYxLjc0OWgyMHYtMS43NDljLTQuODc3LTEuNTkxLTIuMTk1LTEwLjU5NC02Ljg2My0xMy4zMDZ6bS0zLjEzNy0yLjk0NWMuNTUyIDAgMSAuNDQ5IDEgMSAwIC41NTItLjQ0OCAxLTEgMXMtMS0uNDQ4LTEtMWMwLS41NTEuNDQ4LTEgMS0xem0zIDIwYzAgMS41OTgtMS4zOTIgMy0yLjk3MSAzcy0zLjAyOS0xLjQwMi0zLjAyOS0zaDZ6Ii8+PC9zdmc+" alt="Bell" />
            <img className="avatar" src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar" />
        </div>
    )
}

export default Navbar
