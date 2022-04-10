import React from 'react';

const Quality = ({color,_id,name}) => {

    return  <span className={"badge m-1 bg-" + color} >
            {name}
        </span>
};

export default Quality;