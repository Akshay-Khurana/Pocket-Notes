import { useState } from "react";
import "../styles/LeftPanelStyle.css";
import { Link, useNavigate } from "react-router-dom";
import { useGroup } from "./GroupContext";

const LeftPanel = ({ openModal, setColorName, isMobile }) => {
  const { groupName, color } = useGroup();

  const navigate = useNavigate();
  const [selectedGroup, setSelectedGroup] = useState(null);
  const createNewNotes = () => {
    openModal();
  };

  const handleChatGroupClick = (group, colorName) => {
    setColorName(colorName);
    navigate(`/notes/${group}`, { state: { groupColor: colorName, group } });
  };

  return (
    <div className="left-container" style={isMobile ? { width: "100%" } : {}}>
      <h2>Pocket Notes</h2>
      <div
        className="create-notes"
        onClick={createNewNotes}
        style={isMobile ? { width: "90%", justifyContent: "center" } : {}}
      >
        + Create Notes Group
      </div>
      <div className="group-members">
        <div
          className={`member ${
            selectedGroup === "Cuvette Notes" ? "selected-group" : ""
          }`}
          onClick={() => handleChatGroupClick("Cuvette Notes", "circle1")}
        >
          <div className="circle1 circle">CU</div>Cuvette Notes
        </div>
        <div
          className={`member ${
            selectedGroup === "Javascript grp" ? "selected-group" : ""
          }`}
          onClick={() => handleChatGroupClick("Javascript grp", "circle2")}
        >
          <div className="circle2 circle">JS</div>Javascript grp
        </div>
        <div
          className={`member ${
            selectedGroup === "CSS Notes" ? "selected-group" : ""
          }`}
          onClick={() => handleChatGroupClick("CSS Notes", "circle3")}
        >
          <div className="circle3 circle ">CS</div>CSS Notes
        </div>
        <div
          className={`member ${
            selectedGroup === "HTML Notes" ? "selected-group" : ""
          }`}
          onClick={() => handleChatGroupClick("HTML Notes", "circle4")}
        >
          <div className="circle4 circle ">HT</div>HTML Notes
        </div>
        {groupName.map((name, index) => (
          <div
            key={index}
            className={`member ${
              selectedGroup === name ? "selected-group" : ""
            }`}
            onClick={() => handleChatGroupClick(name, color[index])}
          >
            <div className={color[index] + " circle"}>
              {name.slice(0, 2).toUpperCase()}
            </div>
            {name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftPanel;
