import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/noteboxstyle.css"; // Import your CSS file for styling
const NoteBox = ({ selectedChatGroup, colorName, isMobile }) => {
  const [inputText, setInputText] = useState("");
  const [chatData, setChatData] = useState({});
  const chatMessages = chatData[selectedChatGroup] || [];

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const addToChat = () => {
    if (inputText.trim() !== "") {
      const currentDate = new Date();
      const hours = currentDate.getHours();
      const minutes = currentDate.getMinutes();
      const amOrPm = hours >= 12 ? "pm" : "am";
      const formattedHours = hours % 12 || 12; // Convert to 12-hour clock
      const formattedTime = `${formattedHours}:${
        minutes < 10 ? "0" : ""
      }${minutes} ${amOrPm}`;
      const formattedDate = `${currentDate.getDate()} ${getMonthName(
        currentDate.getMonth()
      )} ${currentDate.getFullYear()}`;
      const newMessage = {
        time: formattedTime,
        date: formattedDate,
        text: inputText,
      };

      // Append the new message to the selected chat group's messages
      setChatData((prevChatData) => ({
        ...prevChatData,
        [selectedChatGroup]: [
          ...(prevChatData[selectedChatGroup] || []),
          newMessage,
        ],
      }));
      console.log(chatData);

      //setChatMessages((prevMessages) => [...prevMessages, newMessage]);
      setInputText("");
    }
  };

  // Helper function to get month name
  const getMonthName = (monthIndex) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return months[monthIndex];
  };

  return (
    <div className="notes-container" style={isMobile ? { width: "100%" } : {}}>
      <div className="notes-title-bar">
        {isMobile && (
          <Link to="/">
            <div style={{ paddingLeft: "1rem" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="12"
                viewBox="0 0 16 12"
                fill="none"
              >
                <path
                  d="M6.27507 10.85C6.47507 10.65 6.57107 10.4083 6.56307 10.125C6.55507 9.84167 6.45074 9.6 6.25007 9.4L3.42507 6.575H14.5751C14.8584 6.575 15.0961 6.479 15.2881 6.287C15.4801 6.095 15.5757 5.85767 15.5751 5.575C15.5751 5.29167 15.4791 5.054 15.2871 4.862C15.0951 4.67 14.8577 4.57433 14.5751 4.575H3.42507L6.27507 1.725C6.47507 1.525 6.57507 1.28733 6.57507 1.012C6.57507 0.736666 6.47507 0.499333 6.27507 0.3C6.07507 0.0999997 5.8374 0 5.56207 0C5.28674 0 5.0494 0.0999997 4.85007 0.3L0.27507 4.875C0.17507 4.975 0.104069 5.08333 0.0620689 5.2C0.0200691 5.31667 -0.000597954 5.44167 6.86646e-05 5.575C6.86646e-05 5.70833 0.0210705 5.83333 0.0630703 5.95C0.10507 6.06667 0.175736 6.175 0.27507 6.275L4.87507 10.875C5.0584 11.0583 5.2874 11.15 5.56207 11.15C5.83674 11.15 6.0744 11.05 6.27507 10.85Z"
                  fill="#5C5C5C"
                />
              </svg>
            </div>{" "}
          </Link>
        )}
        <div className={colorName + " logo"}>
          {selectedChatGroup?.slice(0, 2).toUpperCase()}
        </div>
        <div className="notes-title">{selectedChatGroup}</div>
      </div>
      <div className="notes-chat">
        {chatMessages.map((message, index) => (
          <div key={index} className="chat-message">
            <div>
              <p className="message-time">{message.time}</p>
              <p className="message-date">{message.date}</p>
            </div>
            <div style={{ width: "60%", height: "auto" }}>
              <div className="message-text">{message.text}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="send-msg" style={isMobile ? { width: "100%" } : {}}>
        <textarea
          type="text"
          placeholder="Enter your text here ..."
          value={inputText}
          onChange={handleInputChange}
          style={isMobile ? { width: "95.5%" } : {}}
        />

        <button className="send" onClick={addToChat}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="25"
            viewBox="0 0 35 29"
            fill="none"
          >
            <path
              d="M0 29V18.125L14.5 14.5L0 10.875V0L34.4375 14.5L0 29Z"
              fill="#ABABAB"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default NoteBox;
