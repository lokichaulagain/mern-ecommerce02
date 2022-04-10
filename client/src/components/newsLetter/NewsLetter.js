import React from 'react'
import "./newsLetter.scss"
import SendIcon from '@mui/icons-material/Send';

function NewsLetter() {
    return (
        <div className="newsLetterCon">
            <span className="newsLetterTitle">Newsletter</span>
            <span className="newsLetterSubTitle">Get timely updated from your favourite products.</span>


            <div className="newsLetterInputConWrapper">
                <div className="newsLetterInputCon">
                    <input className='newsLetterInput' type="text" placeholder="Enter your email" />
                </div>

                <div className="sendButCon">
                    <SendIcon className="sendBut" />
                </div>
            </div>


        </div>
    )
}

export default NewsLetter