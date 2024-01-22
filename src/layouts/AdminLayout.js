import {useNavigate, Outlet, Link} from "react-router-dom";
import './AdminLayout.css';
import React, {useContext, useEffect} from 'react';
import AuthContext from "../store/modules/authContext";
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const AdminLayout = (props) => {
    const navigate = useNavigate();
    const authCtx = useContext(AuthContext);
    // SET HEADER
    authCtx.header();
    useEffect(() => {
        // SET AUTHORIZATION REQUEST

        // IS NOT LOGGED IN
        if (!authCtx.isLoggedIn) {
            return navigate('/')
        }
        // HAS ERRRO ON REQUEST
        axios.interceptors.response.use(null, (error) => {
            if (!error.response) {
                return
            }
            if (error.response.status === 403) {
                authCtx.logout();
                return navigate('/')
            }

            return Promise.reject(error)
        })
    }, []);

    const logout = event => {
        authCtx.logout()
        navigate('/')
    }

    return (
    <div id="app">
        <div className="sidebar"  >
            <div className="idebar-wrapper">
                <div className="columns">
                    <div className="column logo-area">
                        <FontAwesomeIcon icon="outlined-account-circle"  />
                        <h1>ADMIN Area</h1>
                    </div>
                </div>

                <div className="columns">
                    <ul className="nav" >
                        <li>
                            <Link to="/admin/home" className="top" >
                            <FontAwesomeIcon icon="outlined-home"  />
                            <p>Home</p>
                        </Link>
                    </li>

                    <li>
                        <a href="#" onClick={logout}  className="top">
                        <FontAwesomeIcon icon="right-from-bracket"  />
                        <p>Logout</p>
                    </a>
                </li>

            </ul>
        </div>
    </div>
</div>

    <div className="main-panel hero is-fullheight">
        {props.children ? props.children : <Outlet />}
    </div>
    <footer className="footer">
        <div className="container-fluid">
            <div className="row">
                <div className="credits ml-auto">
                      <span className="copyright">
                        Admin
                      </span>
                </div>
            </div>
        </div>
    </footer>
</div>
    );
}

export default AdminLayout;