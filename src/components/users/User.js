import React, { Fragment, useEffect, useContext } from 'react';
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';
import { Link } from 'react-router-dom';
import GithubContext from '../../context/github/githubContext';


const User = ({  match }) => {

    const githubContext = useContext(GithubContext);


    const {getUser,loading, user,repos, getUserRepos} = githubContext;




    //useEffect will mimic the life cycle method "componentDidmount"
    useEffect(() => {

        getUser(match.params.login);
        getUserRepos(match.params.login);
        // eslint-disable-next-line
    }, []);


  
    const {
        name,
        company,
        avatar_url,
        location,
        bio,
        blog,
        login,
        html_url,
        followers,
        following,
        public_repos,
        public_gists,
        hireable } = user;



    if (loading) {
        return <Spinner />
    }

    return <Fragment>
        <Link to='/' className="btn btn-light">Back To Search</Link>


        {/* Card class to hold user information */}

        {/* Grid with two columns */}
        <div className="card grid-2">


            {/* Center all items in the column */}
            <div className="all-center">
                <img src={avatar_url} className="round-img" style={{ width: '100px' }} alt="" />
                <p>Name: {name}</p>
                <p>Member Location: {location}</p>
                Hireable{' '}
                {/* If hireable show success checkmark if not show red circle */}
                {hireable ? <i className="fas fa-check text-success" /> : <i className="fas fa-times-circle text-danger" />}


                {/* Put badge icons here */}

                <div className="card text-center">

            <div className="badge badge-primary">Followers: {followers}</div>
            <div className="badge badge-dark">Following: {following}</div>
            <div className="badge badge-success">Repos: {public_repos}</div>
            <div className="badge badge-dark">Gists: {public_gists}</div>

        </div>

            </div>


            {/* BIO */}
            <div>
                {bio && (<Fragment>

                    <h3>Bio</h3>
                    <p>{bio}</p>


                </Fragment>)}
                <a href={html_url} className="btn btn-dark my-1">Visit My Profile</a>


                <ul>
                    <li>
                        {login && <Fragment>

                            <strong>Username: </strong>{login}

                        </Fragment>}
                    </li>

                    <li>
                        {company && <Fragment>

                            <strong>Company: </strong>{company}

                        </Fragment>}
                    </li>

                    <li>
                        {blog && <Fragment>

                            <strong>Website: </strong>{blog}

                        </Fragment>}
                    </li>



                </ul>

            </div>






        </div>

        {/* <div className="card text-center">

            <div className="badge badge-primary">Followers: {followers}</div>
            <div className="badge badge-dark">Following: {following}</div>
            <div className="badge badge-success">Repos: {public_repos}</div>
            <div className="badge badge-dark">Gists: {public_gists}</div>

        </div> */}

        <Repos repos={repos} />

    </Fragment>;


}


export default User