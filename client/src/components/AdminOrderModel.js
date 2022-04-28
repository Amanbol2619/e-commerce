import React from 'react';
import { Fragment } from 'react';
import { useSelector } from 'react-redux';

const AdminOrderModel = () => {

    const { cart } = useSelector(state => state.cart);
    return (
        <Fragment>
            <div className='bg-light my-2'>
                <div className='container'>
                <div className="row pb-3">
                <div className="col-md-4  my-1">
                
           
            <button type="button" className="btn btn-outline-success btn-block" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat">
            <i className="fas fa-money-bill"> Захиалга</i>
                </button>

<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Хэрэглэгчийн захиалга</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form>
          <div className="mb-2">
            <label for="recipient-name" className="col-form-label"></label>
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
                   
                    <strong>
                      <p class="mb-0">Нийт дүн</p>
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
              {/* <button  class="btn btn-primary btn-large btn-block mb-5 py-2 mx-2">
                 Цуцлах
              </button>
              <button  class="btn btn-dark btn-large btn-block mb-5 py-2">
                 Баталгаажуулах
              </button> */}
            
            </div>
        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">хаах</button>
        <button type="button" className="btn btn-primary">ok</button>
      </div>
    </div>
  </div>
</div>  

    </div>
</div>
</div>
</div> 

        </Fragment>
    );
};

export default AdminOrderModel;