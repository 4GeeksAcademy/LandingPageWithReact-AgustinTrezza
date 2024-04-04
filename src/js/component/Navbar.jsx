import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar bg-dark navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <a className="navbar-brand fs-4 text-white" href="#">Start Bootsrap</a>
                    </div>
                </div>
                <button className="navbar-toggler navbar-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
                        <a className="nav-link light-gray" href="#">About</a>
                        <a className="nav-link light-gray" href="#">Services</a>
                        <a className="nav-link disabled light-gray" href="#" tabIndex="-1" aria-disabled="true">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
