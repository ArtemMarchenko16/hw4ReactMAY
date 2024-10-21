import React, {useEffect, useState} from 'react';
import PaginationComponetOfUsers from "../components/PaginationComponetOfUsers";
import {useSearchParams} from "react-router-dom";
import {apiService} from "../services/api.service";
import {IUser} from "../models/IUser";
import User from "../components/User";

const UsersPage = () => {

    let [query, setQuery] = useSearchParams({page: "1"})
    const [flag, setFlag ] = useState<boolean>(false)
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        let page = query.get("page");
        if(page) {
            apiService.users.getAll(+page)
                .then(value => {
                    setUsers(value.users)
                    setFlag(value.flag)
                })
        }
    }, [query]);

    return (
        <div>
            {
                users.map(value => <User key={value.id} user={value}/>)
            }
            <PaginationComponetOfUsers flag={flag}/>
        </div>
    );
};

export default UsersPage;