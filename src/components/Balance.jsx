import logoApp from '../images/logo.svg';

export const Balance = () => {
  return (
    <div className='box orange flex'>
        <div className='info'>
            <p className="title text">My balance</p>
            <h2 className="white">$921.48</h2>
        </div>
        <div className="logo">
            <img src={logoApp} alt="logo" />
        </div>
    </div>
  )
}
