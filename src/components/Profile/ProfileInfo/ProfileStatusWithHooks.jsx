import React, {useState} from 'react';
import css from './ProfileInfo.module.css';

const ProfileStatusWithHooks = (props) => {

    const [state, setState] = useState(false);
    const [status, setStatus] = useState(props.status);

   const activatedMode = () =>{
       setState(true);
    }

    const deActivatedMode = () =>{
        setState(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
       setStatus(e.currentTarget.value);
    };

    return (
        <div>
            {!state&&
            <div>
                        <span  onDoubleClick={activatedMode} className={css.status}>
                            <div>Your status: &nbsp;</div>
                            <div className={css.meStatus}>{props.status || "No Status"}</div>
                        </span>
            </div>
            }
            {state&&
            <div className={css.status}>
                <div>Your status: &nbsp;</div>
                <input onChange={onStatusChange} onBlur={deActivatedMode} autoFocus={true}
                       value={status}
                />
            </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;