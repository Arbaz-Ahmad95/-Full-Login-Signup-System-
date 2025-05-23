// Profile.jsx
import React, { useEffect, useState } from 'react';

function Profile() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');

    fetch('http://localhost:3000/api/profile', {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    })
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h2>Profile Page</h2>
      <p>{message}</p>
    </div>
  );
}

export default Profile;
