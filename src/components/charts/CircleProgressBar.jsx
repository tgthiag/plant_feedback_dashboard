import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function CircleProgressBar({ data }) {

    const totalAverage = (data.reduce((sum, item) => sum + item.average, 0) / data.length) * 10;

    return (
        <div style={{ width: 300, height: 300, margin: 10 }}>
            <p style={{ color: "black", fontSize: 18, fontWeight: "bold" }}>Média Geral Mensal</p>
            <CircularProgressbarWithChildren value={totalAverage.toFixed(1)}styles={buildStyles({
                // Text size
                textSize: '20px',
                // How long animation takes to go from one percentage to another, in seconds
                pathTransitionDuration: 2.5,
                // Colors

                backgroundColor: '#3e98c7',
            })} >
                <div>
                    <p style={{color:"#3e98c7", fontWeight:"bold", fontSize: 42}}>{totalAverage.toFixed(1)}%</p>
                <p style={{color: "gray", fontSize:18}}>Meta: 75%</p>
                </div>
            </CircularProgressbarWithChildren>
        </div>
    );
}

export default CircleProgressBar;