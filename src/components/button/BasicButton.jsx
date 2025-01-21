import React from 'react';
import Button from './style';

const BasicButton = ({ref,children,size,shape,variant,color,...rest}) => {
    return (
        <Button ref={ref} children={children} size={size} shape={shape} variant={variant} color={color} {...rest}>
            {children}
        </Button>
        

    );
};

export default BasicButton;