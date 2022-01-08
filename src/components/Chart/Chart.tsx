import React, {useEffect, useState} from 'react';
import styles from './Chart.module.css'
import {Daily} from "../../types";
import axios from "axios";
import {Line, Bar} from "react-chartjs-2";
// @ts-ignore
import { Chart as Charts, LineController, LineElement, PointElement, LinearScale, Title,CategoryScale } from 'chart.js';

// @ts-ignore
Charts.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale);





const Chart = () => {
    const [daily, setDaily] = useState<Daily[] | []>([])

    useEffect(() => {
        const url = 'https://covid19.mathdro.id/api'
        const getFetchDaily = async () => {
           try {
               const response = await axios.get(`${url}/daily`)
               const data: Daily[] = await response.data
               setDaily(data)

           }catch (e) {
               console.log(e)
           }
        }
        getFetchDaily()
    }, [])

    if (!daily){
        return <p>Loading...</p>
    }


    const lineChat = (
       daily.length? (<Line data={{
            labels: daily.map(({reportDate}) => reportDate),
            datasets: [{
                data: daily.map(({confirmed}) => confirmed.total),
                label: 'Infected',
                borderColor: '#3333ff',
                fill: true
            }, {
                data: daily.map(({deaths}) => deaths.total),
                label: 'Deaths',
                borderColor: 'red',
                backgroundColor: 'rgba(255, 0, 0, 0.5)',
                fill: true
            }]
        }}/>): null
    )

    return (
        <div className={styles.container}>
            {lineChat}
        </div>
    );
};

export default Chart;
