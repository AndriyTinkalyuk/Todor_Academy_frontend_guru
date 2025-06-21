import React from "react"
import type { IUser } from "../../Model/IUser";

interface ProfileProps {
    user: IUser
}

const Profile: React.FC<ProfileProps> = ({ user }) => {
    const { name, age, adress } = user;

    return (
        <div className="profile">
            <div className="profile-name">name: {name}</div>
            <div className="profile-age">age: {age}</div>
            <div className="profile-adress">adress: {adress}</div>
        </div>
    )
};

export default Profile;
