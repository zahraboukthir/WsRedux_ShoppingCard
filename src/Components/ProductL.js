import React from 'react'
import ProductC from './ProductC'
import { useSelector } from 'react-redux';



function ProductL() {
  const listProd=useSelector((state)=>state.listProd)
  
  return (
    <div style={{display:'flex', justifyContent:'space-around', flexWrap:'wrap'}}>
        {listProd.map(
            (el,i)=><ProductC key={el.id} el={el} />
        )}
    </div>
  )
}

export default ProductL