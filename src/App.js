import { BrowserRouter, Routes, Route } from "react-router-dom";
import CaForm from "./pages/CAForm/CaForm";
import HomePage from "./pages/HomePage/HomePage";
import Newsletter from "./pages/Newsletter/Newsletter";
import Users from "./pages/Users/Users";
import Events from "./pages/Events/Events";
import PreEvents from "./pages/PreEvents/PreEvents";
import GuestTalks from "./pages/GuestTalks/GuestTalks";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<HomePage />} />
          <Route exact path="/ca" element={<CaForm />} />
          <Route exact path="/newsletter" element={<Newsletter />} />
          <Route exact path="/users" element={<Users />} />
          <Route exact path="/events" element={<Events />} />
          <Route exact path="/preevents" element={<PreEvents />} />
          <Route exact path="/guesttalks" element={<GuestTalks />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
