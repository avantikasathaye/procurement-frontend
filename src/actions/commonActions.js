export const removeLocalStorageItems = (dataToBeRemoved) => {
    debugger;
    Object.keys(dataToBeRemoved).forEach((item) => {
        localStorage.removeItem(item);
    })
}