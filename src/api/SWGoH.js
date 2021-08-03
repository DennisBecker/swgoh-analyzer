export const BASE_URL = "";

const createUrl = (base, path) => `${base}${path}`;

export const getCharacters = () => [
  createUrl(BASE_URL, '/api/characters'),
  {
    method: "GET",
  }
];

export const getPlayerUnits = (allycode) => [
  createUrl(BASE_URL, `/api/player/${allycode}/?format=json`),
  {
    method: "GET",
  }
];