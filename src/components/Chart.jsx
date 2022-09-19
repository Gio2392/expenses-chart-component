import { ChartInfo } from "./ChartInfo"
import { Graphic } from "./Graphic"

export const Chart = () => {
  return (
    <div className='box paleOrange'>
        <h2 className="mb">Spending - Last 7 days</h2>

        <Graphic />

        <hr />

        <ChartInfo />
    </div>
  )
}
