import { useState, useEffect } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import { signInAnonymously } from 'firebase/auth';
import { auth } from '../services/firebaseRealtimeDb';
import DataQuestions from '../data/DataQuestions';
import { getYear, getMonth } from '../functions/getDate';
import CircleProgressBar from './charts/CircleProgressBar';
import { ResponsiveContainer } from 'recharts';
import Title from '../functions/title';
import ChartsBackground from './ChartsBackground';
import RatesQtyChart from './charts/RatesQtyChart';
import MyDashboardTable from './charts/Table';
import PieVisitorClass from './charts/PieVisitiorsClass';
import countBusinessKeys from '../functions/getPieValues';
import WordsCloud from './charts/WordsCloud';

function Body(params) {
  const [data, setData] = useState([]);
  const [plant, setPlant] = useState("Macedo")

  useEffect(() => {
    const database = getDatabase();
    const databaseRef = ref(database, `feedback/${plant.toLowerCase()}/${getYear()}/${getMonth()}`);
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
  }, [plant]);

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

  const handleClick = () => {
    if (plant === 'Macedo') {
      setPlant('Cumbica');
    } else if (plant === 'Cumbica') {
      setPlant('Macedo');
    }
  };


  return (
    <div style={{ backgroundColor: 'rgba(218, 222, 218, 1)', borderRadius: 30, width: '80%', height: '100%', overflow: 'hidden' }}>
      <Title string={plant + " - Feedback de visitantes"} onClick={handleClick} />
      <ChartsBackground>
        <div style={{ display: 'flex', flexDirection: 'row', height: '20%' }}>
          <div style={{ width: '25%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ResponsiveContainer width="100%" height="100%">
              <CircleProgressBar data={averages} />
            </ResponsiveContainer>
          </div>
          <div style={{ width: '75%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ResponsiveContainer width="100%" height="100%">
              <RatesQtyChart itemCountByDate={itemCountByDate} />
            </ResponsiveContainer>
          </div>
        </div>
      </ChartsBackground>
      <ResponsiveContainer width="100%" height="100%">
        <div style={{ display: 'flex', flexDirection: 'row', height: '100%' }}>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <ChartsBackground>
              <WordsCloud rawData={data} />
            </ChartsBackground>
          </div>
          {/* RATES BY DAY & LAST */}
          {/* <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <ChartsBackground>
                  <div style={{ flex: 1 }}>
                    <ResponsiveContainer width="100%" height="50%">
                      <LastRates averages={averages} />
                    </ResponsiveContainer>
                    <ResponsiveContainer width="100%" height="50%">
                      <AverageRateByDay data={averages} />
                    </ResponsiveContainer>
                  </div>
                </ChartsBackground>
              </div> */}

          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ChartsBackground>
              <MyDashboardTable data={data} />
            </ChartsBackground>
          </div>
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ChartsBackground>
              <PieVisitorClass data={countBusinessKeys(data)} />
            </ChartsBackground>
          </div>
        </div>
      </ResponsiveContainer>
    </div>
  );

}

export default Body;
