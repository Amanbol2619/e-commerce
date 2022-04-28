import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

 const UserDashboard = () =>{

  const { cart } = useSelector(state => state.cart);
    
      return(
        <div class="row">
        <div class="col-md-8 mb-4">
          <div class="card mb-4">
            <div class="card-header py-3">
              <h5 class="mb-0">Дэлгэрэнгүй мэдээлэл</h5>
            </div>
            <div class="card-body">
              <form>
                {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
                <div class="row mb-4">
                  <div class="col">
                    <div class="form-outline">
                      <input type="text" id="form7Example1" class="form-control" />
                      <label class="form-label" for="form7Example1">Нэр</label>
                    </div>
                  </div>
                 
                </div>
      
               
      
                {/* <!-- Text input --> */}
                <div class="form-outline mb-4">
                  <input type="text" id="form7Example4" class="form-control" />
                  <label class="form-label" for="form7Example4">Хаяг</label>
                </div>
      
                {/* <!-- Email input --> */}
                <div class="form-outline mb-4">
                  <input type="email" id="form7Example5" class="form-control" />
                  <label class="form-label" for="form7Example5">Email</label>
                </div>
      
                {/* <!-- Number input --> */}
                <div class="form-outline mb-4">
                  <input type="email" id="form7Example5" class="form-control" />
                  <label class="form-label" for="form7Example5">Утас</label>
                </div>
      
                {/* <!-- Message input --> */}
                <div class="form-outline mb-4">
                  <textarea class="form-control" id="form7Example7" rows="4"></textarea>
                  <label class="form-label" for="form7Example7">Нэмэлт мэдээлэл</label>
                </div>
      
               
              </form>
            </div>
          </div>
        </div>
      
        <div class="col-md-4 mb-4">
          <div class="card mb-4">
            <div class="card-header py-3">
              <h5 class="mb-0">Summary</h5>
            </div>
            <div class="card-body">
              <ul class="list-group list-group-flush">
                <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                  Захиалсан хоол
                  { cart.map(product => (
                   
                    <tr key={product._id}>
                      <th scope="row">
                        {' '}
                        <img
													style={{
														maxWidth: '110px',
													}}
													className='img-fluid w-100 img-thumbnail'
													src={`/uploads/${product.fileName}`}
													alt='product'
												/>
                      </th>
                      {' '}
                      {product.productName}
                      <td>
                      {' '}
												{product.productPrice.toLocaleString(
													'en-US',
													{
														style: 'currency',
														currency: 'MNT',
													}
                        )}
                      </td>
                    </tr>
                  )
                    )}
                </li>
               
                <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                  <div>
                    <strong>Нийт дүн</strong>
                    <strong>
                      <p class="mb-0">НӨАТ багтаасан</p>
                    </strong>
                  </div>
                  <p className='font-weight-light text-muted border-bottom'>
								{cart.length === 1
									? '(1) Төрөл'
									: `(${cart.length}) Төрөл`}
							</p>
                  <span><strong>
                  Нийт: ₮
								{cart
									.reduce(
										(currentSum, currentCartItem) =>
											currentSum +
											currentCartItem.count *
												currentCartItem.productPrice,
										0
									)
									.toFixed(2)}
                    </strong></span>
                </li>
              </ul>
      
              <button  class="btn btn-dark btn-large btn-block mb-5 py-2">
                  <Link to='/user/payment'>Төлбөр төлөх</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
        
    );
    };
    

export default UserDashboard;