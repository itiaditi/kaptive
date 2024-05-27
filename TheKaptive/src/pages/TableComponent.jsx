import React, { useState } from 'react';
import { operatingTotals, investingTotals, financingTotals, netChangeInCash, endingCash } from '../data';

const TableComponent = () => {
  const [showNextMonths, setShowNextMonths] = useState(false);
  const [decimalView, setDecimalView] = useState(true);

  const firstQuarterMonths = ['Jan', 'Feb', 'March', 'April', 'May', 'June'];
  const secondQuarterMonths = ['July', 'August', 'September', 'October', 'November', 'December'];

  const roundOffValue = (value) => {
    return decimalView ? Number(value).toFixed(0) : `${(Number(value)/36500 * 100).toFixed(0)}%`;
  };

  const toggleView = () => {
    setDecimalView(!decimalView);
  };

  const renderDataRows = (totals, label) => (
    <>
      {showNextMonths
        ? secondQuarterMonths.map((month, index) => (
            <div key={index} className="md:table-row flex flex-col md:flex-row border-t border-gray-300 hover:bg-gray-100">
              <div className="md:table-cell p-3 border border-gray-300 font-medium capitalize bg-gray-200 md:bg-transparent">
                {label} - {month}
              </div>
              <div className="md:table-cell p-3 border border-gray-300">{roundOffValue(totals[month])}</div>
            </div>
          ))
        : firstQuarterMonths.map((month, index) => (
            <div key={index} className="md:table-row flex flex-col md:flex-row border-t border-gray-300 hover:bg-gray-100">
              <div className="md:table-cell p-3 border border-gray-300 font-medium capitalize bg-gray-200 md:bg-transparent">
                {label} - {month}
              </div>
              <div className="md:table-cell p-3 border border-gray-300">{roundOffValue(totals[month])}</div>
            </div>
          ))}
    </>
  );

  return (
    <>
      <div className="space-y-2 border-none">
        <div className='flex justify-between'>
        <div className="text-2xl font-bold">Cashflow Summary - 1</div>
        <div>{decimalView ? <button onClick={toggleView} className=" shadow-lg shadow-indigo-500/40 p-2 mr-2 rounded font-semibold hover:text-purple-500 hover:bg-gray-100">
          Percentage View</button> : <button onClick={toggleView} className=" shadow-lg shadow-indigo-500/40 p-2 mr-2 rounded font-semibold hover:text-purple-500 hover:bg-gray-100">
           Decimal View</button>}
        </div>
        </div>
        <div className="bg-white shadow-lg hover:shadow-xl rounded-md overflow-x-auto">
          <div className="hidden md:table w-full leading-normal">
            <thead className="capitalize text-gray-600 text-md font-semibold bg-gray-200">
              <tr>
                <th className="text-left text-black p-3 border border-gray-300">
                  <p>Cashflow</p>
                </th>
                {showNextMonths
                  ? secondQuarterMonths.map((month, index) => (
                      <th key={index} className="text-left text-black p-3 border border-gray-300">
                        <p>{month}</p>
                      </th>
                    ))
                  : firstQuarterMonths.map((month, index) => (
                      <th key={index} className="text-left text-black p-3 border border-gray-300">
                        <p>{month}</p>
                      </th>
                    ))}
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="border-t border-gray-300 hover:bg-gray-100">
                <td className="p-3 border border-gray-300">
                  <p className="text-black font-medium capitalize">Operating Activities</p>
                </td>
                {showNextMonths
                  ? secondQuarterMonths.map((month, index) => (
                      <td key={index} className={`p-3 border border-gray-300 ${index % 2 === 0 ? 'bg-gray-100' : ''}`}>
                        {roundOffValue(operatingTotals[month])}
                      </td>
                    ))
                  : firstQuarterMonths.map((month, index) => (
                      <td key={index} className={`p-3 border border-gray-300 ${index % 2 === 0 ? 'bg-gray-100' : ''}`}>
                        {roundOffValue(operatingTotals[month])}
                      </td>
                    ))}
              </tr>

              <tr className="border-t border-gray-300 hover:bg-gray-100">
                <td className="p-3 border border-gray-300">
                  <p className="text-black font-medium capitalize">Investing Activities</p>
                </td>
                {showNextMonths
                  ? secondQuarterMonths.map((month, index) => (
                      <td key={index} className={`p-3 border border-gray-300 ${index % 2 === 0 ? 'bg-gray-100' : ''}`}>
                        {roundOffValue(investingTotals[month])}
                      </td>
                    ))
                  : firstQuarterMonths.map((month, index) => (
                      <td key={index} className={`p-3 border border-gray-300 ${index % 2 === 0 ? 'bg-gray-100' : ''}`}>
                        {roundOffValue(investingTotals[month])}
                      </td>
                    ))}
              </tr>

              <tr className="border-t border-gray-300 hover:bg-gray-100">
                <td className="p-3 border border-gray-300">
                  <p className="text-black font-medium capitalize">Financing Activities</p>
                </td>
                {showNextMonths
                  ? secondQuarterMonths.map((month, index) => (
                      <td key={index} className={`p-3 border border-gray-300 ${index % 2 === 0 ? 'bg-gray-100' : ''}`}>
                        {roundOffValue(financingTotals[month])}
                      </td>
                    ))
                  : firstQuarterMonths.map((month, index) => (
                      <td key={index} className={`p-3 border border-gray-300 ${index % 2 === 0 ? 'bg-gray-100' : ''}`}>
                        {roundOffValue(financingTotals[month])}
                      </td>
                    ))}
              </tr>

              <tr className="border-t border-gray-300 hover:bg-gray-100">
                <td className="p-3 border border-gray-300">
                  <p className="text-black font-medium capitalize">Net Change in Cash</p>
                </td>
                {showNextMonths
                  ? secondQuarterMonths.map((month, index) => (
                      <td key={index} className={`p-3 border border-gray-300 ${index % 2 === 0 ? 'bg-gray-100' : ''}`}>
                        {roundOffValue(netChangeInCash[month])}
                      </td>
                    ))
                  : firstQuarterMonths.map((month, index) => (
                      <td key={index} className={`p-3 border border-gray-300 ${index % 2 === 0 ? 'bg-gray-100' : ''}`}>
                        {roundOffValue(netChangeInCash[month])}
                      </td>
                    ))}
              </tr>

              <tr className="border-t border-gray-300 hover:bg-gray-100">
                <td className="p-3 border border-gray-300">
                  <p className="text-black font-medium capitalize">Ending Cash</p>
                </td>
                {showNextMonths
                  ? secondQuarterMonths.map((month, index) => (
                      <td key={index} className={`p-3 border border-gray-300 ${index % 2 === 0 ? 'bg-gray-100' : ''}`}>
                        {roundOffValue(endingCash[month])}
                      </td>
                    ))
                  : firstQuarterMonths.map((month, index) => (
                      <td key={index} className={`p-3 border border-gray-300 ${index % 2 === 0 ? 'bg-gray-100' : ''}`}>
                        {roundOffValue(endingCash[month])}
                      </td>
                    ))}
              </tr>
            </tbody>
          </div>

          <div className="block md:hidden">
            {renderDataRows(operatingTotals, 'Operating Activities')}
            {renderDataRows(investingTotals, 'Investing Activities')}
            {renderDataRows(financingTotals, 'Financing Activities')}
            {renderDataRows(netChangeInCash, 'Net Change in Cash')}
            {renderDataRows(endingCash, 'Ending Cash')}
          </div>
        </div>
        <div className="flex justify-center mt-2">
          <button onClick={() => setShowNextMonths(!showNextMonths)} className="text-blue-500 text-center border shadow-lg w-10 text-2xl p-2 rounded-md">
            {showNextMonths ? '<' : '>'}
          </button>
        </div>
      </div>
    </>
  );
};

export default TableComponent;
