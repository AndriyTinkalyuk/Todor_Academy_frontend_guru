import React, { useEffect, useState } from "react"
import './UserList.css'
export interface User { 
        id: number,
        name: string,
        age: number,
        email: string;    
}

interface UserListProps { 
    users: User[]
}



   const filterUsers= (filterText: string, users: User[]) => { 
      if(!filterText) { 
        return users;
      }

      return users.filter( user => { return(user.name.toLowerCase().includes(filterText.toLowerCase()))})
    }

const UserList: React.FC<UserListProps> = ({users}) => {
    const [usersList, setUsersList] = useState(users);
    const [filterValue, setFilterValue] = useState("");

  useEffect( () => {
    const filteredUsers = filterUsers(filterValue, users);
     const timeout = setTimeout(() => {
      setUsersList(filteredUsers);
      return(
        clearTimeout(timeout)
      ) 
     }, 300)
     
  }
    , [filterValue]);

  return (
    <> 
    <div className="container"> 
      <label htmlFor="filterInput">Фільтрація за іменем:</label>
      <input id="filterInput" type="text" value={filterValue} onChange={(e) => { setFilterValue(e.target.value)}} placeholder="Filter"/>
    <table>
        <thead>
            <tr>
            <th>name</th>
            <th>age</th>
            <th>email</th>
            </tr>
        </thead>
        <tbody>
      {usersList.map((user: User) => { return (<tr key={user.id}>
        <td>{user.name}</td>
           <td>{user.age}</td>
              <td>{user.email}</td>
      </tr>) })} 
      </tbody>
    </table>
    </div>
    </>

  )
};

export default UserList;
