import LeftPanel from "./LeftPanel";
import NoteBox from "./NoteBox";
import { useState } from "react";
import Modal from "./Modal";

const NotesChatPage = () =>{
    const [isModalOpen,setIsModalOpen] = useState(false);
    const [groupName,setGroupName] = useState([]);
    const [color,setColor] = useState([]);
    const [selectedChatGroup, setSelectedChatGroup] = useState(null);
    const[colorName,setColorName] = useState(null);
    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const createNewGroup = (newGroupName,selectedColor) => {
        if (newGroupName.trim() !== '') {
          setGroupName([...groupName,newGroupName]);
        }
        setColor([...color,selectedColor]);
      };

    return (
        <div style={{display:"flex"}}>
            <LeftPanel setColorName = {setColorName} setSelectedChatGroup = {setSelectedChatGroup} color = {color} groupName={groupName} openModal = {openModal} ></LeftPanel>
            {isModalOpen ? <Modal createNewGroup={createNewGroup} onClose = {closeModal}></Modal> : null}
            <NoteBox colorName = {colorName} selectedChatGroup = {selectedChatGroup} ></NoteBox>
        </div>
    )
}

export default NotesChatPage;