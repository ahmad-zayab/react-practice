import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import ListGroup from './components/ListGroup';
import Forms from './components/formsOne.jsx';
import Create from './componentsCRUD/Create.jsx';
import Login from './componentsatt/login.jsx';
import Signup from './componentsatt/signup.jsx';
import Hellobhai from './componentsatt/hellobhai.jsx';
//import Demo from './componentsatt/fetching.jsx';
import Demo1 from './componentsatt/fetching1.jsx';
import LogPost from './componentsatt/logpost.jsx';
function App() {
    const List = ['Lahore', 'Karachi', 'Islamabad', 'Bahawalpur', 'Multan'];
  return (
     <Router>
      <Routes>
        <Route path="/" element={<Create/>} />
        <Route path="/update" element={<update/>} />
      </Routes>
    </Router>
    // <div className="App">
    //   {/* <Header />
    //   <ListGroup items={List} heading="Cities" />
    //   <Forms/>
    //   <Footer/> */}
    //   {/* <Create/> */}
    //   <Login/>
    //   {/* <Signup/> */}
    //   {/* <Hellobhai /> */}
    //   {/* <Demo1/> */}
    //   {/* <LogPost/> */}
    // </div>  
  );
}

export default App;