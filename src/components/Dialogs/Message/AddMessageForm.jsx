import {Field, reduxForm} from "redux-form";
import React from "react";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import css from "../Dialogs.module.css";


const maxLength50 = maxLengthCreator(50);

let AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name="newMessageBody" placeholder="Enter your message"
                       validate={[required, maxLength50]}/>
            </div>
            <div>
                <button className={css.dialogsBtn}>Send</button>
            </div>
        </form>
    )
}

export default   reduxForm({
    form: 'dialogAddMessageForm'
})(AddMessageForm);

