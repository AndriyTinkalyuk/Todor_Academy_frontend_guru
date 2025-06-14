import React, { useEffect, useState } from "react"
import type { IUser } from "../../Model/IUser";
import UserProfile from "./UserProfile";

const UserConteiner = () => {

    const mockUser = { name: 'Andrii', email: "Andrii@gmail.com", avatarUrl: '/vite.svg' }


    const [user, setUser] = useState({} as IUser)

    useEffect(() => { setUser(mockUser) }, [])


    const changeName = () => {
        const newName = prompt();
        if (!newName || !newName.trim()) return;
        if (newName.trim()) {
            setUser((prevUser) => ({ ...prevUser, name: newName.trim() }))
        }
    }
    return (
        <div>
            <UserProfile user={user} onChangeName={changeName} />
        </div>
    )
};

export default UserConteiner;
