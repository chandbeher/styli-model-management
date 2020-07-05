import React, {Component} from 'react';
import './Models.css'
import * as actionTypes from '../../Store/modelAction';
import { connect } from 'react-redux';
import Model from '../../Components/Model/Model';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import ModelFilter from '../../Components/ModelFilter/ModelFilter';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import EditModel from '../../Components/EditModel/EditModel';

class Models extends Component{

    state = {
        isFilterClicked: false,
        errorMessage: null,
        openEditModal: false,
        currrentModel: null
    }

    updateEditModal = (status, model) => {
        console.log('open modal status ' + status);
        console.log(model);
        this.setState({
            ...this.state,
            openEditModal: status,
            currrentModel: model
        });
    }

    updateErrorMessage = message => {
        this.setState({
            ...this.state,
            errorMessage: message
        });
    }
    componentDidMount(){
        axios.get('http://localhost:4000/model')
            .then(res => {
                this.props.loadModels(res.data);
                this.updateErrorMessage(null);
            })
            .catch(err =>{
                this.updateErrorMessage("Oops! Server not reachable.");
            })
    }

    toggleDrawer = () =>{
       this.setState({
           isFilterClicked: !this.state.isFilterClicked
       })
    }

    editModel = (model) => {
        this.updateEditModal(true, model);
    }

    compare = (modelA, modelB) => {
        const nameA = modelA.name.toUpperCase();
        const nameB = modelB.name.toUpperCase();
        let comparison = 0;
        if (nameA > nameB) {
          comparison = 1;
        } else if (nameA < nameB) {
          comparison = -1;
        }
        return comparison;
      }

    render() {

        let modelList = <div className="NoModels">
                Oops, There is no models avaialbe!  <NavLink to="/build">Click here</NavLink> to build models. </div>;
        if(this.props.models && this.props.models.length > 0){
            const models = this.props.models.sort(this.compare);
            modelList = models.map(model => (
                <Model 
                    key={model._id}
                    model = {model} 
                    onClickDelete={() => this.props.deleteModel(model._id)}
                    clickOnEdit = {() => this.editModel(model)}/>
            ));
        }
        if(this.state.errorMessage)
            modelList = this.state.errorMessage

        let editModal = null;
        if(this.state.openEditModal){
            editModal =  
                <EditModel 
                    status = {this.state.openEditModal} 
                    model = {this.state.currrentModel}
                    closeDrawer = {() => this.updateEditModal(false, null)} 
                />
        }

        const floatingActionItems =
            <div className="ActionItems">
                <Tooltip title="Add Model" aria-label="add">
                    <Fab color="primary" aria-label="add" href = "/build">
                    <AddIcon />
                    </Fab>
                </Tooltip><br/><span/>
                <Tooltip title="Filter Models" aria-label="add">
                    <Fab color="primary" aria-label="add" onClick= {this.toggleDrawer}>
                    <SearchIcon />
                    </Fab>
                </Tooltip>
            </div>
        
        return(
            <div className="Models">
                {floatingActionItems}
                <ModelFilter 
                    status = {this.state.isFilterClicked} 
                    closeDrawer = {this.toggleDrawer} />
                {modelList}
                {editModal}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        models: state.models
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadModels: (models) => dispatch({type:actionTypes.LOAD_MODELS, models: models}),
        deleteModel: (modelId) => dispatch({type: actionTypes.DELETE_MODEL, modelId: modelId}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Models);