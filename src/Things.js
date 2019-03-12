import React from 'react';


const Things = ({ things }) => {
    return (
        <div>
            {
                things.map( ({ id, name, favorite }) => {
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

export default Things;

