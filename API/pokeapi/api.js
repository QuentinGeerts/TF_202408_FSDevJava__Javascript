export async function getDataFromUrl (url) {
    return (await fetch(url)).json();
}