import { useState,useEffect,useRef } from "react";
import "../styles/modal.css"
import { useGroup } from "./GroupContext";

const Modal = ({onClose}) => {

    const [groupName, setGroupName] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const {addGroup} = useGroup();
  
  // Create a ref for the modal element
  const modalRef = useRef(null);

  // Use useEffect to add a click event listener when the modal is open
  useEffect(() => {
    // Function to handle clicks outside the modal
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        console.log(1);
        onClose();
      }
    };

    // Add the event listener when the modal is open
    if (modalRef.current) {
      document.addEventListener("click", handleClickOutside);
    }

    // Remove the event listener when the modal is closed
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [onClose]);

    const handleCreateGroup = () => {
        // Perform any actions needed to create the group here
        console.log('Creating group:');
        if (groupName.trim() !== "") {
            addGroup(groupName, selectedColor);
            onClose();
          }

    };
    const changecolor = (color) => {
        setSelectedColor(color);
    }


  return (
    <div className="modal" ref = {modalRef}>
      <div className="modal-content">
        <p className="heading-modal"> Create New Notes Group</p>
        <div className="part-2">
            <p> Group Name </p>
            <input type = "text" placeholder="Enter your group name ... " value={groupName}
            onChange={(e) => setGroupName(e.target.value)}></input>
        </div>
        <div className="part-3">
            <p> Choose colour </p>
            <div onClick = {()=>changecolor("purple")} className="purple colors "></div>
            <div onClick = {()=>changecolor("pink")} className="pink colors"></div>
            <div onClick = {()=>changecolor("sky-blue")} className="sky-blue colors "></div>
            <div onClick = {()=>changecolor("orange")} className="orange colors"></div>
            <div onClick = {()=>changecolor("blue")} className="blue colors"></div>
            <div onClick = {()=>changecolor("purple-blue")} className="purple-blue colors"></div>
        </div>
        <button className="create-button" onClick={handleCreateGroup}>Create</button>
      </div>
    </div>
  );
};

export default Modal;
