import React from 'react'
import UserCard from '../UserCard/UserCard';
import styles from './UserList.module.scss'

const UserList = ({ users, onDelete }) => {
    return (
        <section className={styles.section}>
            <h2 className={styles.title}>Список пользователей</h2>
            <ul className={styles.list}>
            {users.map(user => (
                <UserCard key={user.id} user={user} onDelete={onDelete} />
                ))}
            </ul>
        </section>
    );
};

export default UserList
