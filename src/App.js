import logo from './logo.svg';
import './App.css';
import Users from "./Users"
import Login from "./Login"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  
  return (
    <Router>
      <Route exact path="/"><Login /></Route>
      <Route path="/home"><Users /></Route>
    </Router>
  );
}

export default App;
