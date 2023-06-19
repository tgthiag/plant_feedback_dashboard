import {
    Area, AreaChart, Bar, BarChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Scatter, ScatterChart, LineChart, PieChart, Pie, PolarAngleAxis, Radar,
    RadarChart, PolarGrid, PolarRadiusAxis
} from "recharts";

function LastRates({averages}) {

    return (
        <div>
            <p style={{ color: "black" }}>Ultimas avaliações</p>
            <LineChart width={1000} height={150} data={averages}>
                <CartesianGrid></CartesianGrid>

                <YAxis domain={[0, 10]} />
                <Tooltip />

                {/* <Line type="monotone" dataKey="loss" stroke="green" /> */}
                <Line type="monotone" dataKey="average" stroke="purple" strokeWidth={3} />

            </LineChart>
        </div>
    );
}

export default LastRates;