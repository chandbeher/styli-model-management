import React from 'react';
import './AddModel.css';
import { Formik, Form} from 'formik';
import * as Yup from 'yup';
import CustomTextField from '../../UI/FormikTextField/CustomTextField';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';


const applyStyle = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

function AddModel(props) {
    let history = useHistory();
    const classes = applyStyle();
         return (
            <div className="AddModel">
            <Formik
                initialValues = {{
                    name: "",
                    gender: "",
                    waist: 0,
                    height: 0,
                    bust: 0,
                    highHip: 0,
                    lowHip: 0,
                    avatar: null
                }}
                validationSchema = { Yup.object({
                    name: Yup
                        .string()
                        .min(5, "Minimum 5 Character")
                        .required("Name Required"),
                    gender: Yup
                        .string()
                        .required("Gender Required"),
                })}
                onSubmit = { (model, {setSubmiting, resetForm}) =>{
                    axios.post('http://localhost:4000/model/add', model)
                        .then(res => {
                            history.push("/");
                        })
                    
                }}
            >
            { props => (
                <Form>
                    <h1>Create a Model!</h1>
                    <input
                        accept="image/*"
                        className={classes.input}
                        id="contained-button-file"
                        multiple
                        type="file"
                        name="avatar"
                    />
                    <CustomTextField label="Name" name="name" type="text"/>
                    <CustomTextField label="Gender" name="gender" type="text"/>
                    <CustomTextField label="Height" name="height" type="number"/>
                    <CustomTextField label="Waist" name="waist" type="number"/>
                    <CustomTextField label="High Hip" name="highHip" type="number"/>
                    <CustomTextField label="Low Hip" name="lowHip" type="number"/>
                    <CustomTextField label="Bust" name="bust" type="number"/>
                    <Button variant="contained" color="primary" type="submit">Submit</Button>
                </Form>
            )}
            </Formik>
            </div>
        );
}
export default AddModel;