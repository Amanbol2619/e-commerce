
import React, {Fragment, useState} from "react";
import isEmpty  from 'validator/lib/isEmpty'
import { useSelector, useDispatch } from "react-redux";
import {showErrorMsg,  showLoadingMsg } from '../helper/message'
import { clearMessages } from "../redux/actions/messageActions";
import { createCategory } from "../redux/actions/categoryActions";


  const AdminCategoryModal = () => {

//   const { successMsg, errorMsg } = useSelector(state => state.messages)
  const { loading } = useSelector(state => state.loading)

   
  const dispatch = useDispatch();

    const [category, setCategory] = useState('');
    const [clientSideErrorMsg, setClientSideErrorMsg] = useState('');

    const handleMessages = (evt) => {
        dispatch(clearMessages());

         
     };
 
     const handleCategoryChange = (evt) => {
         dispatch(clearMessages());
         setCategory(evt.target.value);
         console.log(category);
 
     };

     const handleCategorySubmit = (evt) => {
        evt.preventDefault();
        console.log(category);
        

       if(isEmpty(category)){
        
            setClientSideErrorMsg('Хоосон байна')
       } else{
        const data = { category };
        dispatch(createCategory(data))
        setCategory('');
       }

       

    };

      return(

    <div id='addModel' className='modal' onClick={handleMessages}>
        <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
                <form onSubmit={handleCategorySubmit}>
                    <div className="modal-header bg-info text-white">
                        <h5 className="modal-title">Категори нэмэх </h5>
                        <button className="close" data-bs-dismiss="modal">
                            <span><i className="fas fa-times"></i></span>

                        </button>
                    </div>
                    <div className="modal-body my-2">
                        {clientSideErrorMsg && showErrorMsg(clientSideErrorMsg)}
                        {/* {errorMsg && showErrorMsg(errorMsg)}
                        {successMsg && showSuccessMsg(successMsg)} */}
                        {
                            loading ? (
                              <div className="text-center">{showLoadingMsg()}</div>
                            ) : (
                                 <Fragment>
                                <label className="text-secondary">Категори</label>
                                <input type="text"
                                    className="form-control"
                                    name="category"
                                    onChange={handleCategoryChange}
                                    value={category} />
    
                                    </Fragment>
                            ) }
                       
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-secondary" data-bs-dismiss="modal">хаах</button>
                        <button type="submit" className="btn btn-info">ok</button>
                    </div>
                </form>
            </div>
        </div>

    </div>
);
 };

export default AdminCategoryModal;