import React, {useEffect} from "react";
import AdminHeader  from '../components/AdminHeader'
import AdminActionBtn from "../components/AdminActionBtn";
import AdminCategoryModal from "./AdminCategoryModel";
import AdminProductModal from "./AdminProductModel";
import AdminBody from "./AdminBody";
import AdminOrderModel from "./AdminOrderModel";

import { useDispatch} from 'react-redux'
import { getCategories} from  '../redux/actions/categoryActions'
import { getProducts } from "../redux/actions/productActions";

const AdminDashboard = () => {

    const dispatch = useDispatch();

    useEffect(() => {
     dispatch(getCategories())
    }, [dispatch]);

    useEffect(() => {
        dispatch(getProducts())
       }, [dispatch]);

    
    return(
        <section>
            <AdminHeader/> 
            <AdminActionBtn/>
            <AdminCategoryModal />
            <AdminProductModal />
            <AdminOrderModel />
            <AdminBody />
        </section>

);
    };
export default AdminDashboard;