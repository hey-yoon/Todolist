import React from 'react';
import Input from './style';

const BasicInput = ({ref,children,size,shape,variant,color,...rest}) => {
    return (
        <>
            <Input ref={ref} children={children} size={size} shape={shape} variant={variant} color={color} {...rest}>
            {children}
            </Input>
        </>
    );
};

export default BasicInput;