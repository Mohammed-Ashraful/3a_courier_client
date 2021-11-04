import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css'
const AddService = () => {

  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <div className='add-services'>
      <h1>Please add a service </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder='Enter Your Service Name' {...register("Name", { required: true })} />
        <input placeholder='Enter Service Details' {...register("details")} />
        <input placeholder='Enter Service price' type="number" {...register("price")} />
        <input placeholder='Enter Image URL ' {...register("img")} />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddService;