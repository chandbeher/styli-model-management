import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import EditModelAction from './EditModelAction';


const EditModel = (props) => (
    <div>
        <Drawer open={props.status} >
            <EditModelAction 
                closeDrawer = {props.closeDrawer}
                model = {props.model}/>
        </Drawer>
    </div>
);


export default EditModel;