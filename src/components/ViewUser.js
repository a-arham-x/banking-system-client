import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';

function ViewUser(props) {
    const host = process.env.REACT_APP_HOST;
    const [user, setUser] = useState([]);
    const callFetch = useRef(true);

    const fetchData = async () => {
        try {
          const user_id = localStorage.getItem("user");
          const url = `${host}/users/${user_id}`
          const response = await fetch(url);
          const json = await response.json();
          setUser(json);
        } catch (error) {
          console.log('Error fetching data:', error);
        }
      };

    useEffect(() => {
        fetchData();
        console.log("Hello World");
      }, []);
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-5xl text-blue-900 -mb-20 mt-8">User Information</h1>
      {user && <div className="border-2 mx-96 my-32 flex flex-col items-center justify-center">
        <h1 className="text-2xl my-4 text-blue-700">Name: {user.name}</h1>
        <h1 className="text-2xl my-4 text-blue-700">Username: {user.username}</h1>
        <h1 className="text-2xl my-4 text-blue-700">Email: {user.email}</h1>
        <h1 className="text-2xl my-4 text-blue-700">Balance: {user.currentBalance}</h1>
        <Link to="/selectuser"><button className='bg-blue-500 text-white text-lg py-3 px-3 rounded my-6 hover:bg-blue-600'>Transfer Money</button></Link>
      </div>}
    </div>
  )
}

export default ViewUser