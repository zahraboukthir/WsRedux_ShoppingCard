import {
  ADDTOCARD,
  RMVPROD,
  ADDTOTAL,
  ADDQUANTITY,
  REMOVETOTAL,
  REMOVEQUANTITY,
  DETAILS,
} from "./actionTypes";
export const addtocard = (newprd) => {
  return {
    type: ADDTOCARD,
    payload: newprd,
  };
};
export const rmvprod = (id, prixtot) => {
  return {
    type: RMVPROD,
    payload: { id, prixtot },
  };
};
export const addtotal = (prixun) => {
  return {
    type: ADDTOTAL,
    payload: prixun,
  };
};
export const addquantity = (id) => {
  return {
    type: ADDQUANTITY,
    payload: id,
  };
};
export const rmvtotal = (prixun) => {
  return {
    type: REMOVETOTAL,
    payload: prixun,
  };
};
export const rmvquantity = (id) => {
  return {
    type: REMOVEQUANTITY,
    payload: id,
  };
};
export const details=(id)=>{

    return {type:DETAILS,
    payload:id}
}
