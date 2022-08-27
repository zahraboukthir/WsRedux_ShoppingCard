import React from 'react'
import Table from 'react-bootstrap/Table';
import TrCard from './TrCard';

import {useSelector} from 'react-redux'
function Panier({dl,pantotal}) {
  
  const pnr=useSelector((state)=>state.panier)
  const totalp=useSelector((state)=>state.total)
 console.log(pnr)
  return (
    <div>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Product name :</th>
          <th>Product pic :</th>
          <th>Quantity :</th>
          <th>Prix unitaire :</th>
          <th>Prix total :</th>
        </tr>
      </thead>
      <tbody>
        {pnr&&pnr.map(
          (el,i)=><TrCard tl={pantotal} el={el} key={i} dl={dl}/>
        )}
      
        <tr>
          <td>Total</td>
          <td>{totalp}</td>
        </tr>
      </tbody>
    </Table>
    </div>
  )
}

export default Panier