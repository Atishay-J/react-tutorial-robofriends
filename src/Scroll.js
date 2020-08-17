import React from 'react';

const Scrollable = (props) => {
    return (
        <div style={{overflow: 'scroll' , border : '5px solid black' ,height : '500px'}}>
        {props.children}
        </div>
        );
};

export default Scrollable;