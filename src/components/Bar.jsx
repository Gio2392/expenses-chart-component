import { BarStyle, TextBarStyle } from './BarStyle';


export const Bar = ({day, amount, max}) => {

    const percent = Math.round( amount / max * 100 );

    console.log(percent);

return (
    <div className='graphic'>
        <div className="bar">
            <BarStyle per={percent} amount={amount}>
                <div></div>
            </BarStyle>
            <TextBarStyle>{day}</TextBarStyle>
        </div>
    </div>
  )
}
