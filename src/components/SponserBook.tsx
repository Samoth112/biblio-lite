import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RouteComponentProps} from 'react-router-dom';
import {AppState} from '../index';
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

  // MAKE THIS A HELPER
  const createRequest = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    fetch(`https://lite-api.herokuapp.com/little_libraries/${match.params.littleLibraryId}/sponsers/${match.params.sponserId}/sponser_books/${match.params.id}/requests`, {
      method: 'POST'
    })
    .then((resp) => resp.json())
    .then((json) => {
      if(json.id) {
        alert("Your request has been sent.");
      };
    });
  }

  useEffect(() => {
    if(sponserBook.id.toString() !== match.params.id) {
      getSponserBook();
    };
  });

  return(
    <Book book={sponserBook.book} currentId={sponserBook.id} nextId={parseInt(match.params.id)}>
      <button className="book__button" onClick={(e: React.MouseEvent<HTMLButtonElement>) => createRequest(e)}>request</button>
    </Book> 
  ); 
};