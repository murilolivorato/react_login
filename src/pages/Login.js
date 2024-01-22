import { useContext, useState } from 'react'
import {store, getUserInfo} from "../store/modules/adminLogin/adminLoginSlice"
import {useDispatch} from "react-redux"
import {useNavigate} from "react-router-dom"
import Errors from "../hooks/ErrorInput"
import AuthContext from '../store/modules/authContext'
import SubmitBtn from '../components/SubmitBtn'
const Login = () => {
    const ErrorsData = new Errors({})
    const [errorList, setErrorList] = useState({})
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const authCtx = useContext(AuthContext)

    const [data, setData] = useState({
        procesing: false,
        email: '',
        password: ''
    })

    const emailChangeHandler  = (event) => {
        setData ((prevState) =>
        { return { ...prevState, email: event.target.value}
        })


    }

    const passwordChangeHandler  = (event) => {
        setData ((prevState) =>
        { return { ...prevState, password: event.target.value}
        })
    }

    const submitHandler = event => {
        event.preventDefault();
        setData ((prevState) =>
        { return { ...prevState, procesing: true  }
        })

        // filters
        const wait = setTimeout(() => {
            clearTimeout(wait)
            // DISPATCH
            dispatch(store(data)).then((token) => {
                dispatch(getUserInfo(token)).then((userInfo) => {
                    authCtx.login({...userInfo , ...{token: token}})
                }).then( () => {
                    const wait = setTimeout(() => {
                        clearTimeout(wait)
                        navigate('/admin/home')
                    }, 2000)
            })
        }).catch(error => {
                console.log('my errorrr', error.data.errors)
                // RESET ERROR LIST
                ErrorsData.record(error.data.errors, 'form')
                Object.keys(error.data.errors).forEach(function(key) {
                    if(ErrorsData.has('form.' + key)){
                        setErrorList ((prevState) =>
                        { return { ...prevState, [key]: ErrorsData.get('form.' + key)}
                        })
                    }
                });
            }).then(() => {
                // LOADING FALSE
                setData ((prevState) =>
                { return { ...prevState, procesing: false  }
                })
            })
     })
    }

        return (
            <div className="columns  is-centered">
                        <div className="box column is-8">
                            <div className="columns header-text-msg">
                                <div className="column">
                                    <h1>Admin Area </h1>
                                </div>
                            </div>
                            <form onSubmit={submitHandler}>
                            <div className="columns">
                                <div className="column">
                                    <div className="form-group">
                                        <label  className="txt1 p-b-20">E-mail</label >
                                        <input className="form-control ipone" name="email"  type="text"  onChange={emailChangeHandler} />
                                        {errorList.email && <p className="error-msg">{errorList.email}</p>}
                                    </div>
                                    <div className="form-group">
                                        <label  className="txt1 p-b-20 p-t-15">Password</label >
                                        <input className="form-control ipone" name="password"  type="password" onChange={passwordChangeHandler}  />
                                        {errorList.password && <p className="error-msg">{errorList.password}</p>}
                                    </div>
                                </div>
                            </div>
                            <div className="columns">
                                <div className="column">
                                    <div className="container-login100-form-btn">
                                        <SubmitBtn
                                            processloading={data.procesing}
                                            stylebutton="btn_cl_left btn-green-md1"
                                            textbutton="Login"
                                        />
                                    </div>
                                </div>
                            </div>
                            </form>
                        </div>
            </div>);
};

export default Login;
