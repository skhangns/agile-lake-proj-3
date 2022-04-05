// import React, { useState, useEffect } from 'react';
// import { Jumbotron, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';

// import Auth from '../utils/auth';
// import { saveBook, searchGoogleBooks } from '../utils/API';
// import { saveBookIds, getSavedBookIds } from '../utils/localStorage';

// const SearchBooks = () => {
//   // create state for holding returned google api data
//   const [searchedBooks, setSearchedBooks] = useState([]);
//   // create state for holding our search field data
//   const [searchInput, setSearchInput] = useState('');

//   // create state to hold saved bookId values
//   const [savedBookIds, setSavedBookIds] = useState(getSavedBookIds());

//   // set up useEffect hook to save `savedBookIds` list to localStorage on component unmount
//   // learn more here: https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup
//   useEffect(() => {
//     return () => saveBookIds(savedBookIds);
//   });

//   // create method to search for books and set state on form submit
//   const handleFormSubmit = async (event) => {
//     event.preventDefault();

//     if (!searchInput) {
//       return false;
//     }

//     try {
//       const response = await searchGoogleBooks(searchInput);

//       if (!response.ok) {
//         throw new Error('something went wrong!');
//       }

//       const { items } = await response.json();

//       const bookData = items.map((book) => ({
//         bookId: book.id,
//         authors: book.volumeInfo.authors || ['No author to display'],
//         title: book.volumeInfo.title,
//         description: book.volumeInfo.description,
//         image: book.volumeInfo.imageLinks?.thumbnail || '',
//       }));

//       setSearchedBooks(bookData);
//       setSearchInput('');
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   // create function to handle saving a book to our database
//   const handleSaveBook = async (bookId) => {
//     // find the book in `searchedBooks` state by the matching id
//     const bookToSave = searchedBooks.find((book) => book.bookId === bookId);

//     // get token
//     const token = Auth.loggedIn() ? Auth.getToken() : null;

//     if (!token) {
//       return false;
//     }

//     try {
//       const response = await saveBook(bookToSave, token);

//       if (!response.ok) {
//         throw new Error('something went wrong!');
//       }

//       // if book successfully saves to user's account, save book id to state
//       setSavedBookIds([...savedBookIds, bookToSave.bookId]);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <>
//       <Jumbotron fluid className='text-light bg-dark'>
//         <Container>
//           <h1>Search for Books!</h1>
//           <Form onSubmit={handleFormSubmit}>
//             <Form.Row>
//               <Col xs={12} md={8}>
//                 <Form.Control
//                   name='searchInput'
//                   value={searchInput}
//                   onChange={(e) => setSearchInput(e.target.value)}
//                   type='text'
//                   size='lg'
//                   placeholder='Search for a book'
//                 />
//               </Col>
//               <Col xs={12} md={4}>
//                 <Button type='submit' variant='success' size='lg'>
//                   Submit Search
//                 </Button>
//               </Col>
//             </Form.Row>
//           </Form>
//         </Container>
//       </Jumbotron>

//       <Container>
//         <h2>
//           {searchedBooks.length
//             ? `Viewing ${searchedBooks.length} results:`
//             : 'Search for a book to begin'}
//         </h2>
//         <CardColumns>
//           {searchedBooks.map((book) => {
//             return (
//               <Card key={book.bookId} border='dark'>
//                 {book.image ? (
//                   <Card.Img src={book.image} alt={`The cover for ${book.title}`} variant='top' />
//                 ) : null}
//                 <Card.Body>
//                   <Card.Title>{book.title}</Card.Title>
//                   <p className='small'>Authors: {book.authors}</p>
//                   <Card.Text>{book.description}</Card.Text>
//                   {Auth.loggedIn() && (
//                     <Button
//                       disabled={savedBookIds?.some((savedBookId) => savedBookId === book.bookId)}
//                       className='btn-block btn-info'
//                       onClick={() => handleSaveBook(book.bookId)}>
//                       {savedBookIds?.some((savedBookId) => savedBookId === book.bookId)
//                         ? 'This book has already been saved!'
//                         : 'Save this Book!'}
//                     </Button>
//                   )}
//                 </Card.Body>
//               </Card>
//             );
//           })}
//         </CardColumns>
//       </Container>
//     </>
//   );
// };

// export default SearchBooks;
import React, { useState } from 'react';
import { checkPassword, validateEmail } from '../utils/helpers';
// import "./Contact.css";

export default function Contact () {
    // Create state variables for the fields in the form
    // We are also setting their initial values to an empty string
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [subject, setSubject] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const handleInputChange = (e) => {
      // Getting the value and name of the input which triggered the change
      const { target } = e;
      const inputType = target.name;
      const inputValue = target.value;
      // Based on the input type, we set the state of either email, username, and password
      if (inputType === 'email') {
        setEmail(inputValue);
      } else if (inputType === 'userName') {
        setUserName(inputValue);
      } else {
        setSubject(inputValue);
      }
    };
    const handleFormSubmit = (e) => {
      // Preventing the default behavior of the form submit (which is to refresh the page)
      e.preventDefault();
      // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
      if (!validateEmail(email) || !userName) {
        setErrorMessage('Email or username is invalid');
        // We want to exit out of this code block if something is wrong so that the user can correct it
        return;
        // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
      }
      alert(`Hello ${userName}`);
      // If everything goes according to plan, we want to clear out the input after a successful registration.
      setUserName('');
      setSubject('');
      setEmail('');
  };
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's chat</h1>
          <div className="c-info">
            <div className="c-info-item">
              {/* <div className="c-icon"> */}
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_4e5An71TVIRGtPVmTLf87PQhhJSj3DGT3mGauPqukC0IeU1_NEkS6ngBI6pfUwIfOWk&usqp=CAU" alt=""  />
              +1 1234 556 75
            </div>
            <div className="c-info-item">
              <img className="c-icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgGWNixrXfkjnfdzBf0kXHROBh-8ZPTLvOnA&usqp=CAU" alt=""  />
              Agilelake@agilelake.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRh-5664Cfs2snsLO9aTMKJAGQ0s2IA0yGkg&usqp=CAU" alt=""  />
             Brooklyn, New York
            </div>
            {/* </div> */}
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Have any questions or inquiries, contact me!
          </p>
          <form >
            <input  value={userName}
              name="userName"
              onChange={handleInputChange}
              type="text"
              placeholder="username" />
            <input  value={subject}
              name="Subject"
              onChange={handleInputChange}
              type="text"
              placeholder="subject" />
            <input  value={email}
                name="email"
                onChange={handleInputChange}
                type="email"
                placeholder="email" />
            <textarea  rows="5" placeholder="Message" name="message" />
            <button type="button" onClick={handleFormSubmit}>Submit</button>
          </form>
          {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
        </div>
      </div>
    </div>
  );
};