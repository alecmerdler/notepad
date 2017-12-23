import { plot } from 'plotly.js/lib/core';

export const LineChart = (props: LineChartProps) => <div>
  <h5>{props.title}</h5>
  <div id="line-chart" style={{width: '100%'}} />
</div>;

export const connectChart = (Component) => (props: LineChartProps) => {
  const data = [{
    x: [1, 2, 3, 4],
    y: [10, 12, 4, 13],
    type: 'scatter' as any,
  }];

  return <Component {...props} onComponentDidMount={() => plot(document.getElementById('line-chart'), data)} />;
};

export const LineChartAlive = connectChart(LineChart);

export type LineChartProps = {
  title: string;
};
