import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RouteComponentProps, Link} from 'react-router-dom';
import {AppState} from '../index';
import {takeLibraryBook} from '../helpers';
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
      // properties use underscores instead of camelCase in order to type LibraryBooks objects returned as
      // JSON data from Rails.
      dispatch({type: "SET_LIBRARY_BOOK", id: json.id, little_library_id: json.little_library_id, book_id: json.book_id, book: json.book});
    });
  };

  useEffect(() => {
    if(libraryBook.id.toString() !== match.params.id) {
      getLibraryBook();
    };
  });
  
  return(
    // Since getLibraryBook does not get called until after the component mounts,
    // the last visted libraryBook.book is passed into the Book component.
    // In most cases, this will not be the libraryBook we want, so, 
    // to prevent displaying the previous libraryBook before this component can
    // rerender with the correct libraryBook, after getLibraryBook is called and state
    // is updated, provide the ids of the current libraryBook and the one being requested.
    // The Book component will compare the two and only render the book if the ids match.
    <Book book={libraryBook.book} currentId={libraryBook.id} nextId={parseInt(match.params.id)}>
      <Link className="book__button" onClick={() => takeLibraryBook(dispatch, match.params.littleLibraryId, libraryBook.id.toString())} to={`/results/little_libraries/${match.params.littleLibraryId}`}><p className="book__button-text">take</p></Link>
    </Book> 
  );
};