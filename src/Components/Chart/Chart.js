import ChartBar from "./ChartBar";
import './Chart.css';
const Chart = props =>{
    const datapointsValues = props.datapoints.map((dataPoint => dataPoint.value));
    const totalMaximum = Math.max(...datapointsValues);

    return <div className="chart">
        {props.datapoints.map((dataPoint) => 
        <ChartBar  
        key ={dataPoint.label} 
        value={dataPoint.value}
        maxValue={totalMaximum} 
        label={dataPoint.label}/>)}
    </div>

}


export default Chart;