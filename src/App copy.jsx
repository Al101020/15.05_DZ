// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';
// Первый компонент TodayOfferModal
import TodayOfferModal from './components/TodayOfferModal';
// Второй компонент DiscountOfferModal
import DiscountOfferModal from './components/DiscountOfferModal';
// Третий компонент OfferModal_
import OfferModal_ from './components/OfferModal_';
// Четвёртый компонент OfferModal
import OfferModal from './components/OfferModal';
// const myProps = { title: "Заголовок", link: "https://netology.ru/" };
// Пятый компонент DiscountOfferModal
import OfferModal2 from './components/OfferModal2'
// Пятый компонент DiscountOfferModal


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <TodayOfferModal />
        <div>---------------------------------------------------------</div>
      </div>
      <div className="App">
        <DiscountOfferModal />
        <div>---------------------------------------------------------</div>
      </div>
      <div className="App">
        <OfferModal_ />
        <div>---------------------------------------------------------</div>
      </div>
      <div className="App">
        {/* <OfferModal {...myProps} /> */}
        {/* предыдущий пропсы работают и следующий тоже подход работает */}
        <OfferModal title="Заголовок Мой и ссылку задал Пропсами" link="https://netology.ru/" />
        <div>---------------------------------------------------------</div>
      </div>
      <div className="App">
        <OfferModal2 children={
          <>
          <h2>children=props!</h2>
          <a href="/today/">Узнать подробнее</a>
          </>
        } />
        <div>---------------------------------------------------------</div>
      </div>
    </>
    
  )
}

export default App
