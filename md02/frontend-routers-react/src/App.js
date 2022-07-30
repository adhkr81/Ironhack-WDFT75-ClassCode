import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Navbar } from "./components/Navbar";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/:userName" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
