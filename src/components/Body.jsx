import { useState, useEffect } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import { signInAnonymously } from 'firebase/auth';
import { auth } from '../services/firebaseRealtimeDb';
import DataQuestions from '../data/DataQuestions';
import { getYear, getMonth } from '../functions/getDate';
import AverageRateByDay from './charts/AverageRateByDay';
import LastRates from './charts/LastRates';
import CircleProgressBar from './charts/CircleProgressBar';
import { ResponsiveContainer } from 'recharts';
import Title from '../functions/title';
import ChartsBackground from './ChartsBackground';
import RatesQtyChart from './charts/RatesQtyChart';
import calculateAverageValue from '../functions/getIndividualAverage';

function Body(params) {
    const [data, setData] = useState([]);

    useEffect(() => {
        const database = getDatabase();
        const databaseRef = ref(database, `feedback/macedo/${getYear()}/${getMonth()}`);
        signInAnonymously(auth);

        onValue(databaseRef, (snapshot) => {
            const firebaseData = snapshot.val();
            if (firebaseData) {
                const dataInstances = Object.values(firebaseData).map((item) => {
                    const {
                        value1,
                        value2,
                        value3,
                        value4,
                        value5,
                        comment,
                        date,
                        plant,
                        lang,
                        business,
                    } = item;

                    const [year, month, day, hour, minute] = date.split('-').map(Number);
                    const formattedDate = new Date(year, month - 1, day, hour, minute);

                    return new DataQuestions(
                        parseInt(value1),
                        parseInt(value2),
                        parseInt(value3),
                        parseInt(value4),
                        parseInt(value5),
                        comment,
                        formattedDate,
                        plant,
                        lang,
                        business
                    );
                });
                console.log(dataInstances)
                setData(dataInstances);
            }
        });
    }, []);

    const averages = data.map((item) => {
        const values = [item.value1, item.value2, item.value3, item.value4, item.value5].map(Number);
        const sum = values.reduce((prev, curr) => prev + curr, 0);
        const average = sum / values.length;

        return { ...item, average };
    });

    const itemCountByDate = data.reduce((countMap, item) => {
        const dateString = new Date(item.date).toISOString(); // Convert to ISO string
        const [year, month, day] = dateString.split('T')[0].split('-');
        const date = `${day}/${month}`; // Format the date as DD-MM
        countMap[date] = (countMap[date] || 0) + 1;
        return countMap;
    }, {});


    return (
        <div style={{ backgroundColor: 'rgba(218,222,218,1)', borderRadius: 30, width: '80%', height: '100%' }}>
            <Title string={"Feedback de visitantes"} />
            <ChartsBackground>
                <div style={{ display: 'flex', flexDirection: "row" }}>

                    <div style={{ width: "25%", textAlign: "-webkit-center" }}>
                        <ResponsiveContainer width={"100%"} height="10%">
                            <CircleProgressBar data={averages} />
                        </ResponsiveContainer>
                    </div>
                    <div style={{ width: "75%", }}>
                        <ResponsiveContainer width={"100%"} height="10%">
                            <RatesQtyChart itemCountByDate={itemCountByDate} />

                        </ResponsiveContainer>
                    </div>

                </div>
            </ChartsBackground>

            <div style={{display:"flex", flexDirection:"row"}}>
                <div style={{display:"flex", flexDirection:"column"}}>
                <ChartsBackground>
                    <div>
                    <ResponsiveContainer width={"100%"} height="100%">
                        <LastRates averages={averages} />
                    </ResponsiveContainer>
                    <ResponsiveContainer width={"100%"} height="100%">
                        <AverageRateByDay data={averages} />
                    </ResponsiveContainer>
                    </div>
                    </ChartsBackground>
                </div>
                <div style={{backgroundColor:"red", alignSelf:"center", justifyContent:"center"}}>
                    {calculateAverageValue(data, "value5")}
                </div>
            </div>
        </div>
    );
}

export default Body;
