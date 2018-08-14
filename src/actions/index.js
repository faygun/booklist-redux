export function selectBox(book){
    return{
        type:'BOOK_SELECTED',
        payload:book
    };
}