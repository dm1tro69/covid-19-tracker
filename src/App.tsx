import React, {useEffect, useState} from 'react';
import Cards from "./components/Cards/Cards";
import Chart from "./components/Chart/Chart";
import CountryPicker from "./components/CountryPicker/CountryPicker";
import  styles from './App.module.css'
import axios from "axios";
import {Data} from "./types";

function App() {

    const [res, setRes] = useState<Data | null>(null)

    useEffect(() => {
        const url = 'https://covid19.mathdro.id/api'

         const fetchData = async () => {
            try {
                const response = await axios.get(url)
                const data: Data = await response.data
                setRes(data)
            }catch (e) {
                console.log(e)
            }
        }
      fetchData()


    }, [])

    if (!res) {
        return <p>Loading...</p>
    }


  return (
    <div className={styles.container}>
        <Cards data={res}/>
        <CountryPicker/>
        <Chart/>
    </div>
  );
}

export default App;
