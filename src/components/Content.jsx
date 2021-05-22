import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from '../components/Home';
import Beer from '../components/Beer';
import Sydr from '../components/Sydr';
import Snacks from '../components/Snacks';
import Ale from '../components/Ale';

const Content = () => {
    return (
        <main className='main grid-main'>
            <Route exact path={'/'} render={() => <Home />} />
            <Route path={'/beer'} render={() => <Beer />} />
            <Route path={'/ale'} render={() => <Ale />} />
            <Route path={'/sydr'} render={() => <Sydr />} />
            <Route path={'/snacks'} render={() => <Snacks />} />
        </main>
    )
}

export default Content;