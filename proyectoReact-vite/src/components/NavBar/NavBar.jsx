import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav className="navbar bg-light navbar-expand-md">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Bejeweled</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#">Collares</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Pulseras</a>
                    </li>
                    </ul>
                    <CartWidget/>
                </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
