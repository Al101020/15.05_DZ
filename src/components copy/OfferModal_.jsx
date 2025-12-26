export default function OfferModal_() {
  return (
    <div className="modal border">
      <div className="modal-body">
        <form action="/abonement/">
          <h2>Выбери свой абонемент!</h2>
          <select name="type">
            <option value="3">На 3 месяца</option>
            <option value="6">На 6 месяцев</option>
          </select>
          <button type="submit">Выбрать</button>
        </form>
      </div>
      <button className="modal-close">закрыть</button>
    </div>
  )
}
