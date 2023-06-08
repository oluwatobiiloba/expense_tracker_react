import ChartBar from "./ChartBar";
import "./Chart.css";
const Chart = (props) => {
  const dataPointsValues = props.chartDataPoints.map(
    (dataPoint) => dataPoint.value
  );
  const totalMax = Math.max(...dataPointsValues);

  return (
    <div className="chart">
      {props.chartDataPoints.map((datapoint) => (
        <ChartBar
          key={datapoint.label}
          value={datapoint.value}
          maxValue={totalMax}
          label={datapoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
