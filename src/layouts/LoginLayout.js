import React from 'react';
import './LoginLayout.css';
import {Link, Outlet} from 'react-router-dom';
import LoadingBar from "../components/LoadingBar";
import {useSelector} from "react-redux";
import {loading} from "../store/modules/admin/mainSlice";
const LoginLayout = (props) => {
    const loadingData = useSelector(loading)
    return (
        <section className="hero is-fullheight">
            {loadingData && <LoadingBar /> }
            <div className="hero-body">
                <div className="container">
                            <div className="columns logo-area">
                                <div className="column">
                                    <div id="logo"><h1><a className="logo-link">JHE</a></h1></div>
                                </div>
                            </div>
                            <div className="columns top_desc_area has-text-centered">
                                <div className="column">
                                    <h2>Fornecedores</h2>
                                </div>
                            </div>



                              {/*  <nav>
                                    <Link to="/">Login</Link>
                                    <Link to="/register">Register</Link>
                                </nav>*/}
                                {props.children ? props.children : <Outlet />}
                        </div>
            </div>
        </section>
       );
};

export default LoginLayout;