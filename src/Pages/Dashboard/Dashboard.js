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
        <div className="me-auto">
            <div className="dash">
            <h3 className="fw-bold">Dashboard</h3>
            <span className="fw-bold text-danger ">Use All Features</span>
            </div>
            
        
         <div>
           
           {/* Dashboard Link add  */}

             <div className="row">
                 <div className="col-md-3 bord col-12">
                 <div className="backbg">
                   {
                     admin && <h6 className="mrg1 fw-bold mb-3">Admin Dashboard</h6>
                   }
                   {
                     !admin && <h6 className="mrg1 fw-bold mb-3 ">User Dashboard</h6>
                   }
        
                  <h6 className="mrg"><i class="fas fa-home"></i><Link className="navsdash" to="/home">Home</Link></h6>
                 {
                   admin &&  <div>
                <h6 className="mrg"><i class="fas fa-user-shield"></i> <Link className="navsdash" to={`${url}/makeadmin`}>Make Admin</Link></h6>
            
                <h6 className="mrg"><i class="fas fa-shopping-basket"></i> <Link className="navsdash" to={`${url}/addproduct`}>Add Product</Link></h6>
       
                 <h6 className="mrg"><i class="fas fa-shopping-cart"></i> <Link className="navsdash" to={`${url}/mnallorder`}>Manage AllOrder</Link></h6>
        
                 <h6 className="mrg"><i class="fas fa-car"></i> <Link className="navsdash" to={`${url}/manageproduct`}>Manage Product</Link></h6>
                     </div>
                 }
                 
                <h6 className="mrg"><i class="fas fa-shopping-basket"></i> <Link className="navsdash" to={`${url}/myorder`}>My Order</Link></h6>
     
                <h6 className="mrg"><i class="fas fa-dollar-sign"></i> <Link className="navsdash" to={`${url}/pay`}>Payment</Link></h6>

                 <h6 className="mrg"><i class="fas fa-user"></i> <Link className="navsdash" to={`${url}/review`}>Review</Link></h6>
               
                   
                 
                 {
                   user?.email ?
                   <h6 className="mrg"><i class="fas fa-sign-out-alt"></i> <Link onClick={logOut} to="/home" className="navsdash">Logout</Link></h6> :''  
                 }
                 </div>
                 </div>
                 <div className="col-md-9 col-12 pt-5">

            {/* Admin And User Route set  */}

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