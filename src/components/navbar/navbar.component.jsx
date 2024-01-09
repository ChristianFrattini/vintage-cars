import './navbar.styles.scss'

const NavBar=()=>{
    
    return(
 
        <div className="navbar">
        <div className="left-section">
            <a className="title" href="/">Vintage Cars</a>
        </div>
        <div className="right-section">
            <a href="/contact">Contacts</a>
            <a href="/admin">Admin</a>
        </div>
        </div>

    )
}

export default NavBar