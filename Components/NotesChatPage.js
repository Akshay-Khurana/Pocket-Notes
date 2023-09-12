import LeftPanel from "./LeftPanel";
import NoteBox from "./NoteBox";
import { useState, useEffect } from "react";
import Modal from "./Modal";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

const NotesChatPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [groupName, setGroupName] = useState([]);
  const [color, setColor] = useState([]);
  const [colorName, setColorName] = useState(null);
  const { groupName1 } = useParams();
  const location = useLocation();
  const { groupColor, group } = location.state || {};

  useEffect(() => {
    // Add a resize event listener to handle changes in screen width
    const handleResize = () => {
      // You can adjust the breakpoint as needed
      const isMobile = window.innerWidth <= 768; // For example, consider screens <= 768px as mobile
      setIsMobile(isMobile);
    };

    // Initial check for mobile size
    handleResize();

    // Attach the event listener
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
}, []);

  const [isMobile, setIsMobile] = useState(false);

  const openModal = () => {
        setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const createNewGroup = (newGroupName, selectedColor) => {
    if (newGroupName.trim() !== "") {
      setGroupName([...groupName, newGroupName]);
    }
    setColor([...color, selectedColor]);
  };

  const handleOverlayClick = (e) => {
    e.stopPropagation();
    closeModal();
  }

  return (
    <div style={{ display: "flex" }}>
      {!isMobile && (
        <LeftPanel
          setColorName={setColorName}
          color={color}
          groupName={groupName}
          openModal={openModal}
        ></LeftPanel>
      )}
      {isModalOpen && (<div className="modal-overlay" onClick={handleOverlayClick}> </div>) }

      {isModalOpen ? (
        <Modal createNewGroup={createNewGroup} onClose={closeModal}></Modal>
      ) : null}
      {
        <NoteBox
          isMobile={isMobile}
          colorName={groupColor}
          selectedChatGroup={groupName1}
        ></NoteBox>
      }
    </div>
  );
};

export default NotesChatPage;
