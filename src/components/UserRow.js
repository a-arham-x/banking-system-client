import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

function UserRow(props) {
    const location = useLocation();
    const navigate = useNavigate();
    const directToUser = ()=>{
        if (location.pathname==="/users"){
            localStorage.setItem("user", props.user._id);
            navigate("/view");
        }else if (location.pathname==="/selectuser"){
            localStorage.setItem("transferto", props.user._id)
            navigate("/transfer")
        }
      }
    return (
        <tr key={props.user._id}>
            <td className='border-4 px-6 cursor-pointer hover:text-blue-500 hover:underline' onClick={directToUser}>{props.user.name}</td>
            <td className='border-4 px-6'>{props.user.username}</td>
            <td className='border-4 px-6'>{props.user.email}</td>
        </tr>
    )
}

export default UserRow