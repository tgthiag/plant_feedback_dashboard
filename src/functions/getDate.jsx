export function getDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hour = String(date.getHours()).padStart(2, '0');
    const minute = String(date.getMinutes()).padStart(2, '0');

    const formattedDate = `${year}-${month}-${day}-${hour}-${minute}`;
    console.log(formattedDate);
    return formattedDate;
}

export function yearMonth() {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1);

    const formattedDate = `${year}-${month}`;
    return formattedDate;
}

export function getYear() {
    const date = new Date();
    const year = date.getFullYear();

    const formattedDate = `${year}`;
    return formattedDate;
}

export function getMonth() {
    const date = new Date();
    const month = String(date.getMonth() + 1);

    const formattedDate = `${month}`;
    return formattedDate;
}