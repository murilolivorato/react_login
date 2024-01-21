import {useNavigate, Outlet, Link} from "react-router-dom";
import './AdminLayout.css';
import React, {useContext, useEffect, useState} from 'react';
import AuthContext from "../store/modules/authContext";
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LoadingBar from "../components/LoadingBar";
import { loading } from "../store/modules/admin/mainSlice"
import {useSelector} from "react-redux";
import {faClipboardList} from "@fortawesome/free-solid-svg-icons";
const AdminLayout = (props) => {
    const loadingData = useSelector(loading)
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


    const [menu, setMenu] = useState(false)
    const toggleMenu = () => {
        setMenu(!menu);
    };
    const menuActiveStatusClass = menu === false ? 'top-nav' : 'top-nav active';

    return (
        <div id="app">
            <div className="sidebar"  >
                <div className="sidebar-wrapper">
                    <div className="logout-area">
                       <a href="#" onClick={logout} className="link-one"  >
                            <FontAwesomeIcon icon="right-from-bracket"  /> Logout
                        </a>
                    </div>
                    <div className="image-profile-area">
                        <div id="user-profile"><span className='down'><FontAwesomeIcon icon="user"  /></span></div>
                    </div>

                    <div className="block">
                        <p className="user-info">Olá {authCtx.currentUser.name}</p>
                                <ul className="nav" >
                                    <li>
                                        <Link to="/admin/home" >
                                            <FontAwesomeIcon icon="home"  />
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/admin/fornecedores" >
                                            <FontAwesomeIcon icon="clipboard-list"  />
                                            Fornecedores
                                        </Link>
                                    </li>
                                    { authCtx.currentUser.is_manager && <li><Link to="/admin/direito-de-acesso">
                                        <FontAwesomeIcon icon="users"  />
                                        Direitos de Acesso
                                    </Link></li> }
                   </ul>

            </div>
        </div>
    </div>
    <div className="content-area">
       {/* <footer >
            ©2022 JHE todos os direitos reservados
        </footer>*/}
        <div className="content">
            <div className="main-card">
                {props.children ? props.children : <Outlet />}
            </div>
        </div>
    </div>
</div>
    );
}

export default AdminLayout;