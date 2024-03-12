import React from "react";
import '../../App.css'
import {useForm} from 'react-hook-form'

function Form(props) {
    const formAction=props.action
console.log('✌️formAction --->', formAction);
    //what things wil be dynamic in it-  action should be , 
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => {
        console.log(data);
        reset();
      };
  return (
    <div className="Collaborate-form">
      <form action={`"${formAction}"`} onSubmit={handleSubmit(onSubmit)}>
        <div className="form-title">
          <h5>Fill the form</h5>
        </div>
        <div className="inputGroup">
          <input
            type="text"
            className="inputField"
            id="fullName"
            name="fullName"
            placeholder="Full Name"
            {...register("fullName", {
              required: true,
              minLength: 4,
            })}
          />
          {errors.fullName?.type == "required" && (
            <span>fullName is required</span>
          )}
          {errors.fullName?.type == "minLength" && (
            <span>min length should be 4 char</span>
          )}

          {console.log(errors)}
        </div>
        <div className="inputGroup">
          <input
            type="email"
            className="inputField"
            placeholder="Email"
            name="email"
            {...register("email", { required: true })}
          />
          {errors.email?.type == "required" && <span>email is required</span>}
        </div>
        <div className="inputGroup">
          <input
            type="tel"
            className="inputField"
            placeholder="Phone No"
            name="number"
            {...register("number", { required: true })}
          />
          {errors.number?.type == "required" && <span>number is required</span>}
        </div>
        <div className="inputGroup">
          <textarea
            className="inputField"
            placeholder="Message"
            name="message"
            {...register("message", { required: true })}
          ></textarea>
          {errors.message?.type == "required" && (
            <span>message is required</span>
          )}
        </div>
        <button className="radiusBtn fillBtn">Submit Now</button>
      </form>
    </div>
  );
}

export default Form;
