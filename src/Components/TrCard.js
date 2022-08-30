
import { useDispatch } from 'react-redux';
import { addquantity, addtotal, rmvprod, rmvquantity , rmvtotal} from "../rdx/cardActions";



const TrCard = ({ el}) => {
  const dispatch=useDispatch()

  function addPrice() {
    
    dispatch(addtotal(el.price))
   dispatch(addquantity(el.id))
  }function moinPrice() {
    dispatch(rmvtotal(el.price))
    dispatch(rmvquantity(el.id))

  }
  return (
    <tr>
      <td>{el.title}</td>
      <td>
        <img src={el.img} alt="" width="100px" height="100px" />
      </td>
      <td>
        <button
          onClick={() =>
            el.qteA< el.qte
              ? addPrice()
              : alert(`you reach the maximum quantity : ${el.qte}`)
          }
        >
          +
        </button>{" "}
        <p>{el.qteA}</p>
        <button
          onClick={() => el.qteA>1? moinPrice():null }
        >
          -
        </button>
      </td>
      <td>{el.price}</td>
      <td>{el.prt}</td>
      <td>
        <button onClick={()=>dispatch(rmvprod(el.id,el.prt))}>X</button>
      </td>
    </tr>
  );
};

export default TrCard;
