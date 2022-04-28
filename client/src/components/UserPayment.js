import React, { Fragment} from 'react';
import QRCode from 'qrcode.react';
import Logo from '../qPay.png'
const UserPayment = () => {
  
    return (
        <Fragment>
        <div className='mt-2'>
           
<button type="button" className="btn btn-primary mt-1 mx-2" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat">Интернет банк</button>

<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Интернэт банк</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form>
          <div className="mb-2">
            <label for="recipient-name" className="col-form-label"> Хаан банк</label>
          </div>
          <div className="mb-3">
            <label for="recipient-name" className="col-form-label">Данс  5197048666</label>
          </div>
          <div className="mb-3">
          <div>
                  <br/> <QRCode  id='123'  value='5197048666'/>
                 </div>
          </div>
        
          <div className="mb-1">
            <label for="recipient-name" className="col-form-label">Гүйлгээний утга</label>
          </div>
          <div>
            <label for="recipient-name" className="col-form-label">Order ID </label>
          </div>
          <div>
            <label for="recipient-name" className="col-form-label">11564875</label>
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

<button type="button" className="btn btn-primary mt-1 mx-5" data-bs-toggle="modal" data-bs-target="#exampleModalka" data-bs-whatever="@getbootstrap">Qpay</button>
<div className="modal fade" id="exampleModalka" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Qpay</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form>
                  <div style={{textAlign: 'center'}}> 
                     <img src={ Logo} alt="Khan Qpay"/>
                 </div>  
          {/* <div className="mb-1">
            <label for="recipient-name" className="col-form-label">Гүйлгээний утга</label>
          </div> */}
         
        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">хаах</button>
        <button type="button" className="btn btn-primary">ok</button>
      </div>
    </div>
  </div>
</div>    

<button type="button" className="btn btn-primary mt-1 mx-5" data-bs-toggle="modal" data-bs-target="#exampleMod" data-bs-whatever="@getbootstrap">Cart payment</button>
<div className="modal fade" id="exampleMod" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Payment</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form>
        <div classNameName="container">
    <div classNameName="row">
        <div classNameName="col-xs-12 col-md-4 col-md-offset-4 ">
            <div classNameName="panel panel-default">
                <div classNameName="panel-heading">
                    <div classNameName="row">
                        <h3 classNameName="text-center">Payment Details</h3>
                    </div>
                </div>
                <div classNameName="panel-body">
                    <form role="form">
                        <div classNameName="row">
                            <div classNameName="col-xs-12">
                                <div classNameName="form-group">
                                    <label>CARD NUMBER</label>
                                    <div classNameName="input-group">
                                        <input type="tel" classNameName="form-control" placeholder="Valid Card Number" />
                                        <span classNameName="input-group-addon"><span classNameName="fa fa-credit-card"></span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div classNameName="row">
                            <div classNameName="col-xs-7 col-md-7">
                                <div className="form-group">
                                    <label><span className="hidden-xs">EXPIRATION</span><span className="visible-xs-inline">EXP</span> DATE</label>
                                    <input type="tel" className="form-control" placeholder="MM / YY" />
                                </div>
                            </div>
                            <div className="col-xs-5 col-md-5 pull-right">
                                <div className="form-group">
                                    <label>CV CODE</label>
                                    <input type="tel" className="form-control" placeholder="CVC" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="form-group">
                                    <label>CARD OWNER</label>
                                    <input type="text" className="form-control" placeholder="Card Owner Names" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="panel-footer">
                    <div className="row">
                        <div className="col-xs-12">
                            <button className="btn btn-warning btn-lg btn-block">Process payment</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
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
        </Fragment>
    );
};

export default UserPayment;