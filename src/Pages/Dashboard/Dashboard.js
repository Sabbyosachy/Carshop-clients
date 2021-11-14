import React from 'react';
import {Switch,Route,Link,useRouteMatch} from "react-router-dom";
import './Dashboard.css';
import AddProduct from '../AddProduct/AddProduct';
import Home from '../Home/Home/Home';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageAllOrder from '../ManageAllOrder/ManageAllOrder';
import ManageProduct from '../ManageProduct/ManageProduct';
import MyOrder from '../Myorder/Myorder';
import Pay from '../Pay/Pay';
import Review from '../Review/Review';
import useAuth from '../../hooks/useAuth';
import AdminRoute from '../Shared/AdminRoute/AdminRoute';

  
const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const {user,logOut,admin}=useAuth();
    return (
        <div className="">
            <div className="dash">
            <h3 className="fw-bold pt-5">Dashboard</h3>
            <span className="fw-bold text-danger ">Use All Features</span>
            </div>
            
        
         <div>
             <div className="row">
                 <div className="col-md-6 col-12">
                 <div className="backbg">
                 <Link className="navsdash" to="/home">Home</Link>
                 {
                   admin &&  <div>
                         <Link className="navsdash" to={`${url}/makeadmin`}>Make Admin</Link>
                 <br />
                 <Link className="navsdash" to={`${url}/addproduct`}>Add Product</Link>
              <br />
                 <Link className="navsdash" to={`${url}/mnallorder`}>Manage AllOrder</Link>
              <br />
                 <Link className="navsdash" to={`${url}/manageproduct`}>Manage Product</Link>
                     </div>
                 }
                 {
                     !admin && <div>
                         <Link className="navsdash" to={`${url}/myorder`}>My Order</Link>
              <br />
                 <Link className="navsdash" to={`${url}/pay`}>Payment</Link>
              <br />
                 <Link className="navsdash" to={`${url}/review`}>Review</Link>
                 <br />
                     </div>
                 }
                 {
                   user?.email ?
                   <Link onClick={logOut} to="/home" className="navsdash">Logout</Link>:''  
                 }
                 </div>
                 </div>
                 <div className="col-md-6 col-12 pt-5">
                 <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <AdminRoute path={`${path}/makeadmin`}>
          <MakeAdmin></MakeAdmin>
        </AdminRoute>
        <AdminRoute path={`${path}/addproduct`}>
         <AddProduct></AddProduct>
        </AdminRoute>
        <AdminRoute path={`${path}/mnallorder`}>
        <ManageAllOrder></ManageAllOrder>
        </AdminRoute>
        <AdminRoute path={`${path}/manageproduct`}>
        <ManageProduct></ManageProduct>
        </AdminRoute>
        <Route path={`${path}/myorder`}>
        <MyOrder></MyOrder>
        </Route>
        <Route path={`${path}/pay`}>
        <Pay></Pay>
        </Route>
        <Route path={`${path}/review`}>
        <Review></Review>
        </Route>
      </Switch>
                 </div>
             </div>
         </div>




        </div>
    );
};

export default Dashboard;