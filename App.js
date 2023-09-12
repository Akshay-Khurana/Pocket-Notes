import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./Components/MainPage";
import NotesChatPage from "./Components/NotesChatPage";
import { GroupProvider } from "./Components/GroupContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <GroupProvider>
          <Routes>
            <Route path="/" element={<MainPage />}></Route>
            <Route
              path="/notes/:groupName1"
              element={<NotesChatPage />}
            ></Route>
          </Routes>
        </GroupProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
