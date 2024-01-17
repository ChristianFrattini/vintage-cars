import { Outlet, Link } from 'react-router-dom'
import './navbar.styles.scss'
import { Fragment } from 'react'

const NavBar=()=>{
    
    return(
       <Fragment>
        <div className="navbar">
        <div className="left-section">
            <Link className="title" to="/">Vintage Cars</Link>
        </div>
        <div className="right-section">
            <Link to="/services">Services</Link>
            <Link to="/admin">Admin</Link>
        </div>
        </div>
        <Outlet/>
        </Fragment>
    )
}

export default NavBar