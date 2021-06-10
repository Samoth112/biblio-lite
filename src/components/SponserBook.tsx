import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RouteComponentProps} from 'react-router-dom';
import {AppState} from '../index';
import {createRequest} from '../helpers';
import Book from './Book';

// component rendered through Route render prop takes MatchParams
interface MatchParams {
  littleLibraryId: string;
  sponserId: string;
  id: string;
}

export default function SponserBook({match}: RouteComponentProps<MatchParams>): React.ReactElement {
  const sponserBook = useSelector((state: AppState) => state.sponserBook);
  const dispatch = useDispatch();
  const getSponserBook = () => {
    fetch(`https://lite-api.herokuapp.com/little_libraries/${match.params.littleLibraryId}/sponsers/${match.params.sponserId}/sponser_books/${match.params.id}`, {
      method: 'GET',
    })
    .then((resp) => resp.json())
    .then((json) => {
      dispatch({type: "SET_SPONSER_BOOK", id: json.id, sponserId: json.sponser_id, bookId: json.book_id, book: json.book});
    });
  };

  useEffect(() => {
    if(sponserBook.id.toString() !== match.params.id) {
      getSponserBook();
    };
  });

  return(
    // Since getSponserBook does not get called until after the component mounts,
    // the last visted sponserBook.book is passed into the Book component.
    // In most cases, this will not be the sponserBook we want, so, 
    // to prevent displaying the previous sponserBook before this component can
    // rerender with the correct sponserBook, after getLibraryBook is called and state
    // is updated, provide the ids of the current sponserBook and the one being requested.
    // The Book component will compare the two and only render the book if the ids match.
    <Book book={sponserBook.book} currentId={sponserBook.id} nextId={parseInt(match.params.id)}>
      <button className="book__button" onClick={(e: React.MouseEvent<HTMLButtonElement>) => createRequest(e, match.params.littleLibraryId, match.params.sponserId, match.params.id)}>request</button>
    </Book> 
  ); 
};