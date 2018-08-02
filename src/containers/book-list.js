import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBox} from '../actions/index';
import {bindActionCreators} from 'redux';
class BookList extends Component{

    renderList(){
        var title = "";
        if(this.props.oneBook)
         title = this.props.oneBook.title;
        return this.props.books.map((book) => {
            return(
                <li key={book.title} onClick={()=> this.props.selectBox(book)} className="list-group-item">
                    {book.title}
                    {title}
                </li>
            );
        });
    }

    render(){
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}

function mapStateToProps(state){
    return{
        books:state.books,
        oneBook:state.oneBook
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({selectBox: selectBox}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);