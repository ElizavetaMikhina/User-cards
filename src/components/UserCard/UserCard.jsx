import React from 'react'
import styles from './UserCard.module.scss'
import Button from '../ui/Button/Button';
import renderValue from '../../utils/renderValue';

const UserCard = ({ user, onDelete }) => {
    return (
        <>
            <li key={user.id} className={styles.card}>
                <div className={styles.info}>
                    {Object.entries(user).map(([key, value]) => (
                        <div key={key} className={styles.detail}>
                            <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {renderValue(value)}
                        </div>
                    ))}
                </div>
                <Button 
                    onClick={() => onDelete(user.id)} 
                    text="Удалить"
                    className={styles.deleteButton}
                />
            </li>
        </>
    );
};

export default UserCard
