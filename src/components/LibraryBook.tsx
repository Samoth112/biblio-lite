import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RouteComponentProps, Link} from 'react-router-dom';
import {AppState} from '../index';
import Book from './Book';
// component rendered through Route render prop takes MatchParams
interface MatchParams {
  littleLibraryId: string;
  id: string;
}

export default function LibraryBook({match}: RouteComponentProps<MatchParams>): React.ReactElement {
  const libraryBook = useSelector((state: AppState) => state.libraryBook);
  const dispatch = useDispatch();
  const getLibraryBook = () => {
    fetch(`https://lite-api.herokuapp.com/little_libraries/${match.params.littleLibraryId}/library_books/${match.params.id}`, {
      method: 'GET'
    })
    .then((resp) => resp.json())
    .then((json) => {
      dispatch({type: "SET_LIBRARY_BOOK", id: json.id, littleLibraryId: json.little_library_id, bookId: json.book_id, book: json.book});
    });
  };

  const takeLibraryBook = (littleLibraryId:string, id:string) => {
    fetch(`https://lite-api.herokuapp.com/little_libraries/${littleLibraryId}/library_books/${id}`, {
      method: 'DELETE'
    })
    .then((resp) => resp.json())
    .then((json) => {
      dispatch({type: 'SET_LIBRARY_BOOKS', littleLibraryId: littleLibraryId, libraryBooks: json})
    });
  };

  useEffect(() => {
    if(libraryBook.id.toString() !== match.params.id) {
      getLibraryBook();
    };
  });
  
  return(
    <Book book={libraryBook.book} currentId={libraryBook.id} nextId={parseInt(match.params.id)}>
      <Link className="book__button" onClick={() => takeLibraryBook(match.params.littleLibraryId, match.params.id)} to={`/results/little_libraries/${match.params.littleLibraryId}`}><p className="book__button-text">take</p></Link>
    </Book> 
  );
};