import React from 'react'
import "./newsLetter.scss"
import SendIcon from '@mui/icons-material/Send';

function NewsLetter() {
    return (
        <div className="newsLetterCon">
            <span className="newsLetterTitle">Newsletter</span>
            <span className="newsLetterSubTitle">Get timely updated from your favourite products.</span>

            <div className="newsLetterInputAndSendCon">
                <input className='newsLetterInput' type="text" placeholder="Enter your email" />
                <div className="newsLetterButtonCon">
                    <SendIcon />
                </div>
            </div>
        </div>
    )
}

export default NewsLetter