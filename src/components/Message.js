import React from 'react'
import './Message.css'

const Message = ({text, sender}) => <div className={`${sender} bubble`} > {text}  </div>

export default Message
