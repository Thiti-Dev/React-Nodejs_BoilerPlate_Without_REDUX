import React from 'react';

//+++++++++++ Importing styles @@ เอาไสตล์เข้ามาใข้ ++++++++++
import './App.css';
// --------------------------------

//------------------ Importing Router เอามาสำหรับไปหน้าต่างๆ ------------------------
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
//-------------------------------------------------------------------------------

// ----------------- Import UI pages เอาหน้าต่างๆที่เราทำเข้ามา ------------------------
import Index from './components/main-ui/indexPage/Index';
import Test from './components/main-ui/testPage/Test';
//-------------------------------------------------------------------------------

function App() {
  return (
    <Router>
      <Route exact path="/" component={Index} />
      <Route exact path="/test" component={Test} />
    </Router>
  );
}

export default App;
