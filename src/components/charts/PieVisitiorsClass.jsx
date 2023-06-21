import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Label } from 'recharts';

function PieVisitorClass({ data }) {
  const colors = ['#FF6384', '#36A2EB', '#FFCE56']; // Customize colors as needed

  if (typeof data !== 'object' || data === null) {
    // Handle the case when data is not an object or null
    return <p>No data available</p>; // or any other appropriate action
  }

  const dataEntries = Object.entries(data); // Convert object to array of key-value pairs

  return (
    <div>
      <p style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>Origem dos feedbacks recebidos</p>
      <PieChart width={550} height={250}>
        <Tooltip />
        <Pie
          data={dataEntries}
          dataKey="1"
          nameKey="0"
          cx="46%"
          cy="50%"
          outerRadius={70}
          fill="#8884d8"
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(1)}%`}
        >
          {dataEntries.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
          <Label position="center" fontSize={18} fontWeight="bold" /> {/* Add a label in the center if desired */}
        </Pie>
      </PieChart>
    </div>
  );
}

export default PieVisitorClass;
