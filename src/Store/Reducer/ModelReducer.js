import * as actionType from "../modelAction";
import axios from 'axios';

const modelState = {
    models:[]
}

const deleteModel = (state, action) => {
    axios.delete('http://localhost:4000/model/' + action.modelId)
        .then(res => {
        });
    const restOfModels =  state.models.filter(model => model._id !== action.modelId);
    return {models: restOfModels};
};

const loadSearchResults = (state, action) => {
    return{ models: action.searchResults }
};

const updateModel = (state, action) => {
    let updatedModel =  state.models.filter(model => model._id !== action.updateModel._id);
    updatedModel.push(action.updateModel);
    return { models: updatedModel };
}

const modelReducer = (state = modelState, action) => {
    switch (action.type) {
        case actionType.LOAD_MODELS:
            return {
                models: action.models
            }
        case actionType.ADD_MODEL:
            return {
                models: state.models.concat(action.model)
            }
        case actionType.DELETE_MODEL:
            return deleteModel(state, action);
        case actionType.UPDATE_MODEL:
            return updateModel(state, action);
        case actionType.SEARCH_MODEL:
            return {
                models: state.models.concat(action.model)
            }
        case actionType.LOAD_SEARCH_RESULTS:
            return loadSearchResults(state, action);
        default:
            return state;
    }
}

export default modelReducer;