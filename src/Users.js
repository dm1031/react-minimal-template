import React from 'react';


const Users = ({ users }) => {
    return (
        <div>
            {
                users.map( ({ id, name, favorite }) => {
                    return (
                        <li key={id}>
                            {name}
                        </li>
                    )
                })
            }
        </div>
    )
}

export default Users;
