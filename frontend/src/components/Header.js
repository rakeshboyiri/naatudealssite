// import logo from './logo.jpeg'; 
// import logo2 from './logo2.jpeg'
import logo3 from './logo3.png'
const Header = () => {
return (
    <div className='user-header'>
        <div className='logo-div'>
          <img src={logo3} alt='logo' className='logo-image'/> <br></br>
          <div className='header-text'>
          <h1>Naatu Deals</h1>
          <h3>💥Join Our Telegram Channel & Grab the Deals 💥</h3>
         <h4>👇🏻👇🏻👇🏻</h4>
          <button className='telegram-link' onClick={() => window.open('https://t.me/NaatuDeals', '_blank')}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/1200px-Telegram_logo.svg.png" alt="Telegram" width="20" height="20" /> Join Our Channel</button>
          </div>
         
        </div>
      </div>
)
}

export default Header;