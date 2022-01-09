import axios from "axios";
import {Countries} from "../types";


const url = 'https://covid19.mathdro.id/api'

export const getFetchCountries = async () => {
    try {
        const {data: {countries}} = await axios.get(`${url}/countries`)

        return countries.map((country: { name: string; }) => country.name)

    }catch (e) {
        console.log(e)
    }
}