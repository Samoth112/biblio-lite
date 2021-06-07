import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import BookCard from './BookCard';
import {RouteComponentProps} from 'react-router-dom';
import {AppState} from '../index';
import Grid from './Grid';
// component rendered through Route render prop takes MatchParams
interface MatchParams {
  littleLibraryId: string;
  id: string;
};

export default function SponserBooks({match}: RouteComponentProps<MatchParams>): React.ReactElement {
  let sponserBooksList;
  let sponserBooks = useSelector((state: AppState) => state.sponserBooks.sponserBooks);
  const dispatch = useDispatch();
  const getSponserBooks = () => {
    fetch(`https://lite-api.herokuapp.com/little_libraries/${match.params.littleLibraryId}/sponsers/${match.params.id}/sponser_books`, {
      method: 'GET'
    })
    .then(resp => resp.json())
    .then((json) => {
      if(json.length !== 0) {
        dispatch({type: 'SET_SPONSER_BOOKS', sponserBooks: json});
      };
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

  if(sponserBooks.length !== 0 && sponserBooks[0].sponser_id === parseInt(match.params.id)) {
    sponserBooksList = sponserBooks.map((sponserBook) => {
      return(
        <BookCard 
          key={sponserBook.id}
          className="book-card" 
          grid="book-card__grid"
          title={sponserBook.book.title} 
          subtitle={sponserBook.book.subtitle}
          authors={sponserBook.book.authors}
          img_url={sponserBook.book.img_url}
          to={`/results/little_libraries/${parseInt(match.params.littleLibraryId)}/sponsers/${parseInt(match.params.id)}/sponser_books/${sponserBook.id}`}
        >
          <button className="book-card__button" onClick={(e: React.MouseEvent<HTMLButtonElement>) => createRequest(e, match.params.littleLibraryId, match.params.id, sponserBook.id.toString())}><p className="book-card__button-text">request</p></button>
        </BookCard>
      );
    });
  };

  useEffect(() => {
    if(sponserBooks.length === 0 || (sponserBooks[0] && sponserBooks[0].sponser_id !== parseInt(match.params.id))) {
      getSponserBooks();
    };
  });

  return(
    <section className="books-list">
      <Grid className="books-list__grid">
        {sponserBooksList} 
      </Grid>
    </section>
  );
};