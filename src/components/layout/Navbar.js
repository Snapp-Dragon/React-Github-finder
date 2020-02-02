//Import the react and component from react
import React from 'react';
import PropTypes from 'prop-types';
// Link allows you to route to other pages without clearing the state of the previous page
import { Link } from 'react-router-dom';




//Create a navbar class that extends from the component class
/*
    props are properties that you can pass from the outside 
*/

const Navbar = ({ icon, title }) => {




    //render method 


    return (

        <nav className='navbar bg-dark'>

            <h1>
                <i className={icon} /> {title}
            </h1>

            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
            </ul>



        </nav>
    )

}


//Props that show by default
Navbar.defaultProps = {

    title: `Chad's Github Finder`,
    icon: 'fab fa-github'
}

//proptypes

Navbar.propTypes = {

    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}



export default Navbar