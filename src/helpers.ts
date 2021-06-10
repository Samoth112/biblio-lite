import { Dispatch } from "react";
import {LibraryBookState} from './reducers/libraryBookReducer';

export const takeLibraryBook = (dispatch: Dispatch<{type: string; littleLibraryId: string; libraryBooks: LibraryBookState[]}>, littleLibraryId: string, libraryBookId: string) => {
  fetch(`https://lite-api.herokuapp.com/little_libraries/${littleLibraryId}/library_books/${libraryBookId}`, {
    method: 'DELETE'
  })
  .then((resp) => resp.json())
  .then((json) => {
    // An empty library will cause a loop, so don't SET_LIBRARY_BOOKS.
    // Setting an empty library will still trigger useEffect, and since getLibraryBooks
    // will be called when a library is empty, like on the intial render, avoid dispatching the action altogether.
    if(json) { 
      // WHAT DOES THE API SEND WHEN A LIBRARY IS EMPTY?
      // CHECK THAT JSON[0] EXISTS FIRST?
      dispatch({type: 'SET_LIBRARY_BOOKS', littleLibraryId: littleLibraryId, libraryBooks: json})
    };
  });
};

export const createRequest = (e: React.MouseEvent<HTMLButtonElement>, littleLibraryId: string, sponserId: string, id: string) => {
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