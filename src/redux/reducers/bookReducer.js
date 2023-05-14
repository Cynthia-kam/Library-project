import { ActionType } from "../constants/action-types"

const initialstate ={
    books:[
        {
        id:1,
        title: "bible",
        ownerId:1
        },
         ]
}
export const bookReducer=(state=initialstate,{type,payload})=>{
     switch(type){
        case ActionType.SET_BOOKS:
            return state;
            default:
            return state;

     }
}