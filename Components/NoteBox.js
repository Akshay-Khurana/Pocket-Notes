import React, { useState } from 'react';
import '../styles/noteboxstyle.css'; // Import your CSS file for styling

const NoteBox = ({selectedChatGroup,colorName}) => {
  const [inputText, setInputText] = useState('');
  const [chatData, setChatData] = useState({});
  const chatMessages = chatData[selectedChatGroup] || [];

  {console.log(selectedChatGroup,colorName)}
  


  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const addToChat = () => {
    if (inputText.trim() !== '') {
      const currentDate = new Date();
      const hours = currentDate.getHours();
      const minutes = currentDate.getMinutes();
      const amOrPm = hours >= 12 ? 'pm' : 'am';
      const formattedHours = hours % 12 || 12; // Convert to 12-hour clock
      const formattedTime = `${formattedHours}:${minutes < 10 ? '0' : ''}${minutes} ${amOrPm}`;
      const formattedDate = `${currentDate.getDate()} ${getMonthName(currentDate.getMonth())} ${currentDate.getFullYear()}`;
      const newMessage = {
        time: formattedTime,
        date: formattedDate,
        text: inputText,
      };

        // Append the new message to the selected chat group's messages
        setChatData((prevChatData) => ({
            ...prevChatData,
            [selectedChatGroup]: [...(prevChatData[selectedChatGroup] || []), newMessage],
          }));
    console.log(chatData);



      //setChatMessages((prevMessages) => [...prevMessages, newMessage]);
      setInputText('');
    }
  };

  // Helper function to get month name
  const getMonthName = (monthIndex) => {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June', 'July',
      'August', 'September', 'October', 'November', 'December'
    ];
    return months[monthIndex];
  };

  return (
    <div className="notes-container">
      <div className="notes-title-bar">
        <div className={colorName + " logo"}>{selectedChatGroup?.slice(0,2).toUpperCase()}</div>
        <div className='notes-title'>{selectedChatGroup}</div>
      </div>
      <div className="notes-chat">
        {chatMessages.map((message, index) => (
          <div key={index} className="chat-message">
          <div>
            <p className="message-time">{message.time}</p>
            <p className="message-date">{message.date}</p>
            </div>
            <div style={{width:"60%",height:"auto"}}><div className="message-text">{message.text}</div></div>
          </div>
        ))}
      </div>
      <div className="send-msg">
        <input
          type="text"
          placeholder="Enter your text here ..."
          value={inputText}
          onChange={handleInputChange}
        />

        <button className="send" onClick={addToChat}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="25" viewBox="0 0 35 29" fill="none">
<path d="M0 29V18.125L14.5 14.5L0 10.875V0L34.4375 14.5L0 29Z" fill="#ABABAB"/>
</svg></button>
      </div>
    </div>
  );
};

export default NoteBox;
