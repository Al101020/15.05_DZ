import NewsUl from "./NewsUl/NewsUl";
import CurrencyPrices from "./CurrencyPrices/CurrencyPrices";

export default function TableTopLeft(props) {
  const arrayLi = props.props;
  return (
    <div className='tableTopLeft'>
      <NewsUl props={arrayLi} />
      <CurrencyPrices />
    </div>
  )
}