"use client";

import React, { useState } from "react";
import RestaurantLogin from "../_components/restaurantLogin";
import RestaurantSignUp from "../_components/restaurantSignUp";

function Restaurant() {
  const [login, setLogin] = useState(true);

  return (
    <>
      <h1>Restaurant Login/SignUp Page</h1>
      {login ? <RestaurantLogin /> : <RestaurantSignUp />}

      <div>
        <button onClick={() => setLogin(!login)}>
          {login
            ? "Do not have Account? SignUp"
            : "Already have Account? Login"}
        </button>
      </div>
    </>
  );
}

export default Restaurant;
