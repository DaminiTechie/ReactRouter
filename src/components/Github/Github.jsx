import React, { useEffect } from "react";

function Github(){
    useEffect(() => {
        fetch('https://api.github.com/users/DaminiTechie')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setData(data)
        })
    }, [])
    return(
        <div className='text-center m-4 bg-gray-600 text-white p-4 text=3xl'>Github Followers:</div>
        
    )
}
export default Github;