import React from "react";
import { useForm } from "react-hook-form";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";

const ClientArea = (props) => {
  const {
    register,
    formState: { errors },
  } = useForm();

  return (
    <div className="clientArea my-2">
      <label>
        Client Name
        <br />
        <input
          {...register("name", { required: true })}
          onBlur={(e) => props.handleChange(e)}
        />
      </label>

      <label>
        Due Date
        <br />
        <div className="cal mt-2">
          <Calendar onChange={props.handleDate} value={new Date()} />
        </div>
      </label>
    </div>
  );
};

export default ClientArea;
