import React from 'react';
import Book from './Book';
import {RouteComponentProps} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {AppState} from '../index';

interface MatchParams {
  little_library_id: string;
  sponser_id: string;
  id: string;
}

export default function SponserBook({match}: RouteComponentProps<MatchParams>): React.ReactElement {
  const sponserBook = useSelector((state: AppState) => state.sponserBook);
  const dispatch = useDispatch();
  const getSponserBook = (little_library_id: string, sponser_id: string, id: string) => {
    fetch(`https://lite-api.herokuapp.com/little_libraries/${little_library_id}/sponsers/${sponser_id}/sponser_books/${id}`, {
      method: 'GET',
    })
    .then((resp) => resp.json())
    .then((json) => {
      dispatch({type: "SET_SPONSER_BOOK", id: json.id, sponser_id: json.sponser_id, book_id: json.book_id, book: json.book});
    });
  };

  const createRequest = (e: React.MouseEvent<HTMLButtonElement>, little_library_id: string, sponser_id: string, id: string) => {
    e.preventDefault();
    fetch(`https://lite-api.herokuapp.com/little_libraries/${little_library_id}/sponsers/${sponser_id}/sponser_books/${id}/requests`, {
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
      getSponserBook(match.params.little_library_id, match.params.sponser_id, match.params.id);
    };
  });

  return(
    <Book book={sponserBook.book} currentId={sponserBook.id} nextId={parseInt(match.params.id)}>
      <button className="book__button" onClick={(e: React.MouseEvent<HTMLButtonElement>) => createRequest(e, match.params.little_library_id, match.params.sponser_id, match.params.id)}>request</button>
    </Book> 
  ); 
};