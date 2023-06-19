import React, { useEffect, useState } from 'react';
import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from "recharts";

function CalculateAverage(items) {
  const sum = items.reduce((total, item) => total + item.average, 0);
  return sum / items.length;
}

function AverageRateByDay({ data }) {
  const [groupedData, setGroupedData] = useState([]);

  useEffect(() => {
    const groupedItems = data.reduce((result, item) => {
      const itemDate = new Date(item.date);
      const formattedDate = itemDate.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit'
      });

      if (!result[formattedDate]) {
        result[formattedDate] = [];
      }

      result[formattedDate].push(item);

      return result;
    }, {});

    const formattedData = Object.keys(groupedItems).map(date => {
      const items = groupedItems[date];
      const average = CalculateAverage(items);

      return { date, average }; // Use `average` instead of `value`
    });

    setGroupedData(formattedData);
  }, [data]);

  return (
    <div>
      <p style={{ color: "black" }}>Avaliação média por dia</p>
      <LineChart width={1000} height={300} data={groupedData} title='teste'>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={"date"} />
        <YAxis domain={[0, 10]} />
        <Tooltip />
        <Line type="monotone" dataKey="average" stroke="green" strokeWidth={7} />
      </LineChart>
    </div>
  );
}

export default AverageRateByDay;
