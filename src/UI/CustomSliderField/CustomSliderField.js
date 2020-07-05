import Slider from '@material-ui/core/Slider';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';


const PrettoSlider = withStyles({
  root: {
    color: '#3f51b5',
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#3f51b5',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);


const CustomSliderField = ({name}) => {
    return (
        <PrettoSlider 
            valueLabelDisplay="auto" 
            aria-label="pretto slider" 
            defaultValue={20}
            name = {name}
            value = '10'
            />
    );
}

export default CustomSliderField;