import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
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
            Don't Have An Account?<Link to="/signUpPage"> Creat An Account</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
