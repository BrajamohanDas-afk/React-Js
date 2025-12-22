import { useEffect, useRef } from 'react'
import { ChatMessage } from './ChatMessage';

export function ChatMessages ({chatMessages}){
  const ChatMessagesRef = useRef(null)

  useEffect(()=>{
    const containerElem = ChatMessagesRef.current;
    if(containerElem){
      containerElem.scrollTop=containerElem.scrollHeight;
    }
  },[chatMessages]);
  return(
    <div 
      className="chat-messages-container"
      ref={ChatMessagesRef}
    >
      {chatMessages.map((chatMessage)=>{
        return(
          <ChatMessage 
            message = {chatMessage.message}
            sender = {chatMessage.sender}
            key = {chatMessage.id}
          />
        );
      })}
    </div>
  )
};