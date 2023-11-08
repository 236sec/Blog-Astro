
export const formatDate = (date) => {
    const inputDate = new Date(date);
    const day = inputDate.getUTCDate();
    const month = inputDate.toLocaleString('default', { month: 'long' });
    const year = inputDate.getUTCFullYear();
    return `${day} ${month} ${year}`;
}