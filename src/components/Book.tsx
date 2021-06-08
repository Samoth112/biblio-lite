import React, {PropsWithChildren} from 'react';
import Grid from './Grid';
import {BookState} from '../reducers/bookReducer';

// reusable component
interface BookProps {
  currentId: number;
  nextId: number;
  book: BookState;
}

export default function Book({currentId, nextId, book, children}: PropsWithChildren<BookProps>): React.ReactElement {
  let byline = "by";
  let fullName = "";

  if(book.authors.length === 1) {
    fullName = `${book.authors[0].first_name} ${book.authors[0].last_name}`;
    byline += ` ${fullName}`; 
  } else if(book.authors.length === 2) {
    book.authors.forEach((author, index) => {
      fullName = `${author.first_name} ${author.last_name}`;
      byline += (index === 1 ? ` and ${fullName}` : ` ${fullName}`); 
    });
  } else {
    book.authors.forEach((author, index) => {
      fullName = `${author.first_name} ${author.last_name}`;
      byline += (index === book.authors.length-1 ? ` ${fullName},` : ` and ${fullName}`);
    });
  };

  return(
    <section className="book">
      {/* 
      The currentId and nextId props represent the id of the previously selected libraryBook or sponserBook
      and the id of the libraryBook or SponserBook currently being navigated to by the user.
      They must match before book content can be rendered.
      See notes in LibraryBook or SponserBook for more.
      */}
      {currentId === nextId &&
        <Grid className="book-grid">
          <section className="book__book-cover">
            <img className="book__book-cover-image" alt="" src={book.img_url}></img>
          </section>
          <section className="book__book-details">
            <Grid className={"book__book-details-grid"}>
              <p className="book__title">{book.title}</p>
              {book.subtitle !== " " && <p className="book__subtitle">{book.subtitle}</p>}
              <p className="book__byline">{byline}</p>
              <p className="book__description">{book.description}</p>
              <section className="book__button-container">{children}</section>
            </Grid>
          </section>
        </Grid>
      }
    </section>
  );
};