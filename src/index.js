import React from 'react';
import './css/web.css';
import 'bulma/css/bulma.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store/index';
import { Provider } from 'react-redux';
import { AuthContextProvider } from './store/modules/authContext';

import { library, config } from '@fortawesome/fontawesome-svg-core'
import {
    faClipboardCheck,
    faNoteSticky,
    faClipboardList,
    faChartPie,
    faChartLine,
    faPhone,
    faUser,
    faUsers,
    faRss,
    faHome,
    faTags,
    faBed,
    faBath,
    faTimesCircle,
    faSearch,
    faCalendarAlt,
    faCheck,
    faHeart,
    faChevronRight,
    faChevronLeft,
    faPlusCircle,
    faTag,
    faStar,
    faEnvelope,
    faPlug,
    faCamera,
    faMapMarkerAlt,
    faPlus,
    faTimes,
    faPhoneAlt,
    faPaperPlane,
    faSyncAlt,
    faMinusCircle,
    faShareAlt,
    faFilePdf,
    faBell,
    faBars,
    faCarAlt,
    faCheckCircle,
    faPrint,
    faSlidersH,
    faRuler,
    faExternalLinkAlt,
    faRedo,
    faTrashAlt,
    faEdit,
    faFileAlt,
    faLock,
    faHouseUser,
    faBuilding,
    faIndustry,
    faRightFromBracket
} from '@fortawesome/free-solid-svg-icons'

import {
    faStar as faStarRegular,
    faPaperPlane as faPaperPlaneRegular,
    faEnvelopeOpen as faEnvelopeOpenRegular,
    faShareSquare as faShareSquareRegular,
    faCheckCircle as faCheckCircleRegular,
    faHeart as faHeartCircleRegular
} from '@fortawesome/free-regular-svg-icons'

import {
    faFacebookF,
    faTwitter,
    faInstagram,
    faYoutube,
    faWhatsapp
} from '@fortawesome/free-brands-svg-icons'
config.autoAddCss = true
library.add(faPhone,
    faNoteSticky,
    faClipboardCheck,
    faClipboardList,
    faChartPie,
    faChartLine,
    faUser,
    faUsers,
    faRss,
    faFacebookF,
    faTwitter,
    faInstagram,
    faYoutube,
    faWhatsapp,
    faHome,
    faTags,
    faBed,
    faBath,
    faTimesCircle,
    faSearch,
    faCalendarAlt,
    faCheck,
    faHeart,
    faChevronRight,
    faChevronLeft,
    faPlusCircle,
    faTag,
    faStar,
    faEnvelope,
    faPlug,
    faCamera,
    faMapMarkerAlt,
    faPlus,
    faTimes,
    faPhoneAlt,
    faPaperPlane,
    faSyncAlt,
    faMinusCircle,
    faShareAlt,
    faFilePdf,
    faBell,
    faBars,
    faCarAlt,
    faCheckCircle,
    faPrint,
    faStarRegular,
    faPaperPlaneRegular,
    faEnvelopeOpenRegular,
    faShareSquareRegular,
    faCheckCircleRegular,
    faSlidersH,
    faRuler,
    faExternalLinkAlt,
    faRedo,
    faTrashAlt,
    faEdit,
    faHeartCircleRegular,
    faFileAlt,
    faLock,
    faHouseUser,
    faBuilding,
    faIndustry,
    faRightFromBracket)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <AuthContextProvider>
            <Provider store={store}>
                <App />
            </Provider>
        </AuthContextProvider>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
