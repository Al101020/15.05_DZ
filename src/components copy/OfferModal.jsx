export default function OfferModal({title, link}) {
  return (
    <div className="card border">
      <div className="modal-body">
        <h2>{title}</h2>
        <a href={link}>Узнать подробнее</a>
      </div>
      <button className="btn btn-primary">закрыть</button>
    </div>
  )
}
