import './SubmitBtn.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const SubmitBtn = ({processloading= false,
                    textbutton = null,
                    stylebutton = 'submit_btn',
                    faicon = null,
                    faiconposition = 'right',
                    hiddenIcon = false}) => {
    const classBtn = processloading !== false ? 'btn-loading  button ' + stylebutton
        : 'button  ' + stylebutton
    const iconLefStatus = faicon && faiconposition === 'left' && !(processloading && !hiddenIcon)

    const iconRightStatus = faicon && faiconposition === 'right' && !(processloading && !hiddenIcon)

    return (<div>
            <button className={classBtn} type="submit">
                { iconLefStatus  ?  <FontAwesomeIcon icon="faicon" className="is-left"/> : '' }
                <div className="btn-area"><span className="text">{ textbutton }</span></div>
                { iconRightStatus  ?  <FontAwesomeIcon icon="faicon" className="right"/> : '' }
            </button></div>
    );
};

export default SubmitBtn;
