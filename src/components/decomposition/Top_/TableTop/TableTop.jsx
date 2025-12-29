import NewsUl from "./NewsUl";
import TableTopRifht from "./TableTopRifht";

export default function TableTop() {
    return (
      <div className='tableTop'>
        <div className='tableTopLeft'>
          <NewsUl />
        </div>
        <div className='tableTopRight'>
          <TableTopRifht />
        </div>
      </div>
    )
  }
  