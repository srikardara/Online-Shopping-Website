import React, { useState } from 'react';
import '../register/register.css';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, app } from "../../firebase";
import { getFirestore, setDoc, doc, collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase";

function Register() {
  const db = getFirestore();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    user: "",
    age: "",
    phone: "",
    gender: "",
    password: "",
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await setDoc(
        doc(db, "shop", formData.user),
        {
          username: formData.user,
          age: formData.age,
          phone_number: formData.phone,
          gender: formData.gender,
          password: formData.password,
          email: formData.email,
        }
      );

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      ).then(async (data) => { });
    } catch (error) {
      console.error("Error registering user:", error.message);
    }
    navigate("/login");
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit} className='registerForm'>
        <div className='userField'>
          <h3>Register</h3>
          <label htmlFor="user"></label>
          <input type="text" id='user' name="user" value={formData.user} onChange={handleChange} placeholder='Enter Username' className='inputField' />
        </div>
        <div className='emailField'>
          <label htmlFor="email"></label>
          <input type="text" id='email' name="email" value={formData.email} onChange={handleChange} placeholder='Enter Email' className='inputField' />
        </div>
        <div>
          <label htmlFor="age"></label>
          <input type="number" id='age' name="age" value={formData.age} onChange={handleChange} placeholder='Enter Age' className='inputField' />
        </div>
        <div className='phoneField'>
          <label htmlFor="phone"></label>
          <input type="text" id='phone' name="phone" value={formData.phone} onChange={handleChange} placeholder='Enter Phonenumber' className='inputField' />
        </div>
        <div className='genderField'>
          <label className='maleLabel'>
            <input type="radio" id="gender" name="gender" value="male" checked={formData.gender === 'male'} onChange={handleChange} className='inputField' /> Male
          </label>
   
          <label className='femaleLabel'>
            <input type="radio" name="gender" value="female" checked={formData.gender === 'female'} onChange={handleChange} className='inputField' /> Female
          </label>
        </div>
        <div className='passwordField'>
          <label htmlFor="password"></label>
          <input type="password" id='password' name="password" value={formData.password} onChange={handleChange} placeholder='Enter Pin' className='inputField' />
        </div>
        <button type='submit' className='submitButton'>Register</button>
      </form>
    </div>
  )
}

export default Register;
