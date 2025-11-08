import { useState, useEffect } from "react";

const User = (props) => {

   const [count]=useState(0);


   // API call will happen in inside useEffect because first page will load then render -> them api call -> re render the page
   useEffect(()=>{},[])

    return (
        <div className= "user-card">
            <h1>count: {count}</h1>
            <h2>Name :{props.name}</h2>
            <h3>Location: Andhra Pradesh</h3>
            <h4>Contact: tanujakota****</h4>
        </div>
    )
}

export default User;