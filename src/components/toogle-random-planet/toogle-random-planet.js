import React from 'react';
import './toogle-random-planet.scss';

const ToogleReactComponent = ({toggle}) => {
    return (
        <button className="btn btn-info" onClick={toggle}>Toggle Random Planet</button>
    );
}

export default ToogleReactComponent;
