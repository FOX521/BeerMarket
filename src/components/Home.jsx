import React from 'react';
import DescribeStore from './DescribeStore';
import Footer from './Footer';
import HitProduct from './HitProduct';
import Map from './Map';
import Promotion from './Promotion';

class Home extends React.Component {

    render() {
        return (
            <div>
                <Promotion/>
                <DescribeStore/>
                <HitProduct/>
                <Map/>
                <Footer/>
            </div>
        )
    }
};

export default Home;