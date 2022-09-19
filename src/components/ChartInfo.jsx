import React from 'react'

export const ChartInfo = () => {
  return (
    <div className="footer flex">
            <div>
                <p className='text'>Total this Month</p>
                <h1 className='total'>$478.33</h1>
            </div>
            <div className="percent">
                <p className='text bold'>+2.4%</p>
                <span className='text'>from last month</span>
            </div>
        </div>
  )
}
