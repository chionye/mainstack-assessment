import { LineChart, Line, XAxis } from "recharts";
import {
  filterAndSortGraphData
} from "@/services/helpers";
import { WindowDimensions } from "@/hooks/window-dimensions";

const Chart = ({data}: {data: any}) => {
  const filteredData = filterAndSortGraphData(data);
  const { width } = WindowDimensions();
  const chartWidth = width > 500 ? (width / 2) + 35 : width;
  
  return (
    <div>
      <LineChart width={chartWidth} height={257} data={filteredData}>
        <Line type='monotone' dataKey='amount' stroke='#FF5403' dot={false} />
        <XAxis stroke='#DBDEE5' dataKey={"date"} interval='preserveStartEnd' />
      </LineChart>
    </div>
  );
};

export default Chart;
