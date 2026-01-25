import { useState } from "react";

export default function UsersFunctional() {
    const [users , setUsers ] = useState([
            {name : "hend" , age : 20 , isAdmin : true},
            {name : "ali" , age : 22 , isAdmin : true},
            {name : "mohamed" , age : 20 , isAdmin : false}
       ]);

        const [isAuth , setIsAuth] =  useState(true);
        
        const handleToggleUsers = () => {
            setIsAuth((isAuth) => !isAuth)
        }
       
        return (
        <>
         <ul>
            {(isAuth)? users.map((user ,  index) => {
                if(user.isAdmin){
                    return (<li key={index}>{user.name}</li>)
                }
            }): (<h1>Please Login First</h1>)}
         </ul>
         <button className="btn btn-success" onClick={() =>handleToggleUsers()}>Toggle</button>
        </>
    )
}