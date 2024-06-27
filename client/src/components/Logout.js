import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';

const Logout = () => {
    const navigate = useNavigate();

    //promises
    useEffect(() => {
        fetch('http://localhost:5000/signout' , {
            method : "GET",
            headers : {
                Accept : "application/json",
                "Content-Type" : "application/json"
            },
            credentials : "include"
        }).then((res) => {
            navigate('/login');

            if(!res.status === 200){
                const error = new Error(res.error);
                throw error;
            }
        }).catch((err) => {
            console.log(err);
        })
    });
  return (
    <div>
      
    </div>
  )
}

export default Logout
