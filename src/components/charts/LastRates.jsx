import {
    Area, AreaChart, Bar, BarChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceLine, Legend, Scatter, ScatterChart, LineChart, PieChart, Pie, PolarAngleAxis, Radar,
    RadarChart, PolarGrid, PolarRadiusAxis, ResponsiveContainer
} from "recharts";

function LastRates({ averages }) {

    return (
        <div style={{width:"100%", height: 100}}>
            <p style={{ color: "black", fontSize: 18, fontWeight: "bold" }}>Últimas avaliações</p>
            <LineChart width={700} height={130} data={averages}>
                {/* <YAxis domain={[0, 10]} fontSize={16}/> */}
                <Tooltip />
                {/* <ReferenceLine y={10} label="Max" fontSize={8}  stroke="red" strokeDasharray="3 3" /> */}
                <ReferenceLine y={7} label="Meta" fontSize={8}  stroke="blue" strokeDasharray="3 3" />
                {/* <YAxis domain={[0, 10]} fontSize={16}/> */}
                <Line type="monotone" dataKey="loss" stroke="green" />
                <Line type="monotone" dataKey="average" stroke="purple" strokeWidth={3} />

            </LineChart>
        </div>
    );
}

export default LastRates;