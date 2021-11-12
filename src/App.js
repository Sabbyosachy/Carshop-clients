
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Home/Footer/Footer';
import Explores from './Pages/Explores/Explores/Explores';
import Header from './Pages/Home/Header/Header';
import Login from './Pages/Login/Login';
import AuthProvider from './contexts/AuthProvider';
import Product from './Pages/Home/Product/Product';
import AddProduct from './Pages/AddProduct/AddProduct';
import PrivateRoute from './Pages/Shared/PrivateRoute/PrivateRoute';


function App() {
  return (
    <div className="App">
   <AuthProvider>
   <Router>
     <Header></Header>
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
          <Route exact path="/login">
           <Login></Login>
          </Route>
          <Route exact path="/addproduct">
            <AddProduct></AddProduct>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch> 
        <Footer></Footer> 
      </Router>
   </AuthProvider>
    </div>
  );
}

export default App;
