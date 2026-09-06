import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="#">ReactProject <sup>1.0</sup></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink className="nav-item nav-link" to="/">Home</NavLink>
                    <NavLink className="nav-item nav-link" to="/contact">Contact</NavLink>
                    <NavLink className="nav-item nav-link" to="/about">About</NavLink>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;