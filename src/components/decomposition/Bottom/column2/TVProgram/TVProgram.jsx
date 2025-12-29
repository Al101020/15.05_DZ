export default function TVProgram() {
  return (
    <>
      <div className='divTvProgram'>
        <a  href='#' className='titleBotom'>Телепрограмма</a>
        <img className='imgTvProgram' 
          src='http://localhost:5173/src/components/decomposition/Bottom/column2/TVProgram/эфир.png' />
      </div>
      <div className='elemTvProgram'>
        <div className='TvProgram'>02:00 ТНТ. Best</div>
        <div className='gray'>ТНТ International</div>
      </div>
      <div className='elemTvProgram'>
        <div className='TvProgram'>02:15 Джинглики</div>
        <div className='gray'>Карусель INT</div>
      </div>
      <div className='elemTvProgram'>
        <div className='TvProgram'>02:25 Наедине со всеми</div>
        <div className='gray'>Первый</div>
      </div>
    </>
  )
}