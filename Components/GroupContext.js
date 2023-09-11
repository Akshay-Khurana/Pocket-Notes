// GroupContext.js
import React, { createContext, useContext, useState } from "react";

const GroupContext = createContext();

export const useGroup = () => {
  return useContext(GroupContext);
};

export const GroupProvider = ({ children }) => {
  const [groupName, setGroupName] = useState([]);
  const [color, setColor] = useState([]);

  // Function to add a new group
  const addGroup = (newGroupName, newColor) => {
    setGroupName([...groupName, newGroupName]);
    setColor([...color, newColor]);
  };

  return (
    <GroupContext.Provider value={{ groupName, color, addGroup }}>
      {children}
    </GroupContext.Provider>
  );
};
