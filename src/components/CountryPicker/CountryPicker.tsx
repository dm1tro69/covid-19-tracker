import React, { useEffect, useState} from 'react';
import styles from './CountryPicker.module.css'
import {NativeSelect, FormControl} from "@material-ui/core";
import {Countries, Daily} from "../../types";
import axios from "axios";
import {getFetchCountries} from "../../api";

const CountryPicker = () => {

    const [country, setCountry] = useState<Countries[] | []>([])


        useEffect(() => {

            const fetchCountries = async () => {
                 // @ts-ignore
                setCountry(await getFetchCountries())

            }
            fetchCountries()



        }, [])
    console.log(country)

        if (!country){
            return <p>Loading...</p>
        }






    return (

        <FormControl className={styles.formControl}>
            <NativeSelect>
                <option value="global">Global</option>
                {country.map((count, i) => <option key={i} value={count} >{count}</option>)}
            </NativeSelect>
        </FormControl>

    );
};

export default CountryPicker;
