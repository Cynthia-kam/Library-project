import { ActionType } from "../constants/action-types"
export const setBooks=(books)=>{
    return{
       type:  ActionType.SET_BOOKS,
       payload: books

    }
}
export const selectedBooks=(book)=>{
    return{
       type:  ActionType.SELECTED_BOOK,
       payload: book

    }
}