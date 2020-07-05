import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import FilterModel from '../FilterModel/FilterModel';

const ModelFilter = (props) => (
<div>
    <Drawer open={props.status} >
        <FilterModel closeDrawer = {props.closeDrawer}/>
    </Drawer>
</div>
);

export default ModelFilter;