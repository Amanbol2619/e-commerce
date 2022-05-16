
import React, { Fragment, useState} from "react";
import isEmpty  from 'validator/lib/isEmpty'
import { createProduct } from "../redux/actions/productActions"
import {showErrorMsg,  showLoadingMsg} from '../helper/message'
import { useSelector, useDispatch } from "react-redux";
import { clearMessages } from "../redux/actions/messageActions";



 const AdminProductModal = () => {

    //  const { successMsg, errorMsg } = useSelector(state => state.messages)
    const { loading } = useSelector(state => state.loading)
    const { categories } = useSelector(state => state.categories)

    const dispatch = useDispatch(); 
    
    const [clientSideError, setClientSideError] = useState('');
    const [productData, setProductData] = useState({
        productImage: null,
        productName:'',
        productDesc:'',
        productPrice:'',
        productCategory:'',
        productQty:'',
    });

    const {productImage,productName,productDesc, productPrice, productCategory, productQty} = productData;

    const handleMessages = (evt) => {
        dispatch(clearMessages());
        setClientSideError('');
         
     };

    const handleProductImage = (evt) => {
        console.log(evt.target.files[0]);
        setProductData({
            ...productData,
            [evt.target.name]: evt.target.files[0],
        });

    };

    const handleProductChange = (evt) =>{
        setProductData({
            ...productData,
            [evt.target.name]: evt.target.value,
        })

    }

    const handleProductSubmit = (evt) => {
        evt.preventDefault();
        if(productImage === null) {
            setClientSideError('Зураг оруулна уу');
        } else if(isEmpty(productName) || isEmpty(productDesc) || isEmpty(productPrice)){
            setClientSideError('Талбарууд хоосон байж болохгүй');
        } else if(isEmpty(productCategory)){
            setClientSideError('Category-ийн төрөл сонгоно уу');
        } else if(isEmpty(productQty)){
            setClientSideError('Тоо оруулна уу ');
        } else{
            console.log('product үүсэж байна');
            let formData = new FormData();
            formData.append('productImage', productImage);
            formData.append('productName', productName);
            formData.append('productDesc', productDesc);
            formData.append('productPrice', productPrice);
            formData.append('productCategory', productCategory);
            formData.append('productQty', productQty);

             dispatch(createProduct(formData));
            setProductData({
                productImage: null,
                productName:'',
                productDesc:'',
                productPrice:'',
                productCategory:'',
                productQty:'',
             });
        }
    };

  return(

    <div id='addFoodModel' className='modal' onClick={handleMessages}>
        <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
                <form onSubmit={handleProductSubmit}>
                    <div className="modal-header bg-warning text-white">
                        <h5 className="modal-title">Хоол нэмэх </h5>
                        <button className="close" data-bs-dismiss="modal">
                            <span><i className="fas fa-times"></i></span>

                        </button>
                    </div>
                    <div className="modal-body my-2">
                        { clientSideError && showErrorMsg(clientSideError)}
                        {/* {errorMsg && showErrorMsg(errorMsg)}
                        {successMsg && showSuccessMsg(successMsg)} */}
                        {
                            loading ? (
                              <div className="text-center">{showLoadingMsg()}</div>
                            ) : (
                                 <Fragment>
                                <div className="custom-file mb-1">
                                    <input type='file' 
                                    className="form-control"
                                    name="productImage"
                                    onChange={handleProductImage}

                                    />
                                    <label className="form-label">
                                         
                                    </label>
                                </div>
                                <div className="form-group">
                                    <label className="text-secondary">Нэр</label>
                                    <input type="text" 
                                    className="form-control"
                                    name="productName"
                                    value={productName}
                                    onChange={handleProductChange}
                                    />

                                </div>
                                <div className="form-group">
                                    <label className="text-secondary">Тайлбар</label>
                                    <textarea className="form-control" 
                                    rows="3"
                                    name="productDesc"
                                    value={productDesc}
                                    onChange={handleProductChange}
                                    >

                                    </textarea>
                                </div>
                                <div className="form-group">
                                    <label className="text-secondary">Үнэ</label>
                                    <input type="text" 
                                    className="form-control"
                                    name="productPrice"
                                    value={productPrice}
                                    onChange={handleProductChange}
                                    />

                                </div>
                                <div  className="form-row">
                                 <div className="form-group col-md-6">
                                     <label className="text-secondary">Категори</label>
                                     <select className="form-select mr-sm-1" 
                                     name="productCategory"
                                     onChange={handleProductChange}
                                     
                                     >
                                         <option value="">Сонгох ...</option>
                                         {categories && 
                                             categories.map( c => (
                                             <option 
                                                 key={c._id} 
                                                    value={c._id} >

                                                     {c.category}
                                             </option>
                                         ))}
                                         
                                     </select>
                                 </div>
                                 <div className="form-group col-md-6">
                                     <label className="text-secondary">Тоо</label>
                                     <input 
                                      type="number" 
                                      className="form-control"
                                       min="0"
                                       max="1000"
                                       name="productQty"
                                       value={productQty}
                                       onChange={handleProductChange}

                                       />
                                 </div>
                                </div>

    
                                    </Fragment>
                            ) }
                       
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-secondary" data-bs-dismiss="modal">хаах</button>
                        <button type="submit" className="btn btn-warning text-white">ok</button>
                    </div>
                </form>
            </div>
        </div>

    </div>
);
};

export default AdminProductModal;