import React from "react";
import './Chart.css'
import ChartBar from "./ChartBar";

const Chart=(props)=>{

    const ValueArray=props.dataPoints.map(datapoint=>datapoint.value)
    const Max=Math.max(...ValueArray)

    return <div className="chart">
        {props.dataPoints.map(dataPoint=> <ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={Max} label={dataPoint.label} />)}
    </div>
}

export default Chart
