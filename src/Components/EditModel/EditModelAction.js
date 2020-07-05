import React from 'react';
import { Formik, Form} from 'formik';
import CustomTextField from '../../UI/FormikTextField/CustomTextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { connect } from 'react-redux';
import { UPDATE_MODEL } from '../../Store/modelAction';
import * as Yup from 'yup';


const EditModelAction = (prop) => {
        const { name, gender, waist, height, bust, highHip, lowHip} = prop.model;

         return (
            <div className="Form">
            <Formik
                initialValues = {{
                    name: name,
                    gender: gender,
                    waist: waist,
                    height: height,
                    bust: bust,
                    highHip: highHip,
                    lowHip: lowHip
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
                    axios.post('http://18.220.137.225:4000/model/update/' + prop.model._id, model)
                        .then(res => {
                            prop.updateModel(res.data);
                            prop.closeDrawer();
                        })
                        .catch(err => {
                            console.log(err);
                        })
                }}
            >
            { props => (
                <Form>
                    <h1>Edit Model</h1>
                    <CustomTextField label="Name" name="name" type="text"/>
                    <CustomTextField label="Gender" name="gender" type="text"/>
                    <CustomTextField label="Waist" name="waist" type="number"/>
                    <CustomTextField label="Height" name="height" type="number"/>
                    <CustomTextField label="Bust" name="bust" type="number"/>
                    <CustomTextField label="High Hip" name="highHip" type="number"/>
                    <CustomTextField label="Low Hip" name="lowHip" type="number"/>
                    <Button variant="contained" color="primary" type="submit">Save</Button>
                    <Button variant="contained" color="primary" onClick= {prop.closeDrawer}>Cancel</Button>
                </Form>
            )}
            </Formik>
            </div>
        );
}


const mapDispatchToProps = dispatch => {
    return{
        updateModel: (updatedModel) => dispatch({type: UPDATE_MODEL, updateModel: updatedModel})
    }
}

export default connect(null, mapDispatchToProps)(EditModelAction);