export const getUsers = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error('Ошибка получения данных');
        }
        const data = await response.json();
        return data.slice(0, 5);
    } catch (error) {
        console.error('Ошибка получения данных:', error);
        return [];
    }
};