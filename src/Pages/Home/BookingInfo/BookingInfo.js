// import userEvent from '@testing-library/user-event';
// import axios from 'axios';
// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { useParams } from 'react-router';
// import useAuth from '../../../Hooks/useAuth';
// import './BookingInfo.css'
// const BookingInfo = () => {
//   const { id } = useParams();
//   const { user } = useAuth();
//   const { register, handleSubmit, reset } = useForm();
//   const onSubmit = data => {
//     axios.post('http://localhost:5000/order', data)
//       .then(res => {
//         reset();
//         if (res.data.insertedId) {
//           alert('Added Successfully ')
//         }
//       })
//   };
//   return (
//     <div className='booking'>
//       <h1>Please add a service </h1>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <input value={user?.displayName} placeholder='Enter Your  Name' {...register("Name", { required: true })} />
//         <input value={user?.email}  placeholder='Enter Email' {...register("email")} />
//         <input placeholder='Your Address' {...register("address")} />
//         <input placeholder='Phone' type="number" {...register("Phone")} />
//         <input type="submit" />
//       </form>
//     </div>
//   );
// };

// export default BookingInfo;