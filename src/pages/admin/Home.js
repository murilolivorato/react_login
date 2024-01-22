import React, {useContext} from 'react';
import AuthContext from "../../store/modules/authContext";
const Home = () => {
    const authCtx = useContext(AuthContext);
    return (<div className="columns content-area">
        <div className="column">
            <div className="card ">
                <div className="card-content ">
                    <h2>Welcome {authCtx.currentUser.name}</h2>
                    <p>You Are in Admin Area</p>
                </div>
            </div>
        </div>
    </div>);
};

export default Home;