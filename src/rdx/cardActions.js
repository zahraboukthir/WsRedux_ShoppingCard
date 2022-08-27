import { ADDTOCARD, RMVPROD } from './actionTypes';
export const addtocard = (newprd) => { 

    return {
        type:ADDTOCARD,
        payload:newprd
    }
 }
export const rmvprod = (id) => { 
    return {
        type:RMVPROD,
        payload:id
    }
 }