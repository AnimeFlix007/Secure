import {
  Routes,
  Route,
} from "react-router-dom";
import CloudPage from "./routes/CloudPage";
import Home from "./routes/Home";
import RecoveryPage from "./routes/RecoveryPage";
import Security from "./routes/SecurityPage";
import ContactPage from "./routes/ContactPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="security" element={<Security />} />
      <Route path="cloud" element={<CloudPage />} />
      <Route path="recovery" element={<RecoveryPage />} />
      <Route path="contact" element={<ContactPage />} />
    </Routes>
  );
}

export default App;