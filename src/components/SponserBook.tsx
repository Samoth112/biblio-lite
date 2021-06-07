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
  const getSponserBook = (littleLibraryId: string, sponserId: string, id: string) => {
    fetch(`https://lite-api.herokuapp.com/little_libraries/${littleLibraryId}/sponsers/${sponserId}/sponser_books/${id}`, {
      method: 'GET',
    })
    .then((resp) => resp.json())
    .then((json) => {
      dispatch({type: "SET_SPONSER_BOOK", id: json.id, sponserId: json.sponser_id, book_id: json.book_id, book: json.book});
    });
  };

  const createRequest = (e: React.MouseEvent<HTMLButtonElement>, littleLibraryId: string, sponserId: string, id: string) => {
    e.preventDefault();
    fetch(`https://lite-api.herokuapp.com/little_libraries/${littleLibraryId}/sponsers/${sponserId}/sponser_books/${id}/requests`, {
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
      getSponserBook(match.params.littleLibraryId, match.params.sponserId, match.params.id);
    };
  });

  return(
    <Book book={sponserBook.book} currentId={sponserBook.id} nextId={parseInt(match.params.id)}>
      <button className="book__button" onClick={(e: React.MouseEvent<HTMLButtonElement>) => createRequest(e, match.params.littleLibraryId, match.params.sponserId, match.params.id)}>request</button>
    </Book> 
  ); 
};