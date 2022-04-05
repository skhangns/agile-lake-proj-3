import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import Navbar from './components/Navbar';
import Contact from './pages/Intro'
function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
        <Route 
            path='/contact' 
            element={<Contact />} 
          />
          <Route 
            path='/' 
            element={<SearchBooks />} 
          />
          <Route 
            path='/dashboard' 
            element={<SavedBooks />} 
          />
          
          <Route 
            path='*'
            element={<h1 className='display-2'>Wrong page!</h1>}
          />
        </Routes>
      </>
    </Router>

    // <BrowserRouter>
    //   < Header />
      
    //  <Routes>
    //   < Route exact path="/login" component={Login} />
    //   {/* < Route exact path="/dashboard" component={Dashboard} /> */}
    //   < Route exact path="/user" component={Dashboard} />
    //   < Route exact path="/project" component={Project} />
    //   < Route exact path="/contact" component={Contact} />
      
    //   {/* < Route exact path="/create" component={Create} /> */}

    //   < Route exact path="/" component={Intro} />

      
      
    //   </Routes>
    //   <Footer />
    // </BrowserRouter>
    
  );
}

export default App;
