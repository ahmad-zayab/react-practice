import React from 'react';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import ListGroup from './components/ListGroup';
import Forms from './components/formsOne.jsx';
import Create from './componentsCRUD/Create.jsx';
function App() {
    const List = ['Lahore', 'Karachi', 'Islamabad', 'Bahawalpur', 'Multan'];
  return (

    <div className="App">
      {/* <Header />
      <ListGroup items={List} heading="Cities" />
      <Forms/>
      <Footer/> */}
      <Create/>
    </div>  
  );
}

export default App;