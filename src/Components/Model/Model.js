import React from 'react';
import './Model.css';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { Icon } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

const model = props => {
    const {name, gender, waist, height, bust, highHip, lowHip} = props.model;
    
    return(
        <div className="model">
            <h1>{name}</h1>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={4}>
                    <Box bgcolor="text.disabled" color="background.paper" p={2}>
                    <span style={{'text-align': 'left'}}>
                        MODEL WEAR: {gender}
                        </span>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Box bgcolor="text.disabled" color="background.paper" p={2}>
                        WAIST: {waist} CM
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Box bgcolor="text.disabled" color="background.paper" p={2}>
                        HEIGHT: {height} CM
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Box bgcolor="text.disabled" color="background.paper" p={2}>
                        BUST: {bust} CM
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Box bgcolor="text.disabled" color="background.paper" p={2}>
                        HIGHT HIP: {highHip} CM
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Box bgcolor="text.disabled" color="background.paper" p={2}>
                        LOW HIP: {lowHip} CM
                    </Box>
                </Grid>
            </Grid>
            <span>
                <Icon color='primary'>
                    <EditIcon onClick={props.clickOnEdit} />
                </Icon>
                <Icon color='error'>
                    <DeleteIcon  onClick={props.onClickDelete} />
                </Icon>
            </span>
        </div>
    );
}
export default model;