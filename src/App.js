
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
import Product from './Pages/Home/Product/Product';
import AddProduct from './Pages/AddProduct/AddProduct';
import PrivateRoute from './Pages/Shared/PrivateRoute/PrivateRoute';
import Login from './Pages/Login/Login';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Myorder from './Pages/Myorder/Myorder';
import ManageAllOrder from './Pages/ManageAllOrder/ManageAllOrder';
import Review from './Pages/Review/Review';
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
            <Product></Product>
          </PrivateRoute>
          <Route exact path="/dashboard">
           <Dashboard></Dashboard>
          </Route>
          <Route exact path="/login">
           <Login></Login>
          </Route>
          <Route exact path="/addproduct">
            <AddProduct></AddProduct>
          </Route>
          <Route exact path="/mnallorder">
           <ManageAllOrder></ManageAllOrder>
          </Route>
          <Route exact path="/myorder">
           <Myorder></Myorder>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <Route path="/makeadmin">
            <MakeAdmin></MakeAdmin>
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
