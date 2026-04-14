import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

// Public website pages
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Services from "./pages/Services.jsx";
import Contact from "./pages/Contact.jsx";

// Login page
import Login from "./pages/Login.jsx";

// Users CRUD pages
import UsersList from "./pages/UsersList.jsx";
import AddUser from "./pages/AddUser.jsx";
import EditUser from "./pages/EditUser.jsx";

// Projects CRUD pages
import ProjectsList from "./pages/ProjectsList.jsx";
import AddProject from "./pages/AddProject.jsx";
import EditProject from "./pages/EditProject.jsx";

// Services CRUD pages
import ServicesList from "./pages/ServicesList.jsx";
import AddService from "./pages/AddService.jsx";
import EditService from "./pages/EditService.jsx";

// Contacts CRUD pages
import ContactsList from "./pages/ContactsList.jsx";
import AddContact from "./pages/AddContact.jsx";
import EditContact from "./pages/EditContact.jsx";

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

        {/* Login Route */}
        <Route path="/login" element={<Login />} />

        {/* Users CRUD Routes (Protected) */}
        <Route
          path="/users"
          element={
            <ProtectedRoute>
              <UsersList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/add-user"
          element={
            <ProtectedRoute>
              <AddUser />
            </ProtectedRoute>
          }
        />
        <Route
          path="/edit-user/:id"
          element={
            <ProtectedRoute>
              <EditUser />
            </ProtectedRoute>
          }
        />

        {/* Projects CRUD Routes (Protected) */}
        <Route
          path="/projects-list"
          element={
            <ProtectedRoute>
              <ProjectsList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/add-project"
          element={
            <ProtectedRoute>
              <AddProject />
            </ProtectedRoute>
          }
        />
        <Route
          path="/edit-project/:id"
          element={
            <ProtectedRoute>
              <EditProject />
            </ProtectedRoute>
          }
        />

        {/* Services CRUD Routes (Protected) */}
        <Route
          path="/services-list"
          element={
            <ProtectedRoute>
              <ServicesList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/add-service"
          element={
            <ProtectedRoute>
              <AddService />
            </ProtectedRoute>
          }
        />
        <Route
          path="/edit-service/:id"
          element={
            <ProtectedRoute>
              <EditService />
            </ProtectedRoute>
          }
        />

        {/* Contacts CRUD Routes (Protected) */}
        <Route
          path="/contacts-list"
          element={
            <ProtectedRoute>
              <ContactsList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/add-contact"
          element={
            <ProtectedRoute>
              <AddContact />
            </ProtectedRoute>
          }
        />
        <Route
          path="/edit-contact/:id"
          element={
            <ProtectedRoute>
              <EditContact />
            </ProtectedRoute>
          }
        />

        {/* Fallback Route */}
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;