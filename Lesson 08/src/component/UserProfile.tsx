import React from "react"


interface UserProfileProps { 
  name: string,
  age: number,
  email: string
}

const UserProfile = (props: UserProfileProps) => {
  return (
    <div>
      Ім'я: {props.name}, Вік: {props.age}, Електронна пошта: {props.email}
    </div>
  )
};

export default UserProfile;
