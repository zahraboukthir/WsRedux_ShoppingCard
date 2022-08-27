import { ADDTOCARD, RMVPROD } from "./actionTypes";
const initState = {
  listProd:[{
    id:1,
    title:"sunglasses",
    price:50,
    img:"https://tn.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/54/9295/1.jpg?9434",
    qte:5,
},
{
    id:2,
    title:"t-shirt XL",
    price:60,
    img:"https://tn.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/54/9295/1.jpg?9434",
    qte:5,
},
{
    id:3,
    title:"t-shirt S",
    price:120,
    img:"https://tn.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/54/9295/1.jpg?9434",
    qte:5,
},
{id:4,
    title:"t-shirt hkejhil",
    price:124,
    img:"https://tn.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/54/9295/1.jpg?9434",
    qte:5,
},
{id:5,
    title:"t-shirt",
    price:12,
    img:"https://tn.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/54/9295/1.jpg?9434",
    qte:5,
}],
  panier: [],
  total:0
};
 const cardReducer = (state = initState, action) => {
  switch (action.type) {
    case ADDTOCARD:
      const exist = state.panier.find((el) => el.id === action.payload.id);
      if(exist){
        alert(`the ${action.payload.title} is added to the Cart`)
        return state
      }
      return {
        ...state,
        panier: [action.payload, ...state.panier],
        total:state.total+action.payload.price
      };
    case RMVPROD:
        return {...state,panier:state.panier.filter((el)=>el.id!=action.payload.id)}
    default:
      return state
  }
};
export default cardReducer