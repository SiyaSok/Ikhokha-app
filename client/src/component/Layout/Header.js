import React, { useContext } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext';


const Header = () => {

    const history = useHistory();
    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");

    const { user, logOut } = useContext(AuthContext);

    const successLogOut = () => {
        logOut()
        history.push('/');
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container">
                <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler"
                    aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-brand d-block d-lg-none mx-auto"><Link to="/" className={splitLocation[1] === "" ? "" : ""}  ><img className="img-fluid" src="/images/Logo.png" alt="Logo" /></Link></div>
                <div className="userLogin navbar-brand">
                    {!user ? <Link to="/sign-in" className="btn  p-2 ">
                        <i className="fa fa-user mx-2" aria-hidden="true"></i>
                        <span className="d-none d-lg-inline-block">Sign In</span>
                    </Link> : <span className="btn-black  p-2" onClick={successLogOut}> <i className="fa fa-user mx-2" aria-hidden="true"></i>
                        <span className="d-none d-lg-inline-block">Sign Out</span>
                    </span>}
                </div>
                <div className="collapse navbar-collapse" id="navbarToggler">
                    <ul className="navbar-nav  m-auto mb-2 mb-lg-0 text-center">
                        <li className="nav-item mx-4"><Link to="/" className={splitLocation[1] === "" ? "active nav-link" : "nav-link"}  >Home</Link></li>
                        <li className="nav-item mx-4"><Link to="/products" className={splitLocation[1] === "products" ? "active nav-link" : "nav-link"}  >Products</Link></li>
                        <li className="nav-item mx-4 d-none d-lg-block"><Link to="/" className={splitLocation[1] === "" ? "" : ""}  ><img className="img-fluid" src="/images/Logo.png" alt="Logo" /></Link></li>
                        <li className="nav-item mx-4"><Link to="/blogs" className={splitLocation[1] === "blogs" ? "active nav-link" : "nav-link"}  >Blogs</Link></li>
                        <li className="nav-item mx-4"><Link to="/contact" className={splitLocation[1] === "contact" ? "active nav-link" : "nav-link"}  >Contact</Link></li>
                    </ul>

                </div>

            </div >

        </nav >

    );
}

export default Header;