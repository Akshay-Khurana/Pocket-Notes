import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";
import "../styles/MainPage.css";
import { useState, useEffect } from "react";
import Modal from "./Modal";
import { useGroup } from "./GroupContext";

const MainPage = () => {
  const { groupName, color, addGroup } = useGroup();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedChatGroup, setSelectedChatGroup] = useState(null);
  const [colorName, setColorName] = useState(null);

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

  const handleOverlayClick = (e) => {
    // Close the modal when the overlay is clicked
    e.stopPropagation();
    closeModal();
  };

  return (
    <div className="main-container">
      <LeftPanel
        isMobile={isMobile}
        setColorName={setColorName}
        setSelectedChatGroup={setSelectedChatGroup}
        groupName={groupName}
        color={color}
        openModal={openModal}
      ></LeftPanel>
{isModalOpen && (<div className="modal-overlay" onClick={handleOverlayClick}> </div>) }
          {/* Modal */}
        {isModalOpen &&  <Modal isMobile = {isMobile} onClose={closeModal}/>}
      {!isMobile && <RightPanel></RightPanel>}
    </div>
  );
};

export default MainPage;
