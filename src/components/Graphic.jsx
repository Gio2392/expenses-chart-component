import dataJson from '../data/data.json';
import { useChart } from "../hooks/useChart";
import { Bar } from "./Bar";

export const Graphic = () => {

   const { chartValues, maxValue} = useChart(dataJson);   

  return (
    <div className="graphic">
        {
            chartValues.map( bar => <Bar key={bar.day} {...bar} max={ maxValue } />)
        }
    </div>
  )
}
