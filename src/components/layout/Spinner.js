import React, { Fragment } from 'react';

//webpack allows us to import images
import spinner from './spinner.gif';


const Spinner = (props) => {

    return (

        <Fragment>

            <img src={spinner} alt="Loading..." style={{ width: '200px', margin: 'auto', display: 'block' }} />

        </Fragment>


    )
}

export default Spinner