import React, {Fragment} from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';

/*
    In order to fix the adjacent JSX Elements, there are few ways of handling this:

    1. Either wrap everything inside a Div.
    2. Fragments / Auxillary HOC.
    3. Array?
*/
const layout = ( props ) => (
    <Fragment>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Fragment>
);


export default layout;