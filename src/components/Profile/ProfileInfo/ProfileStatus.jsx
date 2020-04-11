import React from 'react';
import css from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }


    activatedMode = () => {
        console.log("This: ", this)
        this.setState({
                editMode: true
            }
        )
    }

    deActivatedMode = () => {
        this.setState({
                editMode: false
            }
        )
    }


    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                        <span onClick={this.activatedMode.bind(this)} className={css.status}>
                            <div>Your status: &nbsp;</div>
                            <div className={css.meStatus}>{this.props.status}</div>
                        </span>
                </div>
                }
                {this.state.editMode &&
                    <div  className={css.status}>
                        <div>Your status: &nbsp;</div>
                        <input autoFocus={true} onBlur={this.deActivatedMode.bind(this)} value={this.props.status}/>
                    </div>
                }
            </div>
        )
    }

};

export default ProfileStatus;