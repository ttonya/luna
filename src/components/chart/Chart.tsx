import { useEffect } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { getDate } from "../../utils/date";

import "./Chart.css";

interface ChartProps {
  data: any;
  yAxisTickFormatter?: (tick: number) => string;
}

export default function Chart(props: ChartProps) {
  const { data, yAxisTickFormatter } = props;

  useEffect(() => {}, [data]);

  return (
    <ResponsiveContainer width="100%" height={550}>
      <AreaChart
        className="Chart"
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="date"
          tickFormatter={getDate}
          tick={{ fill: "#899bd7" }}
        />
        <YAxis
          width={150}
          tickFormatter={yAxisTickFormatter}
          tick={{ fill: "#899bd7" }}
        />
        <Tooltip formatter={yAxisTickFormatter} />
        <Area
          type="monotone"
          dataKey="value"
          strokeWidth={3}
          stroke="#ba51e7"
          fill="url(#colorUv)"
        />
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#ba51e7" stopOpacity={0.5} />
            <stop offset="100%" stopColor="#64c8ff" stopOpacity={0.5} />
          </linearGradient>
        </defs>
      </AreaChart>
    </ResponsiveContainer>
  );
}
