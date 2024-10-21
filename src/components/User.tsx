import React, {FC} from 'react';
import {IUser} from "../models/IUser";

type IUsersProps = {
    user: IUser;
}

const User:FC<IUsersProps> = ({user}) => {
    return (

        <div key={user.id}>{user.firstName} {user.lastName}</div>
    );
};

export default User;