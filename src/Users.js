import React from 'react';


const Users = ({ users }) => {
    return (
        <ul>
            {
                users.map( ({ id, name, favorites }) => {
                    return (
                        <li key={id}>
                            {name}
                                <ul>
                                    {
                                        favorites.map( ({ id, rank, thing }) => {
                                            return (
                                                <li key={id}>
                                                    {thing.name} (ranked) {rank}
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

export default Users;

