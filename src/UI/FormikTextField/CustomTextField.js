import React from 'react';
import { Field, ErrorMessage } from 'formik';
import TextField from '@material-ui/core/TextField';

const CustomTextField = ({label, name, type}) => (
    <div className="CustomTextField">
        <Field
            autoComplete="off"
            as = {TextField}
            label = {label}
            name = {name}
            fullWidth
            type = {type}
            helperText = {<ErrorMessage name={name} render={msg => <div style={{color: 'red'}}>{msg}</div>} />}
        ></Field>

    </div>
);
export default CustomTextField;