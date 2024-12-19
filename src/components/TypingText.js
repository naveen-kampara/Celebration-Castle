import React from 'react'
import './TypingText.css';
function TypingText(props) {
  return (
    <div>
       <div className='container'>
        <p className='text'>{props.inputText}</p>
      </div>
    </div>
  )
}

export default TypingText;
