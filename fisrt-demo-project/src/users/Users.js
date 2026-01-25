import React from "react";
import Users from "./Users"
export default class Users extends React.Component {
  constructor() {
    super();
    this.state = {
        users: [
            {name : "hend" , age : 20 , isAdmin : true},
            {name : "ali" , age : 22 , isAdmin : true},
            {name : "mohamed" , age : 20 , isAdmin : false}
        ]
    }
  }

 render() {
    return (
        <>
         <ul>
            {this.state.users.map((user , index) => {
                return (
                    <>
                    <li key={index}>{user.name}</li>
                    <li key={index}>{user.age}</li>
                    <li key={index}>{user.isAdmin}</li>
                    </>
                )
            })}
         </ul>
        </>
    )
 }

}