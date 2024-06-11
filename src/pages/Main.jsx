import React, { useEffect, useState } from 'react'
import { getUsers } from '../utils/api';
import UserList from '../components/UserList/UserList';

const Main = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
      getUsers()
            .then(data => setUsers(data))
            .catch(error => console.error('Ошибка получения данных:', error));
    }, []);
  
    const deleteUser = (id) => {
        setUsers(users.filter(user => user.id !== id));
    };
    return (
        <div className="main">
            <UserList users={users} onDelete={deleteUser} />
        </div>
    );
}

export default Main
