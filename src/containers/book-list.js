import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBox} from '../actions/index';
import {bindActionCreators} from 'redux';
class BookList extends Component{

    renderList(){
        return this.props.books.map((book) => {
            return(
                <li key={book.title} onClick={()=> this.props.selectBox(book)} className="list-group-item sortable">
                    {book.title}
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
        books:state.books
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({selectBox: selectBox}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);