import React from 'react'
import UserItem from '../UserItem/UserItem';
import "./UserList.css"

function UserList ({users, onListItemDelete}) {
    return ( 
        <div className="user-list">
            <div className="space"></div>
             {users.map((user, index) => {
                return <UserItem
                key = { index + "users"}
                user = {user}
                onItemDelete={(itemId) => onListItemDelete(itemId)}
                />
            })} 
        </div>
    );

}

export default UserList;