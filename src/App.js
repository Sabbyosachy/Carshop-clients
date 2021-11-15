
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Explores from './Pages/Explores/Explores/Explores';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Pages/Shared/PrivateRoute/PrivateRoute';
import Login from './Pages/Login/Login';
import Dashboard from './Pages/Dashboard/Dashboard';
import Purches from './Pages/Purches/Purches';
import MakeAdmin from './Pages/MakeAdmin/MakeAdmin';



function App() {
  return (
    <div className="App">
   <AuthProvider>
   <Router>   
        <Switch>
        <Route exact path="/">
           <Home></Home>
          </Route>
        <Route exact path="/home">
           <Home></Home>
          </Route>
          <Route exact path="/explore">
            <Explores></Explores>
          </Route>
          <PrivateRoute exact path="/products/:productId">
            <Purches></Purches>
          </PrivateRoute>
          <Route path="/login">
           <Login></Login>
          </Route>   
          <Route path="/dashbord">
            <Dashboard></Dashboard>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch> 
      </Router>
   </AuthProvider>
    </div>
  );
}

export default App;
