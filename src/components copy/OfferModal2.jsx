export default function OfferModal2({children}) {
  return (
    <div className="card border">
      <div className="modal-body">
        {children}
      </div>
      <button className="btn btn-primary">закрыть</button>
    </div>
  )
}

