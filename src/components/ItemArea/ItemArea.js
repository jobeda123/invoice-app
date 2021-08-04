import React from "react";
import { useForm } from "react-hook-form";

const ItemArea = (props) => {
  const {
    register,
    formState: { errors },
  } = useForm();

  return (
    <div className="clientArea my-1">
      <div className="itemField">
        <label>
          Item
          <br />
          <input
            {...register("item", { required: true })}
            onBlur={(e) => props.handleChange(e)}
          />
        </label>

        <label>
          Description
          <br />
          <input
            {...register("description", { required: true })}
            onBlur={(e) => props.handleChange(e)}
          />
        </label>
      </div>

      <div className="smallInputField">
        <label>
          Unit Price
          <br />
          <input
            {...register("unitPrice", { required: true })}
            onBlur={(e) => props.handleChange(e)}
          />
        </label>
        <label>
          Quantity
          <br />
          <input
            {...register("quantity", { required: true })}
            onBlur={(e) => props.handleChange(e)}
          />
        </label>
      </div>

      <div className="smallInputField">
        <label>
          Discount(%)
          <br />
          <input
            {...register("discount", { required: true })}
            onBlur={(e) => props.handleChange(e)}
          />
        </label>

        <label>
          Tax(%)
          <br />
          <input
            {...register("tax", { required: true })}
            onBlur={(e) => props.handleChange(e)}
          />
        </label>
      </div>
    </div>
  );
};

export default ItemArea;
