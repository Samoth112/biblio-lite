import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {AppState} from '../index';
import Form from './Form';
import Input from './Input';
import InputTextArea from './InputTextArea';
import InputSubmit from './InputSubmit';

// THIS PROP IS UNNECESSARY, CAN GET littleLibraryId FROM STATE,
// SINCE THE LITTLELIBRARY STATE (selectedLib in resultsReducer) WILL BE SET BEFORE USERS CAN
// NAVIGATE TO THIS COMPONENT.
interface LibraryBookFormProps {
  littleLibraryId: string;
}

export default function LibraryBookForm({littleLibraryId}: LibraryBookFormProps): React.ReactElement {
  const libraryBookFormData = useSelector((state: AppState) => state.libraryBookForm.formData);
  const authorInputs = libraryBookFormData.book.authors.map((author, index) => 
    <div key={index}>
      <Input block="library-book-form" name="first name" dataActionType="SET_AUTHOR_FIRST_NAME" dataAuthorIndex={index.toString()} value={author.firstName} />
      <Input block="library-book-form" name="last name" dataActionType="SET_AUTHOR_LAST_NAME" dataAuthorIndex={index.toString()} value={author.lastName} />
    </div>
  );
  const dispatch = useDispatch();
  const addAuthor = (e: React.MouseEvent<HTMLParagraphElement>) => {
    e.preventDefault();
    dispatch({type: 'ADD_AUTHOR'});
  };
  const createLibraryBook = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch(`https://lite-api.herokuapp.com/little_libraries/${littleLibraryId}/library_books`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(libraryBookFormData)
    })
    .then((resp) => 
      resp.json())
    .then((json) => {
      dispatch({type: 'SET_LIBRARY_BOOKS', littleLibraryId: littleLibraryId, libraryBooks: json})
    });
  };

  return(
    <Form className="library-book-form" grid="library-book-form__grid" submitHandler={createLibraryBook}>
      <Input block="library-book-form" name="title" dataActionType="SET_TITLE" value={libraryBookFormData.book.title} />
      <p>*if there is no subtitle, enter a single blank space</p>
      <Input block="library-book-form" name="subtitle" dataActionType="SET_SUBTITLE" value={libraryBookFormData.book.subtitle} />
      <InputTextArea block="library-book-form" name="description" dataActionType="SET_DESCRIPTION" value={libraryBookFormData.book.description} />
      <Input block="library-book-form" name="image url" dataActionType="SET_IMGURL" value={libraryBookFormData.book.imgUrl} />
      <p onClick={addAuthor}>add author</p>
      {authorInputs}
      <Input block="library-book-form" name="isbn" dataActionType="SET_ISBN" value={libraryBookFormData.book.isbn} />
      <InputSubmit block="library-book-form" value="create library book" />
    </Form>
  );
};