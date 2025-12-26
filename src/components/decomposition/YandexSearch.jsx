export default function YandexSearch() {
  return (
    <>
      <div className='yandexServices'>
        <a href='#' className='videoServ'>Видео</a>
        <a href='#' className='picturesServ'>Картинки</a>
        <a href='#' className='newsServ'>Новости</a>
        <a href='#' className='cardsServ'>Карты</a>
        <a href='#' className='marketServ'>Маркет</a>
        <a href='#' className='translatorServ'>Переводчик</a>
        <a href='#' className='broadcastsServ'>Эфир</a>
        <a href='#' className='isStillServ'>ещё</a>
      </div>
      <div className='yandexDiv'>
        <div id='yandex'>Яндекс</div>
        <input name='yandexInput' className='yandexInput' id='yandexInput' />
        <div id='yandexButton'>Найти</div>
      </div>
      <div id='yandexDivBottom'>
        <div>Найдётся всё. Hапример,</div>
        <div className='gray'>фаза луны сегодня</div>
      </div>
    </>
  )
}
