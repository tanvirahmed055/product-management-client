import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Home from "./components/Home/Home";
import Header from './components/Header/Header';
import AddProducts from "./components/AddProducts/AddProducts";
import ManageProducts from "./components/ManageProducts/ManageProducts";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/manageProducts">
              <ManageProducts></ManageProducts>
            </Route>
            <Route path="/addProduct">
              <AddProducts></AddProducts>
            </Route>

          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;