import React from "react";
import './customButton.scss';

const CustomButton = props => {
    const {children, ...otherProps} = props;
    return(
        <button className='custom-button' {...otherProps}>
            {children}
        </button>
    )
}

export default CustomButton;