import React from 'react';
import './LoginLayout.css';
import {Outlet} from 'react-router-dom';
const LoginLayout = (props) => {
    return (
    <div>
        <section className="hero is-fullheight">
            <div className="hero-body">
                <div className="container">
                    {props.children ? props.children : <Outlet />}
                </div>
            </div>
        </section>
    </div>
       );
};

export default LoginLayout;