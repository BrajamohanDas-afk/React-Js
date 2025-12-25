import dayjs from 'dayjs';
import { useState } from 'react'
import { Chatbot } from 'supersimpledev';

import './ChatInput.css'

export function ChatInput({chatMessages, setChatMessages}) {
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  function sendInputText(event){
    setInputText(event.target.value);
  }

  async function sendMessage(){
    if (isLoading || inputText === '') {
      return;
    }
    setIsLoading(true);
    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender:'user',
        id: crypto.randomUUID(),
        time: dayjs().valueOf()             
      },
      {
        message: <img src="/loading-spinner.gif" className="loading-spinner" />,
        sender: 'robot',
        id: crypto.randomUUID(),
        time: dayjs().valueOf()
      }
    ]
    setChatMessages(newChatMessages);

    setInputText('');

    const response = await Chatbot.getResponse(inputText);
    setChatMessages([
      ...newChatMessages.slice(0, - 1),
      {
        message: response,
        sender:'robot',
        id: crypto.randomUUID(),
        time: dayjs().valueOf()              
      }
    ]);

    setInputText('');
    setIsLoading(false);
  };

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      sendMessage();
    }else if(event.key === 'Escape'){
      setInputText('')
    }
  }

  function clearMessages() {
    setChatMessages([]);
  }
  return (
    <div className="chat-input-container">
      <input
        placeholder="Send a message to Chatbot"
        size="30"
        onChange= {sendInputText}
        value={inputText}
        className="chat-input"
        onKeyDown = {handleKeyDown}
      />
      <button
        onClick ={sendMessage}
        className = "send-button"
      >Send</button>
      <button
        onClick={clearMessages}
        className="clear-button"
      >Clear</button>
    </div>
  );
}