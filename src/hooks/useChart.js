import { useEffect, useState } from 'react';

export const useChart = (jsonData) => {
  const [chartValues, setChartValues] = useState([]);

  /* const getData = async () => {
    const result = await fetch(url);
    const data = await result.json();

    setChartValues(data);
  }; */
  useEffect(() => {
    setChartValues(jsonData);
  }, []);

  const amountArray = chartValues.map((item) => item.amount);

  //const total = amountArray.reduce( (item, acc) => item + acc )
  const maxValue = Math.max(...amountArray);

  return {
    maxValue,
    chartValues,
  };
};
