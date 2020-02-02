import React,{Fragment} from 'react';
import Search from '../users/Search';
import Banner from '../layout/Banner';
import Users from '../users/Users';


const Home = ()=>{


    return(

        <Fragment>
            <Banner/>
            <Search/>
            <Users/>
        </Fragment>
    )
}


export default Home