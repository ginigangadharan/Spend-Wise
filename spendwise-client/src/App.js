import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
// import { Router, Switch, Route } from "react-router-dom";
import './App.css';

import Home from "./components/home/home";

// import history from '../src/helpers/history';

// function App() {
//   return (
//     <Router history={history}>
//       <div className="App">
//         <Switch>
//           <Route exact path='/' component={Home} />
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// export default App;


const App = () => (
  <div className="App">
    <Home />
  </div>
);

export default App;
