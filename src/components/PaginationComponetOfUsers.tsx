import React, {FC, useEffect} from 'react';
import {useSearchParams} from "react-router-dom";
import {apiService} from "../services/api.service";

const PaginationComponetOfUsers: FC<{flag: boolean}> = ({flag}) => {

    let [query, setQuery] = useSearchParams({page: "1"})




    let onclickPrevUsers = () => {
        let page = query.get("page");
        if(page && +page > 0) {
            let currentPage = +page;
            currentPage--;
            setQuery({page: currentPage.toString()})
        }
    }
    let onclickNextUsers = () => {
        let page = query.get("page");
        if(page) {
            let currentPage = +page;
            currentPage++;
            setQuery({page: currentPage.toString()})
        }
    }

    return (
        <div>
            <button onClick={onclickPrevUsers}>Prev users</button>
            <button disabled={flag} onClick={onclickNextUsers}>Next Users</button>

        </div>
    );
};

export default PaginationComponetOfUsers;