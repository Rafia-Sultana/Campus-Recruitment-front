import React from 'react'
import './Home.css'
import Center from './Center';
import FeaturedJobs from './FeaturedJobs'
import Banner from './Banner';


const Home = () => {
 return (
        <div>
          <Banner></Banner>
          <Center></Center>
          <FeaturedJobs></FeaturedJobs>
        </div>
    );
}

export default Home;