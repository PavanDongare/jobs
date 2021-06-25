import React from 'react';
import { Fragment } from 'react';

import MainNavigation from './Main-navigation';

function Layout(props) {
    return (
        <div className="bg-gray-300">
            <Fragment>
                <MainNavigation />
                <main>{props.children}</main>
                
            </Fragment>
        </div>

    );
}

export default Layout;