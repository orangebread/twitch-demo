import React from 'react';

import userResource from './userResource';

const UserList = () => {
    const users = userResource();
    return (
        <ul>
            {users.map( user => (<li key={user.id}>{user.name}</li>))}
        </ul>
    );
}

export default UserList;