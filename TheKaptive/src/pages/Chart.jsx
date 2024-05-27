import React, { useState, useEffect } from 'react';
import { Chart } from 'react-google-charts';
import {totalRevenue, totalCOGS, grossProfit} from '../data'
import TableComponent from './TableComponent';
import { TopOptions } from './Dashboard';
function ChartComponent() {
  const [data, setData] = useState([
    ['', 'Revenue', 'COGS', 'Gross Profit'],
    ['2015-16', totalRevenue, 155, 100],
    ['2016-17', 160, 160, 120],
    ['2017-18', 90, 180, 180],
    ['2018-19', 97, 117, 100],
    ['2019-20', 150, 100, 100],
    ['2019-20', 150, 100, 100],
    ['2019-20', 150, 100, 100],
    ['2019-20', 150, 100, 100]
  ]);
console.log(totalRevenue,totalCOGS,grossProfit)
  useEffect(() => {
    
  }, []);


  return (<>
    <div className='shadow-lg pt-2 rounded-lg ' style={{ display: 'block' }}>
        <TopOptions/>
      <div className='mt-10'>
        <Chart
          width={'100%'}
          height={'200px'}
          chartType="Bar"
          loader={<div>Loading Chart...</div>}
          data={data}
          options={{
            title: 'Cashflow Summary',
            chartArea: { width: '50%' },
            hAxis: {
              title: 'Year',
              minValue: 0,
            },
            legend: {
              position: 'none',
            },
            colors: ['#9476CA', '#79C5E7', '#F59F72'],
          }}
        />
      
      <div className='pb-2'>
        <div className='flex flex-col sm:flex-row  m-4  justify-evenly w-80 sm:m-0'>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ width: 25, height: 15, backgroundColor: '#9476CA' }}></div>
            <span>Revenue</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ width: 25, height: 15, backgroundColor: '#79C5E7' }}></div>
            <span>COGS</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ width: 25, height: 15, backgroundColor: '#F59F72' }}></div>
            <span>Gross Profit</span>
          </div>
        </div>
      </div>
      </div>
    </div>
    </>
  );
}

export default ChartComponent;
