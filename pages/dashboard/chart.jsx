import React from 'react'
import Layout from '../../components/dashboard/layout'
import { Chart } from "react-google-charts";

export const data = [
  ["Country", "Popularity"],
  ["Germany", 200],
  ["United States", 300],
  ["Brazil", 400],
  ["Canada", 500],
  ["France", 600],
  ["RU", 700],
  ["Uzbekistan", 36],
];


export const dataLine = [
  ["Year", "Sales", "Expenses"],
  ["2004", 1000, 400],
  ["2005", 1170, 460],
  ["2006", 660, 1120],
  ["2007", 1030, 540],
];

export const options = {
  title: "Company Performance",
  curveType: "function",
  legend: { position: "bottom" },
};

function ChartComp() {
  return (
    <Layout>
     <div className='flex lg:flex-row flex-col ' >
      <div >
      <Chart
      chartEvents={[
        {
          eventName: "select",
          callback: ({ chartWrapper }) => {
            const chart = chartWrapper.getChart();
            const selection = chart.getSelection();
            if (selection.length === 0) return;
            const region = data[selection[0].row + 1];
            console.log("Selected : " + region);
          },
        },
      ]}
      chartType="GeoChart"
      
      height="400px"
      data={data}
    />

      </div>
      <div >
      <Chart
      chartType="LineChart"
      
      height="400px"
      data={dataLine}
      options={options}
    />
      </div>
     </div>
    </Layout>
  )
}

export default ChartComp