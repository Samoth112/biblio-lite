import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RouteComponentProps, Link} from 'react-router-dom';
import {AppState} from '../index';
import {takeLibraryBook} from '../helpers';
import BookCard from './BookCard';
import BookFormCard from './BookFormCard';
import Grid from './Grid';

// Components rendered through Route render prop takes MatchParams
interface MatchParams {
  id: string;
}

export default function LibraryBooks({match}: RouteComponentProps<MatchParams>): React.ReactElement {
  let libraryBooksList;
  const littleLibraryId = useSelector((state: AppState) => state.libraryBooks.littleLibraryId );
  const libraryBooks = useSelector((state: AppState) => state.libraryBooks.libraryBooks);
  // libraryBooks is saved to localStorage as part of LibraryBooksState (see index.tsx).
  // Once the array is populated, if not empty, the littleLibraryId also in LibraryBooksState
  // must be checked against the littleLibraryId being navigated to (match.params.id), in order to
  // ensure that the libraryBooks being rendered belong to the library the user is visiting.
  const empty = useSelector((state: AppState) => state.libraryBooks.empty);
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
        // WHAT DOES THE API SEND WHEN A LIBRARY IS EMPTY?
        // CHECK THAT JSON[0] EXISTS FIRST?
        dispatch({type: 'SET_LIBRARY_BOOKS', littleLibraryId: match.params.id, libraryBooks: json})
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
          imgUrl={libraryBook.book.img_url}
          to={`/results/little_libraries/${parseInt(match.params.id)}/library_books/${libraryBook.id}`}
        >
          <Link className="book-card__button" onClick={() => takeLibraryBook(dispatch, match.params.id, libraryBook.id.toString())} to={`/results/little_libraries/${match.params.id}`}><p className="book-card__button-text">take</p></Link>
        </BookCard>
      );
    });
  };

  useEffect(() => {
    if(!empty && !libraryBooks[0]) {
      // After intial render, empty is initially set to false and libraryBooks is empty.
      // If empty is set to false and there are no libraryBooks, then call getLibraryBooks().
      // This condition should always be true after the initial render.
      // getLibraryBooks will check to see if the returned json is empty. If so,
      // it will not dispatch the action and not change state, thereby avoiding
      // a rerender and a subsequence call to useEffect, breaking the loop. 
      // See comments in return below to see how an empty library is handled.
      getLibraryBooks();
    } else if(!empty && littleLibraryId.toString() !== match.params.id) {
      // If a library is NOT empty and the littleLibraryId does NOT match the
      // littleLibraryId being navigated to, the current set of libraryBooks belongs
      // to the last visited library, so call getLibraryBooks() in order to retrieve
      // the current library's libraryBooks.
      getLibraryBooks();
    } else if(empty && littleLibraryId.toString() !== match.params.id) {
      // In any case, check littleLibraryId.
      // REMOVE EMPTY CHECKS FROM ELSE IF STATEMENTS?
      getLibraryBooks();
    }
  });
  
  return(
    <section className="books-list">
      <Grid className="books-list__grid">
        {/* 
        If a library is NOT empty, and the current littleLibraryId in LibraryBooksState
        is the same as the littleLibraryId being navigated to, then
        render libraryBooksList.
        */}
        {!empty && littleLibraryId.toString() === match.params.id ? 
          libraryBooksList :
          empty && littleLibraryId.toString() === match.params.id ?
          // On initial render, empty is initially set to false and littleLibraryId is set to 0,
          // so this check will always fail. 
          // After initial render, if a library is still empty, and the current littleLibraryId in LibraryBooksState
          // is the same as the littleLibraryId being navigated to, render the BookFormCard.
          <BookFormCard className="book-form-card" grid="book-form-card__grid">
            <Link className="book-form-card__button" to={`/results/little_libraries/${match.params.id}/library_books/new`}>
              <div className="book-form-card__button-circle"></div> 
              <p className="book-form-card__button-plus">+</p>
            </Link>
          </BookFormCard> :
          <></>
        } 
      </Grid>
    </section>
  );  
};