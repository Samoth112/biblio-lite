import React from 'react';
import BookCard from './BookCard';
import {RouteComponentProps, Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {AppState} from '../index';
import Grid from './Grid';
import BookFormCard from './BookFormCard';

interface LittleLibraryMatchParams {
  id: string;
}

export default function LibraryBooks({match}: RouteComponentProps<LittleLibraryMatchParams>): React.ReactElement {
  let libraryBooksList;
  let littleLibraryId = useSelector((state: AppState) => state.libraryBooks.littleLibraryId );
  let libraryBooks = useSelector((state: AppState) => state.libraryBooks.libraryBooks);
  let empty = useSelector((state: AppState) => state.libraryBooks.empty);
  const dispatch = useDispatch();
  const getLibraryBooks = () => {
    fetch(`https://lite-api.herokuapp.com/little_libraries/${match.params.id}/library_books`, {
      method: 'GET'
    })
    .then(resp => resp.json())
    .then((json) => {
      // An empty library will cause a loop, so don't SET_LIBRARY_BOOKS.
      // Setting an empty library will still trigger useEffect, and since getLibraryBooks
      // will be called when a library is empty, like on the intial render, avoid dispatching the action altogether.
      if(json) {
        dispatch({type: 'SET_LIBRARY_BOOKS', littleLibraryId: match.params.id, libraryBooks: json})
      };
    });
  };

  const takeLibraryBook = (little_library_id:string, id:string) => {
    fetch(`https://lite-api.herokuapp.com/little_libraries/${little_library_id}/library_books/${id}`, {
      method: 'DELETE'
    })
    .then((resp) => resp.json())
    .then((json) => {
      // An empty library will cause a loop, so don't SET_LIBRARY_BOOKS.
      // Setting an empty library will still trigger useEffect, and since getLibraryBooks
      // will be called when a library is empty, like on the intial render, avoid dispatching the action altogether.
      if(json) {
        dispatch({type: 'SET_LIBRARY_BOOKS', littleLibraryId: little_library_id, libraryBooks: json})
      };
    });
  };

  if(libraryBooks.length !== 0 && libraryBooks[0].little_library_id === parseInt(match.params.id)) {
    libraryBooksList = libraryBooks.map((libraryBook) => {
      return(
        <BookCard 
          key={libraryBook.id}
          className="book-card" 
          grid="book-card__grid"
          title={libraryBook.book.title} 
          subtitle={libraryBook.book.subtitle}
          authors={libraryBook.book.authors}
          img_url={libraryBook.book.img_url}
          to={`/results/little_libraries/${parseInt(match.params.id)}/library_books/${libraryBook.id}`}
        >
          <Link className="book-card__button" onClick={() => takeLibraryBook(match.params.id, libraryBook.id.toString())} to={`/results/little_libraries/${match.params.id}`}><p className="book-card__button-text">take</p></Link>
        </BookCard>
      );
    });
  };

  useEffect(() => {
    if(!empty && !libraryBooks[0]) {
      getLibraryBooks();
    } else if(!empty && littleLibraryId.toString() !== match.params.id) {
      getLibraryBooks();
    } else if(empty && littleLibraryId.toString() !== match.params.id) {
      getLibraryBooks();
    }
  });
  
  return(
    <section className="books-list">
      <Grid className="books-list__grid">
        {(!empty && littleLibraryId.toString() === match.params.id) ? 
          libraryBooksList :
          (empty && littleLibraryId.toString() === match.params.id ? 
          <BookFormCard className="book-form-card" grid="book-form-card__grid">
            <Link className="book-form-card__button" to={`/results/little_libraries/${match.params.id}/library_books/new`}>
              <div className="book-form-card__button-circle"></div> 
              <p className="book-form-card__button-plus">+</p>
            </Link>
          </BookFormCard> :
          <></>
          )} 
      </Grid>
    </section>
  );  
};