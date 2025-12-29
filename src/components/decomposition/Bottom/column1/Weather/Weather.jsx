export default function Weather() {
  return (
    <>
      <div><a  href='#'>Погода</a></div>
      <div className='divWeather'>
        <img className='imgWeather' 
          src='http://localhost:5173/src/components/decomposition/Bottom/column1/Weather/Дождь.png' />
        <div className='degrees'>+17ᵒ</div>
        <div className='morningAndEvening'>
          <div className='morning'>Утром +17</div>
          <div className='evening'>Днём +20</div>
        </div>
      </div>
    </>
  )
}
