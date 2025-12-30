// import NewsUl from "./TableTopLeft/NewsUl/NewsUl";
import TableTopLeft from "./TableTopLeft/TableTopLeft";
import TableTopRifht from "./TableTopRifht/TableTopRifht";

export default function TableTop(props) {
  const arrayLi = props.props;
    return (
      <div className='tableTop'>
        <TableTopLeft props={arrayLi} />
        <TableTopRifht />
      </div>
    )
  }
  1