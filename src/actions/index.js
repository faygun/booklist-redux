export function selectBox(book){
    return{
        type:'BOOK_SELECTED',
        payload:book
    };
}

export function selectOneBox(book){
    return{
        type:'ONE_BOOK',
        payload:{title:'Faruk', pages:25}
    };
}