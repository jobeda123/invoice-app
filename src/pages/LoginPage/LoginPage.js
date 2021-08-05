import React from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../App";

const LoginPage = () => {
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/invoicePage" } }|| { from: { pathname: "/ profilePage" } };
  const [user, setUser] = useContext(UserContext);
  const { register, handleSubmit, reset } = useForm();


  const onSubmit = (data) => {
    if (data.email === user.email && data.password === user.password) {
      user.isSignIn = true;
      history.replace(from);
    } else {
      alert("Invalid User");
      reset();
    }
  };
  return (
    <div className="signUpArea">
      <div className="my-3">
        <h2>Hello!</h2>
        <h4>Sign Into Your Account</h4>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="signUpForm">
          <input type="email" {...register("email")} placeholder="Email" />
          <br />
          <input
            type="password"
            {...register("password")}
            placeholder="Password"
          />
          <br />

          <br />
          <input className="commonBtn" type="submit" />

          <p className="otherLink my-2">
            Don't Have An Account?
            <Link to="/signUpPage"> Creat An Account</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
