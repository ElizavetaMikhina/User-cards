import React from 'react'
import styles from './Button.module.scss'

const Button = ({ onClick, text, className }) => {
    return (
        <button 
            onClick={onClick}
            className={`${styles.button} ${className}`}
        >
            {text}
        </button>
    );
}

export default Button
