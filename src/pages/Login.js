import React, { useState, useEffect, useContext } from 'react'
import SubmitBtn from "../components/SubmitBtn"
import {getSSOLogin} from "../store/modules/adminLogin/adminLoginSlice"
import { useDispatch } from "react-redux"
import AuthContext from '../store/modules/authContext';
import {useLocation} from "react-router-dom"
const Login = () => {
    const location = useLocation()
    const paramters = new URLSearchParams(location.search)
    const dispatch = useDispatch()
    const authCtx = useContext(AuthContext);
    const [userInput, setUserInput] = useState({
        procesing: false
    })

    const submitHandler = event => {
        event.preventDefault();
        setUserInput({procesing: true})
        // filters
        const wait = setTimeout(() => {
            clearTimeout(wait)
            dispatch(getSSOLogin()) .then(result => {
                window.location.href = result.authorize_url
            }, 2000)
        })
    }

    const errorText = (status) => {
        if(status === 'nao-autorizado') {
            return 'Você não Possui Acesso nesta área'
        }

        if(status === 'erro') {
            return 'Houve um Erro , Contet o Suporte'
        }

        return
    }

    const logout = event => {
        authCtx.logout()
    }
    useEffect(() => {
        console.log('resultado ->', authCtx.currentUser)
    }, []);

        return (<form onSubmit={submitHandler}>
                    <div className="field">
                        <div className="container-login100-form-btn has-text-centered">
                            {paramters.get('status') && <div className="columns">
                                <div className="column">
                                     <p className="error-msg-2">{errorText(paramters.get('status'))}</p>
                                </div>
                            </div>}

                            <div className="columns">
                                <div className="column">
                                <SubmitBtn
                                    processloading={userInput.procesing}
                                    stylebutton="btn-submit-blue-one btn_full"
                                    textbutton="Acessar Login"
                                    />
                                </div>
                            </div>
                    </div>
                </div>
            </form>);
};

export default Login;
