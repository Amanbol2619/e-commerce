import React from "react";

const showActionBtn = () => (
    <div className="mt-2">
                <div className="col-md-4 mx-1 mb-2">
                    <button className="btn btn-outline-info" data-bs-toggle="modal" data-bs-target="#addModel">
                        <i className="fas fa-plus"> Категори</i>
                    </button>
                </div>
                <div className="col-md-4  mx-1">
                    <button className="btn btn-outline-info btn-block" data-bs-toggle="modal" data-bs-target="#addFoodModel">
                        <i className="fas fa-plus"> Хоол</i>
                    </button>
                </div>
                
    </div>
);

export default showActionBtn;