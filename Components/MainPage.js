import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";
import "../styles/MainPage.css";
import { useState } from "react";
import Modal from "./Modal";
import { useGroup } from "./GroupContext";

const MainPage = () => {
  const { groupName, color, addGroup } = useGroup();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedChatGroup, setSelectedChatGroup] = useState(null);
  const [colorName, setColorName] = useState(null);
  {console.log(isModalOpen)}

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

    return (
        <div className="main-container" >
            <LeftPanel setColorName = {setColorName} setSelectedChatGroup = {setSelectedChatGroup} groupName = {groupName} color = {color} openModal = {openModal} ></LeftPanel>
            {isModalOpen ? <Modal onClose={closeModal}  ></Modal> : null}
            <RightPanel></RightPanel>

        </div>
    )
}

export default MainPage;