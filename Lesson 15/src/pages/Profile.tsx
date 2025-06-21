import Profile from "../component/Profile/Profile";
import type { IUser } from "../Model/IUser";

const user: IUser = {
    name: "Andrii",
    age: 20,
    adress: "city Kosiv"
}

const ProfilePage = () => {
    return (
        <main className="page">
            <Profile user={user} />
        </main>
    )
};

export default ProfilePage;
