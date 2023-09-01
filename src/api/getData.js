export const getData = async () => {
    const url = `https://rickandmortyapi.com/api/character`;
    const data = await fetch(url);
    const res = data.json();
    return res

};