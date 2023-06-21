import React from 'react';
import { BarChart, Bar, XAxis, Tooltip, LabelList } from 'recharts';

function RatesQtyChart({ itemCountByDate }) {
    const data = Object.entries(itemCountByDate).map(([date, count]) => ({ date, count }));

    return (
        <div>
            <p style={{ color: "black", fontSize: 18, fontWeight: "bold" }}>Quantidade de feedbacks recebidos</p>
            <BarChart width={1000} height={400} data={data}>
                <XAxis dataKey="date" />
                <Tooltip />
                <Bar dataKey="count" fill="#8884d8" >
                    <LabelList dataKey="count" position="top" fontSize={16} />
                </Bar>
            </BarChart>
        </div>
    );
}
export default RatesQtyChart;