import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { FormHelperText } from '@material-ui/core';


const CustomSelectField = ({lable, value}) =>{
    return(
        <FormControl>
        <InputLabel id="demo-simple-select-label">Gender</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
        >
          <MenuItem>Male</MenuItem>
          <MenuItem>Female</MenuItem>
        </Select>
        <FormHelperText>Required!</FormHelperText>
      </FormControl>
    )
}

export default CustomSelectField;