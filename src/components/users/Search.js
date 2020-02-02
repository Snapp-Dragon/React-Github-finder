import React, { useState,useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';



const Search = () => {

    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);

    //State for the search bar
    const [text, setText] = useState('');


    //Every time there is a change 

    const onChange = (e) => {

        //Set text allows us to manipulate the state of the object
        //e.target.value allows us to set the state to the value of the field.
        setText(e.target.value);

    }

    //on submitting the form
    const onSubmit = (e) => {

        e.preventDefault();

        //check to see if anything was entered in the search bar
        if (text === "") {

            alertContext.setAlert('Please enter something', 'light');
        } else {

            //pass the state up to the main app component using props
            githubContext.searchUsers(text);

            setText('');


        }


    }




    return (

        <div>
            {/* Search Bar */}
            <form onSubmit={onSubmit} className="form">
                <input type="text" name="text" value={text} onChange={onChange} placeholder="Search User" />
                <input type="submit" value="Search" className="btn btn-dark btn-block" />
            </form>


            {/* If show clear is true then set the button */}
            {githubContext.users.length > 0 && (

                <button className="btn btn-light btn-block" onClick={githubContext.clearUsers}>Clear</button>


            )}


        </div>

    )

}



export default Search