import React from 'react';
import { Fragment } from 'react';

import MainNavigation from './Main-navigation';
import Footer from './Footer';
import Card from '../ui/Card';

function Layout(props) {
    return (
        <div className="bg-gray-300">
            <Fragment>
                <MainNavigation />
                <main>{props.children}</main>
                <Card> <Footer></Footer> </Card> 
            </Fragment>
        </div>

    );
}

export default Layout;