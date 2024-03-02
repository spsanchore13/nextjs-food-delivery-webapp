import React from "react";

const RestaurantSignUp = () => {
  return (
    <>
      <h3>Restaurant SignUp</h3>
      <div>
        <div className="input-wrapper">
          <input placeholder="Enter email id" className="input-field" />
        </div>
        <div className="input-wrapper">
          <input placeholder="Enter password" className="input-field" />
        </div>
        <div className="input-wrapper">
          <input placeholder="Confirm password" className="input-field" />
        </div>
        <div className="input-wrapper">
          <button className="button"> Login</button>
        </div>
      </div>
    </>
  );
};

export default RestaurantSignUp;
