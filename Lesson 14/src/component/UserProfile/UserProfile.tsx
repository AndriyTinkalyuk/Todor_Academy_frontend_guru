import React from "react"
import type { IUser } from "../../Model/IUser";
import './UserProfile.css'

interface UserProfileProps {
    user: IUser,
    onChangeName: () => void

}

const UserProfile: React.FC<UserProfileProps> = ({ user, onChangeName }) => {

    const { name, email, avatarUrl } = user
    return (
        <div>
            <div className="button-container"><button className="change-name" onClick={() => onChangeName()}>change name</button></div>
            <div className="user">
                <div className="user-avatar"><img src={avatarUrl} alt="avatar" /></div>
                <div className="user-description">
                    <div className="user-name">name: {name}</div>
                    <div className="user-email">email: {email}</div>
                </div>
            </div>
        </div>
    )
};

export default UserProfile;
