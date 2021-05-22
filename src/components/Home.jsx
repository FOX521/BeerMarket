import React from 'react';
import DescribeStore from './DescribeStore';
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
            </div>
        )
    }
};

export default Home;