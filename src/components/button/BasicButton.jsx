import React from 'react';

const BasicButton = ({ref,children,size,shape,variant,color,...rest}) => {
    return (
        <button ref={ref} children={children} size={size} shape={shape} variant={variant} color={color} {...rest}>
            {children}
        </button>
    );
};

export default BasicButton;