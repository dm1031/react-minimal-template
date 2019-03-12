import React from 'react';


const Things = ({ things }) => {
    return (
        <ul>
            {
                things.map( ({ id, name, favorites }) => {
                    return (
                        <li key={id}>
                            {name}
                                <ul>
                                    {
                                        favorites.map( ({ id, user }) => {
                                            return (
                                                <li key={id}>
                                                    favorited by: {user.name}
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default Things;

