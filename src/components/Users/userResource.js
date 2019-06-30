import { useState, useEffect } from 'react';
import json from '../../apis/json';

const userResources = ()=> {
    // state = {
    //  users: []
    // }
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        const response = await json.get('/users');
        setUsers(response.data);
    };

    useEffect(() => {
        fetchUsers();
    }, [users]);

    return users;
};

export default userResources;