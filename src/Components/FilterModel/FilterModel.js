import React from 'react';
import './FilterModel.css';
import { Formik, Form} from 'formik';
import CustomTextField from '../../UI/FormikTextField/CustomTextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import * as actionTypes from '../../Store/modelAction';
import { connect } from 'react-redux';


const FilterModel = (prop) => {

         return (
            <div className="Form">
            <Formik
                initialValues = {{
                    name: "",
                    gender: "",
                    waist: 0,
                    height: 0,
                    bust: 0,
                    highHip: 0,
                    lowHip: 0
                }}
                onSubmit = { (model, {setSubmiting, resetForm}) =>{
                    axios.post('http://18.220.137.225:4000/model/search', model)
                        .then(res => {
                            console.log(res.data);
                            prop.loadSearchResult(res.data);
                            prop.closeDrawer();
                        })
                }}
            >
            { props => (
                <Form>
                    <h1>Filter Model</h1>
                    <CustomTextField label="Name" name="name" type="text"/>
                    <CustomTextField label="Gender" name="gender" type="text"/>
                    <Button variant="contained" color="primary" type="submit">Search</Button>
                    <Button variant="contained" color="primary" onClick= {prop.closeDrawer}>Cancel</Button>
                </Form>
            )}
            </Formik>
            </div>
        );
}

const mapDispathToProps = dispatch => {
    return{
        loadSearchResult: (searchResults) => dispatch({type: actionTypes.LOAD_SEARCH_RESULTS, searchResults: searchResults})
    }
}
export default connect(null, mapDispathToProps)(FilterModel);