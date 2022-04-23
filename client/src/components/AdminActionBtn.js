import React from "react";

const showActionBtn = () => (
    <div className="bg-light my-2">
        <div className="container">
            <div className="row pb-3">
                <div className="col-md-4  my-1">
                    <button className="btn btn-outline-info" data-bs-toggle="modal" data-bs-target="#addModel">
                        <i className="fas fa-plus"> Add Category</i>
                    </button>
                </div>
                <div className="col-md-4  my-1">
                    <button className="btn btn-outline-danger btn-block" data-bs-toggle="modal" data-bs-target="#addFoodModel">
                        <i className="fas fa-plus"> Add Food</i>
                    </button>
                </div>
                <div className="col-md-4  my-1">
                    <button className="btn btn-outline-success btn-block">
                        <i className="fas fa-money-bill"> View Orders</i>
                    </button>
                </div>
            </div>
        </div>
    </div>
);

export default showActionBtn;