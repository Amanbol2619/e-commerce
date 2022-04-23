import React from "react";
import { Link } from "react-router-dom";

 const UserDashboard = () =>{
    
      return(
        <div class="row">
        <div class="col-md-8 mb-4">
          <div class="card mb-4">
            <div class="card-header py-3">
              <h5 class="mb-0">Хүргүүлэх хаягийн дэлгэрэнгүй мэдээлэл</h5>
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
                  <input type="number" id="form7Example6" class="form-control" />
                  <label class="form-label" for="form7Example6">Утас</label>
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
                  Products
                  <span>$53.98</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                  Хүргэлт
                  <span>Gratis</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                  <div>
                    <strong>Нийт дүн</strong>
                    <strong>
                      <p class="mb-0">НӨАТ багтаасан</p>
                    </strong>
                  </div>
                  <span><strong>$53.98</strong></span>
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