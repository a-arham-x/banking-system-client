import React from 'react'
import {useState, useEffect, useRef} from "react";
import { Link } from 'react-router-dom';
import UserRow from './UserRow';

function Users() {
    const host = process.env.REACT_APP_HOST;
    const [users, setUsers] = useState([]);
    const callFetch = useRef(true);

    const fetchData = async () => {
        try {
          const url = `${host}/users/`
          const response = await fetch(url, {
            method: "GET"
          });
          const json = await response.json();
          setUsers(json);
        } catch (error) {
          console.log('Error fetching data:', error);
        }
      };

      

    useEffect(() => {
        fetchData();
        console.log(users);
      }, []);

  return (
    <div className='flex flex-col items-center justify-center'>
    <h1 className='text-blue-700 text-5xl font-bold mt-16'>Our Users</h1>
    <table className="table-auto border-4 my-8">
      <thead>
        <tr>
          <th className='border-4 px-6'>Name</th>
          <th className='border-4 px-6'>Username</th>
          <th className='border-4 px-6'>Email</th>
        </tr>
      </thead>
      <tbody>
        {users && users.map((user)=>{
          return <UserRow user={user} key={user._id}/>
        })}
      </tbody>
    </table>
    </div>
    
  )
}

export default Users