import { useState, useEffect } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import { signInAnonymously } from 'firebase/auth';
import { auth } from '../services/firebaseRealtimeDb';
import DataQuestions from '../data/DataQuestions';
import { getYear, getMonth } from '../functions/getDate';
import AverageRateByDay from './charts/AverageRateByDay';
import LastRates from './charts/LastRates';

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

    return (
        <div style={{ backgroundColor: 'rgba(218,222,218,1)', borderRadius: 30, width: '80%', height: '80vh' }}>
            <AverageRateByDay data={averages} />
            <LastRates averages={averages} />
        </div>
    );
}

export default Body;
