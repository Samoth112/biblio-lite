import React from 'react';
import Book from './Book';
import {RouteComponentProps, Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {AppState} from '../index';

interface MatchParams {
  little_library_id: string;
  id: string;
}

export default function LibraryBook({match}: RouteComponentProps<MatchParams>): React.ReactElement {
  const dispatch = useDispatch();
  const getLibraryBook = (little_library_id: string, id: string) => {
    fetch(`http://localhost:3000/little_libraries/${little_library_id}/library_books/${id}`, {
      method: 'GET'
    })
    .then((resp) => resp.json())
    .then((json) => {
      dispatch({type: "SET_LIBRARY_BOOK", id: json.id, little_library_id: json.little_library_id, book_id: json.book_id, book: json.book});
    });
  };

  const takeLibraryBook = (little_library_id:string, id:string) => {
    fetch(`http://localhost:3000/little_libraries/${little_library_id}/library_books/${id}`, {
      method: 'DELETE'
    })
    .then((resp) => resp.json())
    .then((json) => {
      dispatch({type: 'SET_LIBRARY_BOOKS', littleLibraryId: little_library_id, libraryBooks: json})
    });
  };

  const libraryBook = useSelector((state: AppState) => state.libraryBook);
  useEffect(() => {
    if(libraryBook.id.toString() !== match.params.id) {
      getLibraryBook(match.params.little_library_id, match.params.id);
    };
  });
  
  return(
    <Book book={libraryBook.book} currentId={libraryBook.id} nextId={parseInt(match.params.id)}>
      <Link className="book__button" onClick={() => takeLibraryBook(match.params.little_library_id, match.params.id)} to={`/results/little_libraries/${match.params.little_library_id}`}><p className="book__button-text">take</p></Link>
    </Book> 
  );
};