import React from "react";
import { useForm } from "react-hook-form";
import "./SignUpPage.css";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="signUpArea">
      <div className="my-3">
        <h2>Sign Up</h2>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="signUpForm">
          <input type="text" {...register("name")} placeholder="User Name" />

          <br />
          <input type="email" {...register("email")} placeholder="Email" />
          <br />
          <input
            type="password"
            {...register("password")}
            placeholder="Password"
          />
          <br />
          <input
            type="text"
            {...register("birthDate")}
            placeholder="Birth of Date (dd-mm-yyyy)"
          />
          <br />
          <input type="text" {...register("address")} placeholder="Address" />
          <br />
          <div className="optionArea mt-3">
            <span>Gender </span>
            <select {...register("gender")}>
              <option value="female">female</option>
              <option value="male">male</option>
              <option value="other">other</option>
            </select>
          </div>
          <br />
          <input className="commonBtn" type="submit" />
          <p className="otherLink my-2">
            Already Have an Account?<Link to="/login"> Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
