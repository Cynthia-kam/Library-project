import React, { useState } from 'react';
import axios from 'axios';
import './AddBook.css'


function AddUser() {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [Fullname, setFullname] = useState('');
  
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');



  const handleSubmit = (event) => {
    event.preventDefault();
    const newUser = {
      fullname: Fullname,
      email: Email,
      password: Password,
     
    };
    setLoading(true);
    axios.post('https://pink-thankful-oyster.cyclic.app/signup', newUser)
      .then(res => {
        // console.log(res);
        setSuccessMessage(res.data.message);
        setEmail('');
        setFullname('');
        setPassword('');
      })
      .catch(err => {
        console.log(err);
        if (err.response && err.response.status === 400 && err.response.data && Array.isArray(err.response.data.error)) {
          setError(err.response.data.error);}
        else if(err.response && err.response.data && err.response.data.message) {
          setError(err.response.data.message);
        } else {
          setError('An error occurred. Please try again later.');
        }})
        .finally(() => {
          setLoading(false); 
        });
  };

  return (
  
    <>
      <h3>Signup</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Fullname:
          <input type="text" value={Fullname} onChange={event => setFullname(event.target.value)} />
        </label>
        <label>
          Email:
          <input type="text" value={Email} name="uname" onChange={event => setEmail(event.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={Password} name="psw" onChange={event => setPassword(event.target.value)} />
        </label>
       
        {error && <p className="error">{error}</p>}
        {successMessage && <p className="success">{successMessage}</p>}
        <button type="submit">{loading ? 'Adding...' : 'Add'}</button>
        
      </form>
    </>
  
  );
}

export default AddUser;