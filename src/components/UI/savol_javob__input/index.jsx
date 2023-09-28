import React from 'react'
import { AttachmentIcon, SentIcon } from '../../../assets/react-icons'

const index=({classNameInput})=>{
    return (
        <>
            <div className="savol_javob_input">
                <input type="text" placeholder='Write your message...' className={'savol_javob '+classNameInput} />
                <div className="savol_javob_tugmalari">
                    <div className="choose_file">
                        <AttachmentIcon />
                    </div>  
                    <div className="sent_message">
                        <span>Send</span>
                        <SentIcon/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default index