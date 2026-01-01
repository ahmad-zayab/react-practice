import React from 'react';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import ListGroup from './components/ListGroup';
function App() {
    const List = ['Lahore', 'Karachi', 'Islamabad', 'Bahawalpur', 'Multan'];
  return (

    <div className="App">
      <Header />
      <ListGroup items={List} heading="Cities" />
      <Footer/>
    </div>  
  );
}

export default App;