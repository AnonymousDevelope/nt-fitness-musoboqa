import React from 'react'
import { UserIcon } from '../../../assets/react-icons'

const index = ({children}) => {
    return (
        <>
            <div className="users_list_item">
                <div className="profile">
                    <UserIcon />
                </div>
                <div className="column">
                    <div className="user_name">Anna</div>
                    <div className="user_message_short">{children}</div>
                </div>
            </div>
        </>
    )
}

export default index