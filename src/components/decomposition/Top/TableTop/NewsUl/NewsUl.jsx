export default function NewsUl(props) {
  const arrayLi = props.props;
  console.log(arrayLi);
  // arrayLi.map((elemli) => {<li className='newsLi'>{elemli}</li>});
  // 
  // const newArrayLi = arrayLi.map((elemli) => {<li className='newsLi'>{elemli}</li>});
  // console.log(newArrayLi);
  return (
    <>
      <ul className='newsUl'>
        {/* {console.log(arrayLi)} */}
        <li className='newsLi'>Путин упростил получение автомобильных номеров</li>
        <li className='newsLi'>В команде Зеленского раскрыли план реформ на Украине</li>
        <li className='newsLi'>"Турпомощь" прокомментировала гибель десятков россиян в Анталье</li>
        <li className='newsLi'>Суд закрыл дело Демпартии США против России</li>
        <li className='newsLi'>На Украине призвали создать ракеты для удара по Москве</li>
      </ul>
    </>
  )
}
