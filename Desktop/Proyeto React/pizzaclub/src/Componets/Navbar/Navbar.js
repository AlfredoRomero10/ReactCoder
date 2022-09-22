import './Navbar.css'


const Navbar = () => {
    return (
        
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand fs-1 text-light" href>Polo Club</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active fs-4 text-light" aria-current="page" href>Camisas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fs-4 text-light" href>Chombas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fs-4 text-light" href>Camperas</a>
                        </li>
                    </ul>
                <span className="navbar-text text-light">
                        Carrito de Compras
                </span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar