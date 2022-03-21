import React, {Fragment} from "react"

 export const showErrorMsg = (msg) => (
    <div className="alert alert-danger" role="alert">
            {msg}
        </div>

);
export const showSuccessMsg = (msg) => (
    <div className="alert alert-success" role="alert">
            {msg}
        </div>

);
export const showLoadingMsg = (msg) => (
    <Fragment>
    <div className="spinner-border text-success" role="status">
  <span className="sr-only">Loading...</span>
  
</div>
<div className="spinner-border text-danger" role="status">
  <span className="sr-only">Loading...</span>
</div>
<div className="spinner-border text-warning" role="status">
  <span className="sr-only">Loading...</span>
</div>
<div className="spinner-border text-info" role="status">
  <span className="sr-only">Loading...</span>
</div>
<div className="spinner-border text-light" role="status">
  <span className="sr-only">Loading...</span>
</div>
<div className="spinner-border text-dark" role="status">
  <span className="sr-only">Loading...</span>
</div>
</Fragment>
);
   




