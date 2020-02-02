//Import React, component from react
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


//destructure user to pull the information that is needed
const UserItem = ({ user: { login, avatar_url} }) => {



    return (

        <div className='card text-center'>
            <img src={avatar_url} alt="" className='round-img' style={{ width: '60px' }} />

            <h3>{login}</h3>

            <div>
                <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">Profile</Link>
            </div>
        </div>


    )




}
UserItem.propTypes = {

    user: PropTypes.object.isRequired
}

export default UserItem;