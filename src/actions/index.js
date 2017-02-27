import axios from "axios";


export const FETCH_SHIPS = "FETCH_SHIPS";
const BASE_URL = `http://localhost:8081/JerseyRest/ships/getShips`;

export  function fetchShips(){
    const request = axios.get(BASE_URL);

    return {
        type : FETCH_SHIPS,
        payload : request
    }
}