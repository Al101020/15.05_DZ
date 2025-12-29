import Top from './Top/Top';

const arrayLi = ['Путин упростил получение автомобильных номеров',
   'В команде Зеленского раскрыли план реформ на Украине',
   '"Турпомощь" прокомментировала гибель десятков россиян в Анталье',
   'Суд закрыл дело Демпартии США против России',
   'На Украине призвали создать ракеты для удара по Москве'];

import YandexSearch from './YandexSearch/YandexSearch';
import Advertisement from './Advertisement/Advertisement';
import Bottom from './Bottom/Bottom';

export default function Decomposition() {
  return (
    <>
      <Top props={arrayLi} />
      <YandexSearch />
      <Advertisement />
      <Bottom />
    </>
  )
}
