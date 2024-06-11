const renderValue = (value) => {
    if (typeof value === 'object') {
        return (
            <ul>
                {Object.entries(value).map(([key, val]) => (
                    <li key={key} style={{ marginLeft: '20px' }}>
                        <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {renderValue(val)}
                    </li>
                ))}
            </ul>
        );
    }

    return value;
};

export default renderValue;