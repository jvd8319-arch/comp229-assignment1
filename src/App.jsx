import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";

// Existing website pages
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Services from "./pages/Services.jsx";
import Contact from "./pages/Contact.jsx";

// Users CRUD pages
import UsersList from "./pages/UsersList.jsx";
import AddUser from "./pages/AddUser.jsx";
import EditUser from "./pages/EditUser.jsx";

// Projects CRUD pages
import ProjectsList from "./pages/ProjectsList.jsx";
import AddProject from "./pages/AddProject.jsx";
import EditProject from "./pages/EditProject.jsx";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        {/* Public Website Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />

        {/* Users CRUD Routes */}
        <Route path="/users" element={<UsersList />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/edit-user/:id" element={<EditUser />} />

        {/* Projects CRUD Routes */}
        <Route path="/projects-list" element={<ProjectsList />} />
        <Route path="/add-project" element={<AddProject />} />
        <Route path="/edit-project/:id" element={<EditProject />} />

        {/* Fallback Route */}
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;