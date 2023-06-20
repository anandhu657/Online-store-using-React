import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link to='/' className="text-decoration-none">
                        <p className="m-0 navbar-brand">E-Store</p>
                    </Link>
                    <Link to='/logout'>
                        <button className="btn btn-success me-3" type="submit">Logout</button>
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default Header;