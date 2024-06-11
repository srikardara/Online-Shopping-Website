import React, { useState, useEffect } from 'react';
import { db } from '../../src/firebase'; // Import your Firestore instance
import { getDocs, collection } from 'firebase/firestore';

function AllData() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    // Function to retrieve all user data (phone numbers and passwords) from Firestore
    const fetchUserData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'shop')); // Replace 'yourCollection' with the name of your collection
        const userDataArray = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          // Check if both phone number and password exist in the document
          if (data.phone_number && data.password) {
            const user = {
              phoneNumber: data.phone_number, // Assuming 'phone_number' is the field name for the phone number
              password: data.password // Assuming 'password' is the field name for the password
            };
            userDataArray.push(user);
          }
        });
        setUserData(userDataArray);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData(); // Call the function when the component mounts
  }, []);

  return (
    <div>
      <h2>All User Data</h2>
      <ul>
        {userData.map((user, index) => (
          <li key={index}>
            Phone Number: {user.phoneNumber}, Password: {user.password}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllData;
