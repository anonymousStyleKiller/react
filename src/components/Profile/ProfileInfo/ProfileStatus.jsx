import React from 'react';
import css from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }
    12
    activatedMode = () => {
        this.setState({
            editMode: true
        })
    }

    deActivatedMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status);
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    };


    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                        <span onClick={this.activatedMode} className={css.status}>
                            <div>Your status: &nbsp;</div>
                            <div className={css.meStatus}>{this.state.status || "No Status"}</div>
                        </span>
                </div>
                }
                {this.state.editMode &&
                <div className={css.status}>
                    <div>Your status: &nbsp;</div>
                    <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deActivatedMode}
                           value={this.state.status}/>
                </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;