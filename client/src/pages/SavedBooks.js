import React, { useState, useEffect } from 'react';
// import { Jumbotron, Container, CardColumns,  Button } from 'react-bootstrap';

import { getMe, deleteBook } from '../utils/API';
import Auth from '../utils/auth';
import { removeBookId } from '../utils/localStorage';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


// const SavedBooks = () => {
//   const [userData, setUserData] = useState({});

//   // use this to determine if `useEffect()` hook needs to run again
//   const userDataLength = Object.keys(userData).length;

//   useEffect(() => {
//     const getUserData = async () => {
//       try {
//         const token = Auth.loggedIn() ? Auth.getToken() : null;

//         if (!token) {
//           return false;
//         }

//         const response = await getMe(token);

//         if (!response.ok) {
//           throw new Error('something went wrong!');
//         }

//         const user = await response.json();
//         setUserData(user);
//       } catch (err) {
//         console.error(err);
//       }
//     };

//     getUserData();
//   }, [userDataLength]);

//   // create function that accepts the book's mongo _id value as param and deletes the book from the database
//   const handleDeleteBook = async (bookId) => {
//     const token = Auth.loggedIn() ? Auth.getToken() : null;

//     if (!token) {
//       return false;
//     }

//     try {
//       const response = await deleteBook(bookId, token);

//       if (!response.ok) {
//         throw new Error('something went wrong!');
//       }

//       const updatedUser = await response.json();
//       setUserData(updatedUser);
//       // upon success, remove book's id from localStorage
//       removeBookId(bookId);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   // if data isn't here yet, say so
//   if (!userDataLength) {
//     return <h2>LOADING...</h2>;
//   }

//   return (
//     <>
//       <Jumbotron fluid className='text-light bg-dark'>
//         <Container>
//           <h1>Viewing saved books!</h1>
//         </Container>
//       </Jumbotron>
//       <Container>
//         <h2>
//           {userData.savedBooks.length
//             ? `Viewing ${userData.savedBooks.length} saved ${userData.savedBooks.length === 1 ? 'book' : 'books'}:`
//             : 'You have no saved books!'}
//         </h2>
//         <CardColumns>
//           {userData.savedBooks.map((book) => {
//             return (
//               <Card key={book.bookId} border='dark'>
//                 {book.image ? <Card.Img src={book.image} alt={`The cover for ${book.title}`} variant='top' /> : null}
//                 <Card.Body>
//                   <Card.Title>{book.title}</Card.Title>
//                   <p className='small'>Authors: {book.authors}</p>
//                   <Card.Text>{book.description}</Card.Text>
//                   <Button className='btn-block btn-danger' onClick={() => handleDeleteBook(book.bookId)}>
//                     Delete this Book!
//                   </Button>
//                 </Card.Body>
//               </Card>
//             );
//           })}
//         </CardColumns>
//       </Container>
//     </>
//   );
// };

// export default SavedBooks;

function Dashboard() {
  // //const history = useHistory();
  // //history('/dashboard')

  // React.useEffect(() => {
  //   getData();
  // }, []);
  // const getData = () => {
  //   const user = localStorage.getItem("user");
  //   if (!user) {
  //     //navigate('/path', { replace: true });
  //   }
  //   //    console.log(JSON.parse(user))
  // };

  const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

  return ( 
  <div>
    <div id='dashboard-header'>
      <h1>Dashboard</h1>
    </div>
    
    <div id='dashboard-main'>
        <h2>Your Projects</h2>
    </div>
    
    <div className="card">
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 22 }} color="text.secondary" gutterBottom>
            Timeline for Website Development
          </Typography>
          {/* <Typography variant="h5" component="div">
            be{bull}nev{bull}o{bull}lent
          </Typography> */}
          {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
            adjective
          </Typography> */}
          <Typography variant="body2">
            Due 4/1/22
            <br />
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
          <br></br>

    <div className="card">
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 22 }} color="text.secondary" gutterBottom>
                Develop new portfolio website          
          </Typography>
          {/* <Typography variant="h5" component="div">
            be{bull}nev{bull}o{bull}lent
          </Typography> */}
          {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
            adjective
          </Typography> */}
          <Typography variant="body2">
            Due 4/1/22
            <br />
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>

  </div>
  );
}

export default Dashboard;
