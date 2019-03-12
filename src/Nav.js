import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ location }) => {
    const pathname = location.pathname;
    const paths = [
        '/users',
        '/things'
    ];
    return (
        <ul className="nav nav-tabs">
            {
                paths.map( (path) => {
                    return (
                        <li key={path}>
                            <Link to={path} className="nav nav-link">
                                {path.slice(1)}
                            </Link>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default Nav;

