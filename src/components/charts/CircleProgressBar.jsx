import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function CircleProgressBar({ data }) {
    const percentage = 66;
    console.log(data)


    const totalAverage = (data.reduce((sum, item) => sum + item.average, 0) / data.length) * 10;
    console.log(totalAverage.toFixed(1));

    return (
        <div style={{ width: 300, height: 300, margin: 10 }}>
            <p style={{ color: "black", fontSize: 18, fontWeight: "bold" }}>Média Geral Mensal</p>
            <CircularProgressbar value={totalAverage.toFixed(1)} text={`${totalAverage.toFixed(1)}%`} styles={buildStyles({
                // Text size
                textSize: '20px',
                // How long animation takes to go from one percentage to another, in seconds
                pathTransitionDuration: 2.5,
                // Colors
                trailColor: '#d6d6d6',
                backgroundColor: '#3e98c7',
            })} />
        </div>
    );
}

export default CircleProgressBar;