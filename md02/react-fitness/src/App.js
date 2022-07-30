import { Home } from "./pages/Home";
import { TrainingPage } from "./pages/TrainingPage";
import { CreateTraining } from "./pages/CreateTraining";
import { EditTraining } from "./pages/EditTraining";
import { Routes, Route } from "react-router-dom";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-training" element={<CreateTraining />} />
        <Route path="/training/:id" element={<TrainingPage />} />
        <Route path="/edit-training/:id" element={<EditTraining />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
